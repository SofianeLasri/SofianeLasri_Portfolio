import {ui, defaultLang} from './ui';

export function getLanguage(lang: string|null|undefined) {
    if (lang && lang in ui) {
        return lang;
    }
    return defaultLang;
}

/**
 * Get the translation function for the given language
 * TODO: Les ts ignore sont moches, à voir pour améliorer ça.
 * @param lang
 */
export function useTranslations(lang: string) {
    if (!(lang in ui)) lang = defaultLang;
    return function trans(key: string) {
        // @ts-ignore
        if (!(key in ui[lang])) {
            console.warn(`Missing translation for key "${key}" in language "${lang}"`);
            return key;
        }
        // @ts-ignore
        return ui[lang][key] || ui[defaultLang][key];
    }
}