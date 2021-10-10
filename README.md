# Goalify  <img  align="right" src="https://github.com/Goalify/front-end/blob/main/src/Goalify-logos.jpeg" width="250" height="250" />
## Table of Contents
1. [ Introdution. ](#intro)
2. [ Business Goals and Objectives ](#business)
3. [ Requirements ](#req)
4. [ Project Glossary ](#glossary)
5. [ Technical Stack ](#techstack)
6. [ Stakeholders Roles. ](#stake)
7. [ User Stories ](#stories)
8. [ Design Documentation ](#design)
9. [ Architecture And Diagrams ](#arc)
10. [ Authors ](#auth)

<a name="intro"></a>
## 1. Introdution
Goalify is a web application used by users to set their goals, track their progress and achievements, view statistics on their progress, and share that with other users who would also be posting their progress creating some kind of a motivational feedback loop.

<a name="business"></a>
## 2. Business Goals and Objectives
The problem: the lack of motivation to get up and pursue whatever any of us is trying to achieve has been a problem for almost everyone. 

Solution: Create an application to assist people put forward objectives and keep tabs on their development towards those objectives. It gives an organized method to follow and track objective advancement through highlights like dashboards and progress bars. Additionally, the platform is a magnificent apparatus for inspiration. 

The app allows users to stay focused on the most critical aspects of their goals. It aids in the identification of potential roadblocks as well as ideas for overcoming them. It can assist in setting more realistic goals and maintaining a happy attitude along the way. Most importantly, uses can share that with other users who would also be posting their progress creating some kind of a motivational feedback loop. 

Competition: There are many apps out there made for the purpose of tracking goals but they all lack in the social side. 

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


<a name="stake"></a>
## 6. Stakeholders Roles
Stakeholder's Name | Roles | Responsibilities
| :---: | :--- | :---
Users  | Suggest new features, Report existing bugs. | Contact technical support to report bugs and problems. Provide feedback to improve the website.
Board of executives  | Direct and lead the project. | Choosing the main functions of the project. Managing and organizing the whole project. Take lead in Decision Making.
Investors | Providing financial support to the development process. | Determining if some features are worth the funding. Deciding the amount of money to spend on certain features. 
Developers | Develop and maintain the platform. | Fixing bugs. Adding features. Unit testing.
Project owners | Manage the project. | Accept or reject the project, and provide high level business requirements.
QA testers | Assures the quality of the new features. | End to end testing.


<a name="stories"></a>
## 7. User Stoires
User Type | User Story Title | User stories
| :--- | :---: | :---
Web User  | Registration | As a user, I can register into the website by entering my email and password and confirming the password so that I can login to the platform.
Web User  | Login | As a user, I can log in to the website by entering my confidentials (email, password) so that I can use the platform.
Web User | Profile | As a user, I should be able to upload my profile picture and add a nickname to my account. 
Web User | Creating goals | As a user, I want to be able to add new goals so that I can have an organized to-do list.
Web User | Progress tracking | As a user, I should be able to update my progress in any of my goals so that I can view the progression.
Web User | Statistics | As a user, I want to generate stats about my progress so that I could have a better understanding of my performance.

<a name="design"></a>
## 8. Design Documentation:
We decided to have one client web app used by users. Another administration interface might be introduced in the future.

We are using ReactJS as our frontend framework since it’s simple and efficient. Typescript and linter were added to make sure the code is easily debugged, easily read, and as clean as possible. Using Redux to store and organize the data retrieved from the backend, making it available to all of the frontend components.

Unit tests using Jest and Enzyme were added to make sure that future changes won’t break the existing code. The SOLID principle was followed to make each of our components visible and with clear responsibilities, each of our components does only one thing at a time.

That client communicates with the backend microservices using a middleware/proxy called user-proxy, which is a Node ExpressJS app responsible for load-balancing and assuring the safety of the backend servers and microservices as well as the user’s data since such data might be sensitive. Typescript and Linter were also added to the middleware for the same purpose explained above. SOLID was also followed, as each of our API middlewares has only one clear job.

User authentication will be done by user-proxy which communicates with its own MongoDB database, this was done to make sure that no one can access any of the backend microservices and databases unless they’re authored and have access to the exact resource they’re trying to access. A middleware function will be called before any of the API middle-points checking the authority of the accessor. 

Here’s a sample diagram of the flow of a test post request to the endpoint/test:

![alt text](https://github.com/Goalify/front-end/blob/main/design.png?raw=true)

After all of the user authentications are handled by the middleware, the valid requests are sent to the core server. 

We have decided to use Flask as the main framework for the core server because of its flexibility and the compatibility it embraces with the latest technologies. Moreover, it is easy and highly scalable on simple projects. Principles such as KISS and SOLID were followed during the development to make the process of debugging and adding new features simpler and more efficient. The core server is connected to a MySQL database, which stores all data except for the users’ credentials. MySQL was selected as it is secure, flexible, and easy to set up. 


<a name="arc"></a>
## 9. Architecture And Diagrams

Architecture:

![alt text](https://github.com/Goalify/front-end/blob/main/arc.png?raw=true)


Front-End Class Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/classdiagramfrontend.png?raw=true)


Use Case Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/usecasediagram.png?raw=true)


Schema Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/schemadiagram.png?raw=true)




<a name="auth"></a>
## 10. Authors
This project was created and is maintained by: Hasan Khadra, Mahmood Darwish, Mohamad Dwik, Mohammad Shahin.
