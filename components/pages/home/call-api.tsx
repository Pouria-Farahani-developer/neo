'use client';
import {useUsersList} from "@/services/src/hooks/bill/get-user-list/get-user-list";




export default function ReactQueryTestPage() {
    const { data , isLoading, isError, error, isFetching } = useUsersList()


    if (isLoading) {
        return (
            <div className="text-center p-10">
                <p>در حال بارگذاری اولیه داده‌ها...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-red-500 p-10">
                <p>خطا در دریافت داده:</p>
                <p>{error instanceof Error ? error.message : 'خطای ناشناخته'}</p>
            </div>
        );
    }

    console.log(data)

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">لیست کاربران (با TanStack Query)</h1>

            {/* نمایش وضعیت fetch در پس‌زمینه */}
            {isFetching && !isLoading && (
                <div className="mb-4 text-blue-600">درحال به‌روزرسانی داده‌ها...</div>
            )}

        </div>
    );
}
