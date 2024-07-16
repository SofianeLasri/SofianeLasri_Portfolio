export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'framework-and-libraries': 'Framework & Libraries',
        'programming-languages': 'Programming Languages',
        'additional-skills': 'Additional Skills',
        'today-short': 'Today',
        'framework': 'Framework',
        'language': 'Language',
        'library': 'Library',
        'operating-system': 'Operating System',
        'tool': 'Tool',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.twitter': 'Twitter',
        'framework-and-libraries': 'Framework & Librairies',
        'programming-languages': 'Langages de programmation',
        'additional-skills': 'Annexes',
        'today-short': 'Aujd.',
        'framework': 'Framework',
        'language': 'Langage',
        'library': 'Librairie',
        'operating-system': 'Système d\'exploitation',
        'tool': 'Outil',
    },
} as const;

export type TranslationKeys = keyof typeof ui['en'] | keyof typeof ui['fr'];