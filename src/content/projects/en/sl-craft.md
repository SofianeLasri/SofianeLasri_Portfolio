---
category: 'java'
name: SL-Craft
description: Survival Minecraft server developed on Paper MC (Spigot API).
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

Originally, this server was not meant to be public. Indeed, having a (physical) server at home, I started hosting Minecraft multiplayer games for me and my friends. But, I thought it would be cool to let others enjoy it, so I started adapting one of my existing servers (the one we went to the most) to open it to the public.

This project was never really serious; I always worked on it occasionally. This explains why its duration is so long while very few features and improvements have been added over time, but also its rather lame and unoriginal name...

At its peak activity, there were 2 of us working on the project, me and [Gagafeee](https://gagafeee.dev/), plus another person who did moderation (but it was never really necessary given the low traffic on the server).

To make the project work, we had various sub-projects.

##### Project Components

###### The PaperMC Plugin

The first sub-project was the most important since it was the server itself, managed through our custom-developed plugin. Its operation was relatively simple. It allowed us to roughly track player activity (entries and exits, thus inducing playtime), but also allowed players to teleport to a random position on the map while staying within the pre-generated area to maintain reasonable performance.

Following the development of the plugin, I started creating the project [Better jLoquent](?project=bjloquent).

###### The Discord Bot

The second sub-project was the Discord bot, which served no more and no less than to relay messages sent from the server to a Discord channel, and vice versa.

###### The Website

Finally, the last project and also the least important, the website. It has always been the ugly duckling of the SL-Craft project due to the lack of time we had to develop it, but also its lack of interest compared to the other two projects.

However, it had a shop section allowing users to view all the shops created by players in the game. But honestly, the site was very poorly optimized and created on a very basic site foundation (originally created for my PHP labs at university). I did start the project again on Laravel a few months later, but the Minecraft server was already abandoned.

##### End of the Project

In the end, I only really worked on this project between January 25, 2022, and October 31, 2022. The time spent before was not on developing any application, and the time spent after was thinking about how I could improve the existing server (which eventually led to its abandonment).

It's worth mentioning that being more interested in creating games in realistic 3D environments, I didn't see much interesting future in creating Minecraft projects.

However, I remain open to a new server project; the idea is still cool. We'll see how to organize it and what its features would be.

##### Links

- GitLab Repository (Plugin): [https://gitlab.sl-projects.com/sl-projects/sl-craft-plugin](https://gitlab.sl-projects.com/sl-projects/sl-craft-plugin)
- GitLab Repository (Website): [https://gitlab.sl-projects.com/sl-projects/SL-Craft-Website](https://gitlab.sl-projects.com/sl-projects/SL-Craft-Website)
- Website (archive): [SL-Craft (archive.org)](http://web.archive.org/web/20230203193314/https://sl-craft.fr/)

Note: The archive.org archive may be broken. :')