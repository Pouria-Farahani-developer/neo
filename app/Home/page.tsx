import { initServerI18n } from '@/lib/i18n/server';

export default async function HomePage() {
    const { t } = await initServerI18n('fa');

    return (
        <main>
            <h1>{t('title')}</h1>
        </main>
    );
}
