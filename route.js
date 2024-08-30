// route method is an HTTP request method
// route defination
app.METHOD(PATH, HANDLER);

// GET method route
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

// ALL method(to get all middleware)
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

// ROUTE PATHS
// based on strings
// match requests about
app.get("/about", function (req, res) {
  res.send("about");
});

// requsets to random
app.get("/random.text", function (req, res) {
  res.send("random.text");
});

// based on string patterns
// will match acd and abcd.

app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

// will match abcd, abbcd, abbbcd, and so on.

app.get("/ab+cd", function (req, res) {
  res.send("ab+cd");
});

// route paths based on regular expressions
// will match anything with an “a” in it.

app.get(/a/, function (req, res) {
  res.send("/a/");
});

// will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, function (req, res) {
  res.send("/.*fly$/");
});

// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
// To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses (()):

Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}

// ROUTE HANDLERS

app.get('/api/v1/stories/:id', function(req,res, next) { 
  //do authorization
  //if not authorized or there is an error 
  //return next(error);
  //if authorized and no errors 
  return next(); 
}), function(req,res, next) {
 //extract id and fetch the object from the database
 //assuming no errors, save story in the request object 
  req.story = story;
  return next(); 
}), function(req,res) {
 //output the result of the database search 
  res.send(res.story);
});
Another useful technique is to pass callbacks as items of an array, thanks to the inner workings of arguments. JavaScript mechanism:

const authAdmin = function (req, res, next) { 
 ... 
 return next(); 
} 
const getUsers = function (req, res, next) {
 ...
 return next();
}
const renderUsers = function (req, res) { 
 res.end(); 
}
const admin = [authAdmin, getUsers, renderUsers];
app.get('/admin', admin);

// APP ROUTES
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book');
  })
  .post(function (req, res) {
    res.send('Add a book');
  })
  .put(function (req, res) {
    res.send('Update the book');
  })

// create a route module and then use it in an Express application.
const express = require('express');
const router = express.Router();

// post page route.
router.route('/post/:slug')
  .all(function(req, res, next) {
      // runs each time
      // we can fetch the post by id from the database
   }) 
  .get(function(req, res, next) {
      //render post
   })
   .put(function(req, res, next) {
      //update post
   })
   .post(function(req, res, next) {
      //create new comment 
   }) 
   .del(function(req, res, next) { 
     //remove post 
   });

module.exports = router

// using router module in main app
const post = require(‘./post’);
app.use(‘/blog, post);