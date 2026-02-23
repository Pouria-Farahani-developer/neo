import fs from 'fs';
import path from 'path';
import i18next, { InitOptions } from 'i18next';

const defaultLng = 'fa';

export async function getDictionary(locale: string = defaultLng) {
    const filePath = path.join(process.cwd(), `lib/i18n/translations/${locale}.json`);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function initServerI18n(locale: string = defaultLng) {
    const resources = {
        [locale]: { translation: await getDictionary(locale) },
    };

    await i18next.init({
        resources,
        lng: locale,
        fallbackLng: defaultLng,
        interpolation: { escapeValue: false },
    } as InitOptions);

    return {
        t: i18next.t.bind(i18next),
    };
}
