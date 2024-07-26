---
category: 'java'
name: Better jLoquent
description: Java ORM inspired by Laravel Eloquent, forked from the jLoquent project.
usedTechnologies: ['laravel', 'typescript', 'sass']
cover: ../assets/bjLoquent/bJloquent-cover.avif
logo: ../assets/bjLoquent/bJloquent-logo.avif
startDate: 2022-02-19
endDate: 2023-04-25
---

When I started working on my Minecraft server, SL-Craft, I quickly began to feel the need for an ORM that could help me interact with my database. So I started looking for solutions, but none seemed simple and efficient enough for what I wanted to do. Since I was already familiar with Laravel, I decided to take inspiration from its ORM, Eloquent, to create my own ORM in Java. However, this represents a significant amount of work, so I decided to start from an existing project to save time.

After some research on the internet, I came across the project [jLoquent](https://github.com/thederickff/jloquent), but unfortunately, it seemed abandoned for several years. Being practically unusable as it was, I had to completely debug it to understand how it worked. After several days of working on it, I finally managed to get it working, and I decided to fork it to continue its development.

The modifications I made to jLoquent are not very numerous, but they at least helped clarify its functionality through a small documentation. I also added some features that bring it closer to the behavior of Laravel Eloquent.

##### Project Status

Currently, the project is on hold. Having created it to meet a specific need related to my Minecraft server, I no longer need it today. However, I remain open to any contributions, and it is not excluded that I may resume its development if, of course, I have the opportunity to work on a Java project that requires the use of a small ORM.

##### Links

- GitHub Repository: [https://github.com/SofianeLasri/bjLoquent](https://github.com/SofianeLasri/bjLoquent)