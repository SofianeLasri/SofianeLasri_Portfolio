import {ui, defaultLang, type TranslationKeys} from './ui';

export function getLanguage(lang: string|null) {
    if (lang && lang in ui) {
        return lang;
    }
    return defaultLang;
}

/**
 * Get the translation function for the given language
 * TODO: Les ts ignore sont toujours moches, à voir pour améliorer ça.
 * @param lang
 */
export function useTranslations(lang: string) {
    if (!(lang in ui)) lang = defaultLang;
    return function trans(key: TranslationKeys) {
        // @ts-ignore
        return ui[lang][key] || ui[defaultLang][key];
    }
}