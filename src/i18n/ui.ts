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
        'project-type.web': 'Web Development',
        'project-type.mobile': 'Mobile Development',
        'project-type.java': 'Java Development',
        'project-type.game': 'Game Development',
        'portfolio-name': 'Sofiane Lasri.',
        'portfolio-desc': 'Full-Stack Developer',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.education-career': 'Education & Career',
        'nav.contact': 'Contact',
        'hero.welcome': 'Welcome to my site',
        'hero.title': 'Hi! I am',
        'hero.subtitle': 'Full-Stack Developer',
        'about-me.part1': 'Passionate about application development, I love experimenting new technologies. I also enjoy designing and creating user interfaces, always giving much credit to sites and applications with a polished UI/UX.',
        'about-me.part2': 'Thanks to my experience gained in the industry, as well as through my various personal projects, I have a good command of Laravel, TypeScript, and Sass. :)',
        'btn.download-cv': 'Download my CV',
        'btn.github': 'GitHub',
        'btn.linkedin': 'LinkedIn',
        'btn.dribbble': 'Dribbble',
        'section.experience-skills': 'Experience & Skills',
        'section.experience': 'Experience',
        'section.projects': 'My Projects',
        'section.portfolio': 'Portfolio',
        'section.education-career': 'Education & Career',
        'section.education': 'Education',
        'section.career': 'Career',
        'meta.experience': 'Experience',
        'meta.portfolio': 'Portfolio',
        'meta.education-career': 'Professional Experience',
        'description': 'Description',
        'medias': 'Medias',
        'used_technologies': 'Used technologies',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'framework-and-libraries': 'Framework & Librairies',
        'programming-languages': 'Langages de programmation',
        'additional-skills': 'Annexes',
        'today-short': 'Aujd.',
        'framework': 'Framework',
        'language': 'Langage',
        'library': 'Librairie',
        'operating-system': 'Système d\'exploitation',
        'tool': 'Outil',
        'project-type.web': 'Développement Web',
        'project-type.mobile': 'Développement Mobile',
        'project-type.java': 'Développement Java',
        'project-type.game': 'Développement de jeux',
        'portfolio-name': 'Sofiane Lasri.',
        'portfolio-desc': 'Développeur Full-Stack',
        'nav.experience': 'Expérience',
        'nav.projects': 'Projets',
        'nav.education-career': 'Éducation & Carrière',
        'nav.contact': 'Contact',
        'hero.welcome': 'Bienvenue sur mon site',
        'hero.title': 'Salut ! Je suis',
        'hero.subtitle': 'Développeur Full-Stack',
        'about-me.part1': 'Passionné par le développement d’applications, j’adore expérimenter de nouvelles technologies. J’aime également concevoir et réaliser des interfaces graphiques, j’attribue toujours beaucoup de mérite aux sites et applications à l’UI/UX soignée.',
        'about-me.part2': 'Grâce à mon expérience acquise en entreprise, mais également au travers de mes divers projets personnels, je possède une bonne maîtrise de Laravel, TypeScript et de Sass. :)',
        'btn.download-cv': 'Télécharger mon CV',
        'btn.github': 'GitHub',
        'btn.linkedin': 'LinkedIn',
        'btn.dribbble': 'Dribbble',
        'section.experience-skills': 'Expérience & Compétences',
        'section.experience': 'Expérience',
        'section.projects': 'Mes projets',
        'section.portfolio': 'Portfolio',
        'section.education-career': 'Formation & Carrière',
        'section.education': 'Éducation',
        'section.career': 'Carrière',
        'meta.experience': 'Expérience',
        'meta.portfolio': 'Portfolio',
        'meta.education-career': 'Expérience professionnelle',
        'description': 'Description',
        'medias': 'Médias',
        'used_technologies': 'Technologies utilisées',
    },
} as const;

export type TranslationKeys = keyof typeof ui['en'] | keyof typeof ui['fr'];