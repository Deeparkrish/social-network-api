# social-network-api
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/social-network-api" />
    <img src="https://img.shields.io/github/issues/deeparkrish/social-network-api" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/social-network-api" >       
  </p>
  <p align="left"> 
     <img src="https://img.shields.io/github/languages/top/deeparkrish/social-network-api"/>
    <img src="https://img.shields.io/badge/Mongoose-yellow" />
    <img src="https://img.shields.io/badge/MongoDB-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-express-red" >
    <img src="https://img.shields.io/badge/-Javascript 'Date'-orange" >
</p>

 ## Description
  An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.The social network api uses a NoSQL database to handle large amounts of unstructured data.

 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [ModelAssociations](#modelassociations)
  * [ProjectDemo](#projectdemo)
  * [Testing](#testing)
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install  express mongoose

  ##  Usage
  ### Start the app
    node server.js
    
  ### API Routes 
  #### Users 
    GET all users:    /api/users
    GET a single user by id:  /api/thoughts/:userId 
    ADD a new user:   /api/users
    UPDATE user details user by id:  /api/users/_:id 
    DELETE a user by id:  /api/users/_:id
    ADD a friend to the user's friend list :  /api/users/:userId/friends
    DELETE a friend from user's friend list : /api/users/:userId/friends/:friendId
 #### Thoughts
    GET all thoughts: /api/thoughts
    GET a single thought by id. for an user :  /api/thoughts/thoughtId
    ADD a new thought:   api/thoughts/:userId
    UPDATE user details user by id:  /api/thoughts/thoughtId
    DELETE a thought by id: /api/thoughts/thoughtId
    ADD a reaction to an user's thought :  /api/thoughts/:thoughtId/reactions
    DELETE a reaction for a uswr thought: /api/thoughts/:thoughtId/reactionId
 
  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
  ## Process
  * In a social network API, When the user enters the command (npm start/nodmeon/node server) to invoke the application,
  * A server is started and the Mongoose models are synced to the MongoDB database.
  * When he opens API GET routes in Insomnia Core for users and thoughts, the data for each of these routes is displayed in a formatted JSON.
  * When he tests API POST, PUT, and DELETE routes in Insomnia Core, he wilk be able to successfully create, update, and delete **users** and **thoughts** in the       database.
  * He will also be able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
    
  ## Technologies 
  * Express.js for routing 
  * MongoDB - a NoSQL database and 
  * the Mongoose ODM. 
 
  
  ## ModelAssociations
  ![Image](https://github.com/Deeparkrish/social-network-api/blob/main/src/assets/images/users.png)
  ![Image](https://github.com/Deeparkrish/social-network-api/blob/main/src/assets/images/Thoughts.png)
  ![Image](https://github.com/Deeparkrish/social-network-api/blob/main/src/assets/images/reactions.png)
  
  ## ProjectDemo
  [![Youtube](https://img.youtube.com/vi/RNpZXHQjWBA/0.jpg)](https://www.youtube.com/embed/RNpZXHQjWBA)


  ## Testing
  ####  CRUD operations can be testted using following applications:
    Insomnia core / Postman   
    link : http://localhost:3001/api/<routes>
  

  ## ProjectRepo 
  Github: https://github.com/Deeparkrish/social-network-api

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
  





