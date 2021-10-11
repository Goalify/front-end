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
10. [ Run the App ](#run-app)
11. [ Demo ](#demo)
12. [ Authors ](#auth)

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
- Middle-ware: An intermediate server acting as an interface between the front-end and the back-end.
- Core server: The server which stores all data other the users' credentials.
- Goal: A desired ambition that a person aims to achieve.
- Milestone: Partial actions and achievements necessary to make progress toward a particular goal.
- Discover page: A page where latest public goals are published.
- Private goal: A goal only visible by its creator.
- Public goal: A goal that can visible on the discover page.
- Access token: An access token contains the security credentials for a login session and identifies the user.
- Authentication request: A request sent from the frontend to the middleware to check if the user is granted an access token. 

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
Web User  | Registration | As a user, I can register on the website by entering my email and password and confirming the password so that I can log in to the platform.
Web User | Login | As a user, I want to able to log in to the website by entering my confidentials (email, password) so that I can use the platform. 
Web User | Change confidentials | As a user, I want to be able to change my confidentials (email, password) in order to keep my account safe.
Web User | Profile | As a user, I should be able to upload my profile picture and add a nickname to my account. 
Web User | Creating goals | As a user, I want to be able to add new goals so that I can have an organized to-do list.
Web User | Edit goals | As a user, I want to be able to edit my goals so that I can adjust my goals to new circumstances.
Web User | Creating milestones | As a user, I want to be able to create milestones in a specific goal so that I can divide my goal into small achievable steps.
Web User | Publish goals | As a user, I want to be able to publish my goals so I can share my progress. 
Web User | View public goals | As a user, I want to be able to view other people's public goals so I can be more motiviated to achieve my own goals. 
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

Showing how we applied SOLID to our front-end, we only let our classes have a single responsibilty. For example class `addGoalModal` is only resposible for adding a new goal. Class `DbClickField` only shows some text that can be edited by pressing twice on the text, and so on. We followed Liskov substitution principle by using typescript since it can easily swap components if they share the same contract. We followed interface segregation principle by having multiple interfaces (e.g. `goal`, `milestone`) instead of designing a single interface to substitute them all. We followed dependency inversion principle by making sure that child classes depended on abstraction from parent classes, for example the `GoalsList` sends functions to the class `GoalItem` and these functions will be used by the child class to edit the goal. `GoalItem` doesn't depend on the implementation of the funtions from `GoalsList`. Those functions can be edited without affecting the child class.

We followed KISS principle by not over-engineering anything and using the simplest methods to achieve objectives. We don't for example use any advanced techniques in react in our front-end such as Compound Components, Props Getters, and State Reducer.

<a name="arc"></a>
## 9. Architecture And Diagrams

Architecture:

![alt text](https://github.com/Goalify/front-end/blob/main/arc.png?raw=true)


Front-End Class Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/classdiagramfrontend.jpg?raw=true)


Use Case Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/usecasediagram.jpg?raw=true)


Schema Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/schemadiagram.jpg?raw=true)


Sequence Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/Untitled.png?raw=true)

<a name="run-app"></a>
## 10. Run the App
To run the app without any errors, you need to first run the `Core-server`, then the `Middleware`, and finally the `front-end`.
### Core-server
This parts explains how to run the core server on Ubuntu 20.04 or higher and python 3.8 or higher.
#### Database
As prevoiusly mentioned, the core server uses MySQL as its main database. So you need to install MySQL using the following steps.
1. You need to update the package index on your server if you’ve not done so recently using the command below.
  ```
  $ sudo apt update
  ```
  
2. Install the mysql-server package:
  ```
  $ sudo apt install mysql-server
  ```
  
3. Then you need to access the MySQL shell as the root user using the following command:
  ```
  $ sudo mysql
  ```
  NOTE: If you already had installed MySQL and enabled password authentication for root, you will need to use a different command to access the MySQL shell. The command to use in that case:
  ```
  $ mysql -u root -p
  ```
  This will enable you to access the MySQL shell after entering the password you set.

4. Now you need to create a database called 'goalify'. Type this command in the MySQL shell. 
  ```
  > CREATE DATABASE goalify;
  ```
  
5. Create a user for this database to be used by the core server using the following command:
  ```
  > CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  ```
  NOTE: keep `newuser` and `password` as they are. Otherwise you will need to change the user and the password in `db.yaml` file.
  
6. Finally granting the new user a full access to the newly created database 'goalify'.
  ```
  > GRANT ALL PRIVILEGES ON goalify.* TO 'newuser'@'localhost';
  ```
  
#### Python
All of the dependencies and necessary modules used are listed in the file `requirements.txt` you need to run the following command in the terminal in the project directory:
  ```
  pip install -r requirements.txt
  ```
Now you can run the core server using the command in the project directory:
  ```
  python app.py
  ```
This will make the app run on the localhost (127.0.0.1) and the port 3001. If you would like to change that, you can modify `app.py` file and change the values of `IP` and `PORT`.
### Middleware

### Frontend
1. You need to install `npm`:
```
sudo apt install npm
```
2. You need to `cd` to the directory of the `front-end` repo and run:
```
npm install
```
3. Now, to run the app use the following command:
```
npm start
```
 
<a name="demo"></a>
## 11. Demo
[Here](https://youtu.be/ixyBmpZGab0) you can find a link to a video-demo of goalify with some explanations on how the platform works.

<a name="auth"></a>
## 12. Authors
This project was created and is maintained by: Hasan Khadra, Mahmood Darwish, Mohamad Dwik, Mohammad Shahin.
