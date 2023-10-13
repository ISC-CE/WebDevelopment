# WebDevLecture
Node.js
## User Management Service

This is a working sample of a crud application using MongoDB and Expressjs
## Features
- Authentication
- Validation
- Middleware
- Mongoose

## Installation

This service requires [Node.js](https://nodejs.org/) v16+ to run.
Install the dependencies and devDependencies and start the server.

- Clone Lecture repo from [github](https://github.com/ISC-CE/WebDevLecture)
- CD to your folder and install the dependencies with 
```sh
npm install
```
- Create MongoDB account on [MongoAtlas here](https://www.mongodb.com/cloud/atlas/register)
- Create a .env file in root directory
- Copy contents in .env.dev to .env and fill it with the neccesary credentials
- Run the following code to start you local development
```sh
npm run dev
```

## Libraries

Some libraries used to develop this service and there instructions can be seen below for further instructions on how to use them.

| Plugin | README |
| ------ | ------ |
| Express | https://expressjs.com/en/starter/installing.html |
| Mongoose | https://mongoosejs.com/docs/ |
| JWT | https://github.com/auth0/node-jsonwebtoken#readme |
| Joi | https://joi.dev/api/?v=17.9.1 |
| DotEnv | https://github.com/motdotla/dotenv#readme |
| Nodemon | https://github.com/remy/nodemon#nodemon |

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3000
```