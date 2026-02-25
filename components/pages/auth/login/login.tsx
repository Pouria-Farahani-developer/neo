"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const APP_VERSION = "1.2";

export default function Login() {
  return (
    <div className="login-gradient flex min-h-dvh flex-col">
      <header className="flex shrink-0 items-center justify-end pb-4 pt-4">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="size-10 shrink-0 rounded-lg border border-input bg-secondary hover:bg-accent"
          aria-label="بازگشت"
        >
          <ChevronLeft className="size-5" />
        </Button>
      </header>

      {/* ناحیهٔ وسط — لوگو و فرم عمودی وسط‌چین */}
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-sm px-4">
          {/* لوگو و متن خوش‌آمد */}
          <div className="flex flex-col items-center gap-3 pb-8 text-center">
            <div className="flex size-16 items-center justify-center" aria-hidden>
              <Image
                src="/assets/images/bank-logo.svg"
                alt="لوگوی سرو"
                width={64}
                height={64}
                className="size-16 object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              به سرو خوش آمدید
            </h1>
            <p className="text-sm text-muted-foreground">
              نئوبانک سرمایه‌گذار محور بانک کشاورزی
            </p>
          </div>

          {/* فرم ورود */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mobile"
                className="text-sm font-medium text-foreground"
              >
                شماره موبایل
              </label>
              <Input
                id="mobile"
                type="tel"
                inputMode="numeric"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="rounded-lg border-input"
                dir="ltr"
                autoComplete="tel"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                رمز ورود
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="rounded-lg border-input"
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              className={cn(
                "h-11 w-full rounded-lg text-base font-medium text-white",
                "bg-[var(--chart-2)] hover:bg-[var(--chart-5)]",
                "focus-visible:ring-[var(--chart-2)]"
              )}
            >
              ورود به سرو
            </Button>
            <Link
              href="/login/forgot"
              className="text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              فراموشی رمز ورود
            </Link>
          </form>
        </div>
      </div>

      {/* فوتر — همیشه پایین باکس */}
      <footer className="flex shrink-0 flex-col items-center gap-0.5 rounded-b-lg px-4 pt-6 pb-6">
        <span className="text-sm font-medium text-[var(--chart-5)]">
          Sarv Neobank
        </span>
        <span className="text-xs text-muted-foreground">v {APP_VERSION}</span>
      </footer>
    </div>
  );
}
