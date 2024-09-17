---
category: 'java'
name: Better jLoquent
description: ORM Java inspiré de Laravel Eloquent, forké du projet jLoquent.
usedTechnologies: ['java']
cover: ../assets/bjLoquent/bJloquent-cover.avif
logo: ../assets/bjLoquent/bJloquent-logo.avif
startDate: 2022-02-19
endDate: 2023-04-25
---

Lorsque j'ai commencé à travailler sur mon serveur minecraft, SL-Craft, j'ai vite commencé à ressentir le besoin d'avoir
un ORM qui pourrait m'aider à intéragir avec ma base de données. J'ai donc commencé à chercher des solutions, mais 
aucune ne m'a paru suffisament simple et efficace par rapport à ce que je voulais faire. Comme j'était déjà familier 
avec Laravel, j'ai décidé de m'inspirer de son ORM, Eloquent, pour créer mon propre ORM en Java. Toutefois, cela 
représente un travail conséquent, et j'ai donc décidé de partir d'un projet existant pour gagner du temps.

Après quelques recherches sur internet, je suis tombé sur le projet [jLoquent](https://github.com/thederickff/jloquent),
mais qui malheuresement semblait abandonné depuis plusieurs années. Etant pratiquement inutilisable en l'état, il a donc
fallu entièrement le debugger afin de comprendre comment il fonctionnait. Après plusieurs jours à travailler dessus,
j'ai finalement réussi à le faire fonctionner, et j'ai donc décidé de le forké pour le continuer.

Les modifications que j'ai apporté à jLoquent ne sont pas très nombreuses, mais elles ont au moins permis de clarifier 
son fonctionnement au travers d'une petite documentation. J'ai également ajouté quelques fonctionnalités qui permettent 
de le rapprocher davantage du comportement de Laravel Eloquent.

##### État du projet

Actuellement, le projet est à l'arrêt. L'ayant créé pour répondre à un besoin spécifique lié à mon serveur Minecraft, 
aujourd'hui je n'en ai plus l'utilité. Cependant, je reste ouvert à toute contribution et il n'est pas exclu que je
reprenne son développement, si bien sûr j'ai à nouveau l'occasion de travailler sur un projet Java qui nécessite l'usage
d'un petit ORM.

##### Liens

- Dépôt GitHub : [https://github.com/SofianeLasri/bjLoquent](https://github.com/SofianeLasri/bjLoquent)