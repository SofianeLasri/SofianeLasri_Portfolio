---
category: 'web'
name: Métacafé
description: Application de type réseau social développée avec VueJS à l’occasion d’un projet scolaire.
usedTechnologies: [ 'typescript', 'vuejs', 'sass', 'sequelize', 'express' ]
cover: ../assets/metacafe/metacafe-cover.png
logo: ../assets/metacafe/square-logo-with-background.avif
medias: [ '../assets/metacafe/presentation1.png',
          '../assets/metacafe/presentation2.png',
          '../assets/metacafe/screenshot1.png',
          '../assets/metacafe/screenshot2.jpg',
          '../assets/metacafe/maquette-v2_2.png',
          '../assets/metacafe/maquette-v2_1.png', ]
startDate: 2024-09-01
endDate: 2024-07-01
---

Métacafé est un projet que j'ai réalisé dans le cadre de ma formation en mastère développement web à Efrei Paris, à
l'occasion de plusieurs projets notés.

D'abord conçu comme une messagerie similaire à WhatsApp avec VueJS et ExpressJS, je l'ai repris quelques mois plus tard
pour un TP de GraphDB. Les modifications à réaliser sur le serveur étant énormes, le projet a été forké et le serveur
s'est vu être entièrement réécrit autour du framework GraphQL. L'application avait été gardée comme base, mais a été
lourdement modifiée pour répondre à la nouvelle architecture. De plus, son design a également été revu afin de répondre
à la nouvelle problématique du tp, qui était de réaliser une application similaire à Twitter (voir les deux dernières
images).

Enfin, j'ai repris le projet une dernière fois pour un projet très similaire au premier, mais cette fois-ci en utilisant
RabbitMQ pour la communication entre les différents utilisateurs. Le projet n'a donc pas été forké, ni réécrit. Au
contraire, cela m'a permis de le terminer.

Métacafé, dans sa forme idéale, est une application de réseau social qui permet de rencontrer d'autres personnes ayant
les mêmes centres d'intérêt que nous avons définis lors de notre inscription sur l'application. Toutefois, pour des
raisons diverses telles que le manque de temps, de compétances lors de la réalisation du projet mais aussi de la
complexité de la tâche, Métacafé n'a pas pu être terminé comme je l'aurais souhaité. Cependant, il reste un projet
intéressant qui m'a permis de découvrir de nouvelles technologies et de nouvelles façons de penser le développement
d'applications web.

##### Particularité intéressante

Le projet a entièrement été conçu avec des images au format Avif (AV1 Image File), un format relativement récent et peu
supporté par les différents navigateurs web lors de la création du projet. Les images de profil envoyées par les
utilisateurs sont également convertis dans ce format grâce à la libraire Sharp.

Le choix d'avoir utilisé ce format au profit de webp ou encore png, s'est conforté par sa grande efficacité en terme de
compression. En effet, les images avif offrent une bien meilleure qualité pour une taille de fichier similaire. Il est
donc possible d'économiser de la bande passante en réduisant la taille des images compressées, sans perdre en qualité
par rapport aux autres formats plus anciens.

##### Liens

- Dépôt GitHub (version originale) : [https://github.com/SofianeLasri/metacafe](https://github.com/SofianeLasri/metacafe)
- Dépôt GitHub (version GraphQL) : [https://github.com/SofianeLasri/metacafe-graphql](https://github.com/SofianeLasri/metacafe-graphql)
- Site de démonstation : [https://metacafe.sl-projects.com](https://metacafe.sl-projects.com)

⚠️ Veillez à ne pas renseigner de données sensibles sur le site de démonstration !