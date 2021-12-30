<h1 align="center">
  <br>
  Backend Server with Postgres, Express, and Node Stack
  <br>
</h1>

<h4 align="center">A minimal boilerplate backend server setup to quickly start developing NodeJS applications using most popular frameworks.</h4>

<p align="center">

  <!-- Node version -->
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%20v12.14.3-blue.svg?style=flat"
      alt="node version" />
  </a>

  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/npm/">
    <img src="https://img.shields.io/badge/npm-%3E%3D%20v6.9.0-blue.svg?style=flat"
      alt="npm version" />
  </a>

  <!-- PR welcome -->
  <a href="http://makeapullrequest.com/">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"
      alt="pr welcome" />
  </a>

</p>

## Table of Contents

- [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Prerequisites](#prerequisites)
  - [Dev Setup](#dev-setup)
- [Structure and Naming](#structure-and-naming)
- [Tech Stack](#tech-stack)

<a name="getting-started"></a>

## 1. Getting started

<img src="https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png" width="90" height="90">

<a name="built-with"></a>

### 1.1 Built With

The backend server boilerplate setup is built with some of the most popular frameworks like:

- [PostgreSql](https://www.postgresql.org/)

  > PostgreSQL, also known as Postgres, is a **free and open-source relational database** management system emphasizing extensibility and SQL compliance. It supports both SQL (relational) and JSON (non-relational) querying. It is a highly stable database management system, backed by more than 20 years of community development which has contributed to its high levels of resilience, integrity, and correctness. PostgreSQL is used as the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications. [read more...](https://www.postgresql.org/about/)

- [ExpressJS](https://expressjs.com/)

  > Express.js is a framework used for **Node** and it is most commonly used as a web application for **node js**. Express is just a module framework for Node that can use for applications that are based on server/s that will "listen" for any input/connection requests from clients. [read more...](https://expressjs.com/)

- [Node.Js](https://nodejs.org/en/)
  > Node.js is an **open-source**, **cross-platform**, **back-end JavaScript runtime** environment that runs on the V8 engine and executes JavaScript code outside a web browser. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. [read more...](https://nodejs.org/en/about/)

<a name="prerequisites"></a>

### 1.2 Prerequisites

This backend server uses [PostgreSql](https://www.postgresql.org/), [ExpressJS](https://expressjs.com/) and [Node.Js](https://nodejs.org/en/). A prior knowledge of these would be good.
The setup also uses [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) for code quality checks, along with [Jest](https://jestjs.io/) for unit testing the rest api's.
Other prerequisites are as follows:

- NodeJS **>= v12.14.3**

- NPM **>= v6.9.0**

<a name="dev-setup"></a>

### 1.3 Dev Setup

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```shell
# Clone this repository
$ git clone https://pscode.lioncloud.net/xt-capability/audit-tool.git

# Go into the repository
$ cd audit-tool/web-server

# Install dependencies
$ npm install

# Run the app
$ npm start
```

<a name="structure-and-naming"></a>

## 2. Structure and Naming

![Structure and Naming](https://raw.githubusercontent.com/elsewhencode/project-guidelines/master/images/folder-tree.png)

Ultimately, I don't believe there is one best project structure for Express projects.

Instead of asking:

> What’s the best way to structure my files and folders?

I think it’s better to ask:

> What places do my different types of logic go?

There are clearer answers to that question, and things we can follow.
And by doing a good job of separating our logic by layers, a project structure will naturally emerge.

**Layers?**
<img src="https://www.coreycleary.me/_next/static/media/Express-REST-API-Struc.aa7ecaa0c41dbb7344c70665a5f5e259.png">

- Organize your files around product features / modules / components, not roles.

  **Bad**

  ```
  .
  ├── controllers
  |   ├── auditController.js
  |   └── userController.js
  ├── routes
  |   ├── auditRoutes.js
  |   └── userRoutes.js
  ├── services
  |   ├── auditServices.js
  |   └── userServices.js
  ```

  **Good**

  ```
  .
  ├── audit
  |   ├── audit.controller.js  # handling the request and calling services
  |   ├── audit.routes.js  # import your controller(s) and chain together the functions
  |   ├── audit.services.js  # should contain the majority of the business logic
  |   ├── audit.model.js # contains the logic for accessing persistent data
  |   └── __test__ # test files related to controller, services, model
  ├── user
  |   ├── user.controller.js
  |   ├── user.routes.js
  |   ├── user.services.js
  |   ├── user.model.js
  |   └── __test__
  ```

  _Why:_

  > Instead of a long list of files, you will create small modules that encapsulate one responsibility and so on. It gets much easier to navigate through and things can be found at a glance.

- Put your additional test files to a separate test folder to avoid confusion.

  _Why:_

  > It is a time saver for other developers or DevOps experts in your team.

- Routes.

  _Why:_

  > no logic should go in your `routes` file. They should only chain together your `controller` functions (in this case, we only have one). So routes are pretty simple. Import your controller(s) and chain together the functions.

- Controllers.

  _Why:_

  > think of `controllers` as "orchestrators". They call the `services`, which contain more "pure" business logic. But by themselves, `controllers` don't really contain any logic other than handling the request and calling services. The services do most of the work, while the `controllers` orchestrate the service calls and decide what to do with the data returned. They take the HTTP request forwarded from the route and either return a response, or keep the chain of calls going. They handle the HTTP status codes as part of this response too.

- Services.

  _Why:_

  > `services` should contain the majority of the business logic: - logic that encapsulates the business requirements, calls the data access layer or models, calls API's external to the Node application. And in general, contains most of the algorithmic code.

- Data Access Layer/Models.

  _Why:_

  > "Data Access Layer" means the layer that contains the logic for accessing persistent data. This can be something like a database, a Redis server, Elasticsearch, etc. So whenever need to access such data, put that logic here.

<a name="tech-stack"></a>

## 3. Tech Stack

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Circle-icons-stack.svg/2000px-Circle-icons-stack.svg.png" width="100" height="100">

This is a backend server setup independent of front end tech stack. We use some of the most popular and widely used framework for developing NodeJS full-stack application. These are as follows:

- [PostgreSql](https://www.postgresql.org/)
- [ExpressJS](https://expressjs.com/)
- [Node.Js](https://nodejs.org/en/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
