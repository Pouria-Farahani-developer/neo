// app/providers/query-provider.tsx
'use client'; // بسیار مهم: برای استفاده از هوک‌ها باید Client Component باشد

import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// یک نمونه از QueryClient برای کش کردن وضعیت‌ها
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // تنظیمات پیش‌فرض برای کوئری‌ها، مثلاً فعال کردن بازتحصیل مجدد در پنجره
            staleTime: 1000 * 60 * 5, // 5 دقیقه داده‌ها "تازه" تلقی می‌شوند
        },
    },
});

export function QueryProvider({
                                  children,
                              }: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
