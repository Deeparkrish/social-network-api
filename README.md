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
    GET all users:    <b>/api/users</b>
    GET a single user by id:  <b>/api/thoughts/:userId </b>
    ADD a new user:   <b>/api/users</b>
    UPDATE user details user by id:   <b>/api/users/_:id </b>
    DELETE a user by id:<b>/api/users/_:id </b>
    ADD a friend to the user's friend list :  <b>/api/users/:userId/friends</b>
    DELETE a friend from user's friend list : <b>/api/users/:userId/friends/:friendId</b>
 #### Thoughts
    GET all thoughts: <b>/api/thoughts</b>
    GET a single thought by id. for an user :  <b>/api/thoughts/thoughtId</b>
    ADD a new thought:   <b> api/thoughts/:userId</b>
    UPDATE user details user by id:   <b>/api/thoughts/thoughtId </b>
    DELETE a thought by id:<b>/api/thoughts/thoughtId </b>
    ADD a reaction to an user's thought :  <b>/api/thoughts/:thoughtId/reactions</b>
    DELETE a reaction for a uswr thought: <b>/api/thoughts/:thoughtId/reactionId</b>
 
  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
   ## Process
 
    
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
  





