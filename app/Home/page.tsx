"use client"
import {useTr} from "@/lib/i18n/config";

export default function Home() {
    const [t] = useTr();

    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    )
}