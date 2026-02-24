"use client";

import { useEffect, useRef } from "react";
import { toPersianNumber } from "@/lib/utils/number-utils";

const TAGS_TO_SKIP = new Set([
  "SCRIPT",
  "STYLE",
  "INPUT",
  "TEXTAREA",
  "CODE",
  "PRE",
  "NOSCRIPT",
]);

function processTextNode(node: Text): void {
  const text = node.textContent;
  if (!text || !/\d/.test(text)) return;
  const converted = toPersianNumber(text);
  if (converted !== text) node.textContent = converted;
}

function processNode(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    processTextNode(node as Text);
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node as Element;
  if (TAGS_TO_SKIP.has(el.tagName)) return;

  node.childNodes.forEach(processNode);
}

export function GlobalPersianDigits({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const run = () => processNode(root);

    run();

    const observer = new MutationObserver(() => {
      run();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      characterDataOldValue: false,
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="contents">{children}</div>;
}
