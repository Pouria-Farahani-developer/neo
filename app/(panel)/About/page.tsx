'use client';
import { useTranslation } from '@/lib/i18n/client';

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <button>
            {t('title')}
        </button>
    );
}
