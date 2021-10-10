# Goalify  <img  align="right" src="https://github.com/Goalify/front-end/blob/main/src/Goalify-logos.jpeg" width="250" height="250" />
## Table of Contents
1. [ Introdution. ](#intro)
2. [ Business Goals and Objectives ](#business)
3. [ Requirements ](#req)
4. [ Project Glossary ](#glossary)
5. [ Technical Stack](#techstack)
6. [ Authors ](#auth)

<a name="intro"></a>
## 1. Introdution
Goalify is a web application used by users to set their goals, track their progress and achievements, view statistics on their progress, and share that with other users who would also be posting their progress creating some kind of a motivational feedback loop.

<a name="business"></a>
## 2. Business Goals and Objectives
The problem: the lack of motivation to get up and pursue whatever any of us is trying to achieve has been a problem for almost everyone. Solution: Create an application to assist people put forward objectives and keep tabs on their development towards those objectives. It gives an organized method to follow and track objective advancement through highlights like dashboards and progress bars. Additionally, the platform is a magnificent apparatus for inspiration. The app allows  uses to stay focused on the most critical aspects of their goals. It aids in the identification of potential roadblocks as well as ideas for overcoming them. It can assist in setting more realistic goals and maintaining a happy attitude along the way. Most importantly, uses can share that with other users who would also be posting their progress creating some kind of a motivational feedback loop. Competition: There are many apps out there made for the purpose of tracking goals but they all lack in the social side. 

<a name="req"></a>
## 3. Requirements
### 3.1. Functioanl Requirements
- Account setup.
- Creating goals.
- Logging daily progress.
- Specifying milestones and tracking them.
- Generating statistics on progress.
- Share goals, progress, achievements and stats.
### 3.2. Non-Functioanl Requirements
- **Privacy**: Users’ data should be completely safe and private unless it’s shared by the user. This requirement will be met by having two types of data (private and public). This will be enforced by the middle-ware.
- **Security**: We will meet this requirement by using a middle-ware server as a security abstraction between the front-end and the back-end. Servers must be secured against:
  - cross-site scripting attacks
  - cross-site injections
  - insecure connections to the servers
  - MIME-sniffing
  - Clickjacking
- **Simplicity**: UI should be easy to use without complications as it will be used by young adults and designed for daily use. We will meet this requirement by keeping a minimal and intuitive design in the front-end.
- **Scalability**: The platform should be able to handle an increasing amount of users which at some point could hit millions. This can be handled by the middle-ware by load balancing between the back-end micro services.
- **Extensibility**: The source code of the platform should be able to handle additional features. The developers will meet this by following software engineering design principles such as *S.O.L.I.D.* and *KISS*.

<a name="glossary"></a>
## 4. Project Glossary
- Goal: A desired ambition that a person aims to achieve.
- Middle-ware: An intermediate server acting as an interface between the front-end and the back-end.
- Milestone: Partial actions and achievements necessary to make progress toward a particular goal.

<a name="techstack"></a>
## 5. Technical Stack
- front-end client: ReactJS + Typescript
- user-proxy middleware: Node ExpressJs + Typescript
- user accounts database: MongoDB
- core-server: Python Flask
- main database: MySQL

<a name="auth"></a>
## 6. Authors
This project was created and is maintained by: Hasan Khadra, Mahmood Darwish, Mohamad Dwik, Mohammad Shahin.
