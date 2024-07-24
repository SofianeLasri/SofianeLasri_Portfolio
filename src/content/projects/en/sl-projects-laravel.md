---
category: 'web'
name: SL-Projects web platform
description: Web platform encompassing various sub-projects, developed with Laravel.
usedTechnologies: ['laravel', 'typescript', 'sass']
cover: ../assets/sl-projects-laravel/cover-dark.png
logo: ../assets/sl-projects-laravel/logo-dark.png
medias: [
  '../assets/sl-projects-laravel/vitrine-pr6.jpeg',
  '../assets/sl-projects-laravel/vitrine-pr7.png',
  '../assets/sl-projects-laravel/vitrine-pr7-mobile.png',
  '../assets/sl-projects-laravel/vitrine-pr7-projets.png',
  '../assets/sl-projects-laravel/vitrine-pr7-projet.png',
  '../assets/sl-projects-laravel/dashboard-6-medias-grid.png',
  '../assets/sl-projects-laravel/dashboard-6-medias-grid-nosort.png',
  '../assets/sl-projects-laravel/dashboard-6-medias-list.png',
  '../assets/sl-projects-laravel/dashboard-6-wordpress-like-medias-list.png',
  '../assets/sl-projects-laravel/dashboard-6-send-media.png',
  '../assets/sl-projects-laravel/dashboard-6-media-infos.jpg',
  '../assets/sl-projects-laravel/dashboard-6-create-project.png',
  '../assets/sl-projects-laravel/dashboard-6-notifications.png',
  '../assets/sl-projects-laravel/trello-board.png']
startDate: 2022-08-09
endDate: 2024-06-15
---

##### Preamble

This project is somewhat complex. Originally, it was only supposed to be my portfolio. I wanted to gather all my personal projects there, as evidenced by the initial mockups and screenshots attached below.

Before this project, I was already developing a website to meet this need. However, I had based it on my homemade framework, [VBcms 2](https://github.com/SofianeLasri/VBcms-2.0). The downside of this choice was that I had to implement all the new features I wanted to add to the framework myself. Development was therefore very slow and tedious, in addition to being exhausting in the long run. So I took advantage of my first internship to take a complete break from its development, to take the time to learn new things at work, but also to redesign a new, more elegant design than ever.

Development of the site resumed during the summer of 2022, where I actively started creating new mockups. Then, I restarted the project from scratch, this time based on the Laravel framework, used by the company that hired me (Kang). However, creating mockups takes time. It was also the first time I used real modern tools for mockups, first testing Adobe XD, then preferring Figma later.

##### Why make it simple when you can make it complicated?

The Laravel project now created and well underway, I thought it would be a good idea to create an admin panel that would allow me to manage the site's content.

Because it's true that with VBcms 2, I no longer really had to worry about this part. The framework, resembling more of a CMS, allowed me to manage content very simply from the admin interface. No authentication to manage, built-in permission system, and above all, no admin interface to develop, everything was already ready (or almost).

However, this was not the case with Laravel (and anyway, I wasn't interested in templates and project mockups). So it had to be created. That's when I discovered the Laravel ecosystem, which quite simply allows you to implement complex features to develop yourself.

##### An admin part with endless development

If the showcase/public part of the website was almost finished in March 2023, the admin part never was (until the project was stopped on June 15, 2024). Indeed, wishing to absolutely create the perfect project, I spent an enormous amount of time developing the various features of the admin interface. Moreover, no longer being able to work as much as before on VBcms 2 due to my internship, development times literally exploded.

For example, it took me several months to simply make authentication functional on the project with the various related subdomains (something that Laravel does not natively support). I also spent a lot of time developing the media library, which was supposed to allow uploading files to the site to use them for creating blog articles or project pages.

However, I do not regret the time spent on it. This project was beneficial to me in many ways.

##### A project rich in lessons

First of all, it's the first project I completed using a framework. I learned a lot, and it allowed me to gain real experience with Laravel. Having touched almost every aspect of the framework, I now know all the features it offers.

Finally, the work done on this project is not entirely to be discarded. Indeed, in the future, I will reuse the admin interface I developed for other projects. Its design system is quite complete and allows for all kinds of interfaces.

##### Interesting features

- Multi-domain authentication (even if not completed)
- Logging all HTTP requests in the database
- Advanced file management
  - File upload
  - File manager / Media library
  - Automatic image conversion to different sizes in WebP format
- Notification system (without the notification center)
- Fully responsive (usable on mobile)

I would have liked to implement a permission system, but, being the only user of the site, I always postponed the development of this feature.

##### Links

- GitHub Repository: [https://github.com/SofianeLasri/SL-Projects-Website](https://github.com/SofianeLasri/SL-Projects-Website)
- Figma Mockup (Showcase): [https://www.figma.com/design/...](https://www.figma.com/design/MHphZL3q3WvFzRsWdKh4ly/Site-internet)
- Figma Mockup (Dashboard): [https://www.figma.com/design/...](https://www.figma.com/design/v1QLtDeZhDOC0b85crsVx8/Dashboard)