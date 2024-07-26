---
category: 'java'
name: SL-Craft
description: Serveur Minecraft survie développé sur Paper MC (API Spigot).
usedTechnologies: [ 'java' ]
cover: ../assets/sl-craft/cover.png
logo: ../assets/sl-craft/logo.png
medias: [ '../assets/sl-craft/charte-graphique.jpg',
          '../assets/sl-craft/maquette-aout2022.png',
          '../assets/sl-craft/maquette-2.jpg',
          '../assets/sl-craft/shop.png',
          '../assets/sl-craft/maquette-1.jpg',
          '../assets/sl-craft/screenshot-1.png',
          '../assets/sl-craft/screenshot-2.png',
          '../assets/sl-craft/screenshot-3.png',
          '../assets/sl-craft/screenshot-4.png',
          '../assets/sl-craft/screenshot-5.png',
          '../assets/sl-craft/screenshot-6.png',
          '../assets/sl-craft/screenshot-7.png']
videos: [
  {
    src: 'https://cloud.sl-projects.com//index.php/s/aEyX9nDZiM9f2Xa/download',
    cover: '../assets/sl-craft/cover.png'
  }
]
startDate: 2021-02-01
endDate: 2024-02-01
---

À l'origine, ce serveur ne devait pas être public. En effet, possédant un serveur (physique) chez moi, j'ai commencé à
héberger des parties Minecraft en multijoueur pour moi et mes amis. Mais, je me suis dit que ça serait cool d'en faire 
profiter les autres, alors j'ai commencé à adapter un de mes serveurs existants (celui où on allait le plus souvent) 
afin de l'ouvrir au public.

Ce projet n'a jamais vraiment été sérieux, j'ai toujours travaillé dessus de manière occasionnelle. Cela explique
pourquoi sa durée est aussi importante alors que très peu de fonctionnalités et d'améliorations ont été ajoutées au fil
du temps, mais aussi son nom bien nul et pas très recherché...

Au pic d'activité, nous étions 2 à travailler sur le projet, moi et [Gagafeee](https://gagafeee.dev/), plus une autre 
personne qui faisait la modération (mais ça n'a jamais vraiment été nécessaire vu la faible fréquentation du serveur).

Afin de faire fonctionner le projet, nous avions divers sous projets.

##### Composants du projet

###### Le plugin PaperMC

Le premier sous projet était le plus important puisqu'il s'agissait du serveur lui-même, géré au travers de notre plugin
développé sur mesure par nos soins. Son fonctionnement était relativement simple. Il nous permettait de traquer 
grossièrement l'activité des joueurs (entrées et sorties, induisants donc le temps de jeu), mais permettait également 
aux joueurs de pouvoir se téléporter à une position aléatoire de la carte, tout en restant dans la zone pré-générée 
afin de garder des performances raisonnables.

C'est suite au développement du plugin que j'ai commencé la création du projet [Better jLoquent](?project=bjloquent).

###### Le bot discord

Le second sous-projet était le bot discord, qui ne servait ni plus, ni moins, qu'à retranscrire les messages envoyées
depuis sur le serveur vers un canal discord, et inversement.

###### Le site internet

Enfin, le dernier projet et aussi le moins important, le site internet. IL a toujours été le vilain petit cannard du 
projet SL-Craft en raison du manque de temps dont nous disposions pour le développer, mais aussi de son manque d'intérêt
vis à vis des deux autres projets.

Toutefois, il possédait une partie shop permettant de visualiser l'ensemble des magasins des joueurs créés en jeu. Mais 
honnêtement, le site était très mal optimisé, et créé sur une base de site vraiment pas évoluée (créée à l'origine pour 
mes TP de PHP à l'université). J'ai bien recommencé le projet sur Laravel quelques mois après, mais le serveur Minecraft
était déjà à l'abandon.

##### Fin du projet

Au final, je n'ai vraiment travaillé sur ce projet qu'entre le 25 janvier 2022, et le 31 octobre 2022. Le temps passé 
avant ne s'est pas opéré sur le développement de quelconque application, et celui passé après, à réfléchir comment je
pourrais améliorer le serveur existant (ce qui a d'ailleurs débouché sur un abandon).

Il faut dire qu'étant davantage intéressé par la création de jeux dans des univers en 3D réaliste, je ne voyais pas 
vraiment d'avenir intéressant dans la création de projet Minecraft.

Je reste cependant ouvert à un nouveau projet de serveur, l'idée reste cool. À voir comment l'organiser et quelles 
seraient ses fonctionnalités.

##### Liens

- Dépôt GitLab (Plugin) : [https://gitlab.sl-projects.com/sl-projects/sl-craft-plugin](https://gitlab.sl-projects.com/sl-projects/sl-craft-plugin)
- Dépôt GitLab (Site) : [https://gitlab.sl-projects.com/sl-projects/SL-Craft-Website](https://gitlab.sl-projects.com/sl-projects/SL-Craft-Website)
- Site (archive) : [SL-Craft (archive.org)](http://web.archive.org/web/20230203193314/https://sl-craft.fr/)

Note: L'archive archive.org peut être cassée. :')