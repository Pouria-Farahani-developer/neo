"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicInput } from "@/components/ui/dynamic-input";
import { cn } from "@/lib/utils";

const APP_VERSION = "1.2";

export default function Login() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex shrink-0 items-center justify-end pt-5 pl-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-10 shrink-0 border border-input rounded-full cursor-pointer"
          aria-label="بازگشت"
        >
          <ChevronLeft className="size-5" />
        </Button>
      </header>

      {/* ناحیهٔ وسط — لوگو و فرم عمودی وسط‌چین */}
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <div className="mx-auto w-full px-4">
          {/* لوگو و متن خوش‌آمد */}
          <div className="flex flex-col items-center gap-3 pb-8 text-center">
            <div
              className="flex items-center justify-center"
              aria-hidden
            >
              <Image
                src="/assets/images/bank-logo.svg"
                alt="bank-logo"
                width={130}
                height={130}
                className="h-[130px] w-[130px] object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              به سرو خوش آمدید
            </h1>
            <p className="text-sm text-foreground">
              نئوبانک سرمایه‌گذار محور بانک کشاورزی
            </p>
          </div>

          {/* فرم ورود */}
          <form className="flex flex-col gap-5">
            <DynamicInput
              id="mobile"
              type="tel"
              inputMode="numeric"
              dir="ltr"
              autoComplete="tel"
              label="شماره موبایل"
            />
            <DynamicInput
              id="password"
              type="password"
              autoComplete="current-password"
              label="رمز ورود"
            />
            <Button
              type="submit"
              className={cn(
                "h-11 w-full rounded-lg text-sm text-foreground",
                "bg-[#C7FA37] hover:bg-[#C7FA37]",
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
