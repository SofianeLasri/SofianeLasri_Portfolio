---
category: 'web'
name: Métacafé
description: Social network application developed with VueJS as part of a school project.
usedTechnologies: ['typescript', 'vuejs', 'sass', 'sequelize', 'express']
cover: ../assets/metacafe/metacafe-cover.png
logo: ../assets/metacafe/square-logo-with-background.avif
medias: ['../assets/metacafe/presentation1.png', '../assets/metacafe/presentation2.png', '../assets/metacafe/screenshot1.png', '../assets/metacafe/screenshot2.jpg', '../assets/metacafe/maquette-v2_2.png', '../assets/metacafe/maquette-v2_1.png',]
startDate: 2024-09-01
endDate: 2024-07-01
---

Métacafé is a project I completed as part of my master's in web development at Efrei Paris, during several graded projects.

Initially designed as a messaging app similar to WhatsApp with VueJS and ExpressJS, I revisited it a few months later
for a GraphDB lab. The modifications required on the server were so extensive that the project was forked, and the
server was completely rewritten around the GraphQL framework. The application was kept as a base but was heavily
modified to meet the new architecture. Additionally, its design was also revamped to address the new lab's objective,
which was to create an application similar to Twitter (see the last two images).

Finally, I picked up the project one last time for a project very similar to the first one, but this time using RabbitMQ
for communication between different users. The project was neither forked nor rewritten. On the contrary, this allowed
me to complete it.

In its ideal form, Métacafé is a social network application that allows users to meet others with the same interests
defined during their registration on the app. However, for various reasons such as lack of time, skills during the
project's development, and the complexity of the task, Métacafé could not be completed as I would have liked.
Nonetheless, it remains an interesting project that allowed me to explore new technologies and new ways of thinking
about web application development.

##### Interesting feature

The project has been entirely made with AVIF pictures (AV1 Image File), a relatively recent format that was not yet
widely supported by all web browser at the project creation. Profile pictures sent by the users are also converted into
this format, thankfully to the Sharp library.

The technical choice of using this format against WEBP or PNG, has been made because of its great compression algorithm
efficiency. Indeed, AVIF pictures offers a better quality for the same file size compared to older formats. So, it is
possible to save bandwith by reducing pictures file size without lossing quality.

#### Links

**GitHub Repository** (original version): [https://github.com/SofianeLasri/metacafe](https://github.com/SofianeLasri/metacafe)

**GitHub Repository** (GraphQL version): [https://github.com/SofianeLasri/metacafe-graphql](https://github.com/SofianeLasri/metacafe-graphql)

**Demo Site**: [https://metacafe.sl-projects.com](https://metacafe.sl-projects.com)

⚠️ Please do not enter sensitive data on the demo site!