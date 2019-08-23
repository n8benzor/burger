## Burger App (eat-da-burger)

![main page](https://github.com/n8benzor/burger/blob/master/public/assets/images/mainpage.png?raw=true)
  

### Development

  

  

-  **Developed for:** University of Arizona Coding Bootcamp

  

-  **Developed by:** Nathan Benzor

  

  

-  **Developed using:** Node.js, Express.js, Handlebars, Javascript, jQuery, MySQL, HTML/CSS, Deployed on Heroku

  
  
-  **Video Link:** [Youtube Link](https://youtu.be/7Ynz03baLew)
  
  

-  **Heroku Live Link:** 

  

  
  

***

  

### What does this app do?

The "EAT-DA-BURGER" application allows the user to enter the name of a burger they would like to make and store it in a "Your Burgers" list and then devour that burger by moving that burger into a "Devoured Burgers" list. Once the user is completely finished with a burger they can delete it.

  

***

  

  

### Functionality of the app

  
 
This application relies on several technologies.  Node.js is the primary backend framework used so that Javascript can be used n o this application. The Express.js framework is used on top of Node to make working with the server much easier and manageable.  A MySQL database is used to store the data for the burgers so that we can utilize a full CRUD (create, read, update, delete) within the app.  The Handlebars templating engine is used to keep the HTML pages simple and clean and to keep then away from the logic based Javascript files.

![dependencies](https://github.com/n8benzor/burger/blob/master/public/assets/images/dependencies.png?raw=true)

This app uses an MVC (model, view, controller) design pattern to organize the application files and also makes the application more manageable at the development level and testing level.

![MVC](https://github.com/n8benzor/burger/blob/master/public/assets/images/mvc.png?raw=true)

The Model managing the burger data:
![model](https://github.com/n8benzor/burger/blob/master/public/assets/images/model.png?raw=true)

The layout View:
![layout view](https://github.com/n8benzor/burger/blob/master/public/assets/images/views.png?raw=true)

The Controller handling the routes:
![controller](https://github.com/n8benzor/burger/blob/master/public/assets/images/controller.png?raw=true)

***

### How to use this app

  

Click on the Heroku link above to visit the Eat-Da-Burger website. Once on the page you can navigate to the middle section of the body and enter in the name of your burger (Create):
![create a burger](https://github.com/n8benzor/burger/blob/master/public/assets/images/createburger.png?raw=true)

You can click the check mark once you are finished entering the name of your burger. Your burger you just created will then be added into the "Your Burgers" list to the left(Read):
![your burgers](https://github.com/n8benzor/burger/blob/master/public/assets/images/yourburgers.png?raw=true)

In this list you can view all of the burgers you have created and once you have decided to devour a burger you can click on the knife and fork button next to that burger to devour it! The devoured burgers will move into another list called "Devoured Burgers" located on the right side of the body of the page (Update):
![devoured burgers](https://github.com/n8benzor/burger/blob/master/public/assets/images/devouredburgers.png?raw=true)

In the "Devoured Burgers" list the user can view all of their devoured burgers and once they are completely finished with a burger they can permanently delete that burger by clicking on the trash can button to the right of that burger (Delete).
***