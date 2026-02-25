"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DynamicInputProps
extends React.InputHTMLAttributes<HTMLInputElement> {
label: string;
/** متن کمک‌کننده زیر اینپوت (اختیاری) */
helperText?: string;
/** پیام خطا (اختیاری) */
error?: string;
}

const DynamicInput = React.forwardRef<HTMLInputElement, DynamicInputProps>(
({ label, helperText, error, className, type = "text", ...props }, ref) => {
return (
<div className="space-y-1">
<div
className={cn(
"relative rounded-2xl border bg-white shadow-sm transition-colors",
error ? "border-destructive" : "border-input"
)}
>
<input
ref={ref}
type={type}
placeholder=" "
className={cn(
// padding بالا را کمی بیشتر می‌گیریم تا بین لیبل فلوته و مقدار،
// حدود ۶px فاصله بصری ایجاد شود
"peer block h-12 w-full rounded-2xl border-none bg-transparent px-4 pt-[30px] pb-2 text-sm outline-none",
"placeholder:text-transparent",
"focus-visible:ring-2 focus-visible:ring-primary/20",
"disabled:cursor-not-allowed disabled:opacity-50",
className
)}
{...props}
/>
<label
className={cn(
// حالت عادی: وسط ارتفاع اینپوت
"pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm leading-none text-muted-foreground transition-all",
// حالت فلوته: حدوداً ۱۰px از بالا و ۱۶px از راست، بدون translate عمودی
"peer-focus:top-[10px] peer-focus:-translate-y-0 peer-focus:text-[11px] peer-focus:text-primary",
"peer-[&:not(:placeholder-shown)]:top-[10px] peer-[&:not(:placeholder-shown)]:-translate-y-0 peer-[&:not(:placeholder-shown)]:text-[11px]"
)}
>
{label}
</label>
</div>
{helperText && !error && (
<p className="text-xs text-muted-foreground">{helperText}</p>
)}
{error && <p className="text-xs text-destructive">{error}</p>}
</div>
);
}
);

DynamicInput.displayName = "DynamicInput";

export { DynamicInput };
