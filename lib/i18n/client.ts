'use client';

import i18n from 'i18next';
import { initReactI18next, useTranslation, Trans } from 'react-i18next';
import en from '@/lib/i18n/translations/en.json';
import fa from '@/lib/i18n/translations/fa.json';

const resources = {
    en: { translation: en },
    fa: { translation: fa },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'fa',
    fallbackLng: 'fa',
    interpolation: { escapeValue: false },
});

export const changeLanguage = (locale: 'fa' | 'en') => i18n.changeLanguage(locale);
export { useTranslation, Trans, i18n };
