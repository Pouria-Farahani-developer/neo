import { initServerI18n } from '@/lib/i18n/server';
import TestApiPage from "@/components/pages/panel/home/call-api";

export default async function HomePage() {
    const { t } = await initServerI18n('fa');

    return (
        <main>
            <h1>{t('title')}</h1>
            <TestApiPage />
        </main>
    );
}
