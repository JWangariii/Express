### Express

@ Express website describes Express as a "minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

@ Express provides basic tools that facilitate the creation of Node.js applications without obscuring Node.js features

### Routing

@ refers to how an application responds to a client request at a particular endpoint
app is an instance of express.

# METHOD is an HTTP request method, in lowercase.

PATH is a path on the server.
HANDLER is the function executed when the route is matched.

# PATH an endpoint where requests can be made (backend endpoint)

they can be
string
string patterns
regular expressions.

# Route Parameters

The route parameters are used to capture the values that are assigned to a particular position in the URL. (URL segments.)

# Route handlers

We can have multiple request handlers, hence the name middleware. They accept the third parameter/function next and calling which (next()) to be executed will switch the execution flow from one handler to the next

# app.route()

You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as well as reducing redundancies and typos.

The express.Router middleware allows us to group the route handlers for a particular part of a site together and access them using a common route-prefix.

To use the router module in our main app file we first require() the route module (post.js). We then call use() on the Express application to add the router to the middleware handling path while specifying the URL path of '/blog'.

# middleware functions

@ Are those that have the response object, request oject and the next function in the application request-response cycle
@ next() function executes the succeding middleware function not the current one when called

@ middleware dunctions can :
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.

@ error handling middleware has 4 functions

# tempelate engines

@ facilitates use of static tempelate files, turns variables into values and transforms files into HTML

@ default tempelate engine: pug

# Using template engines with Express

@ application setting properties:
views : specifies tempelate files directory
views engine : specifies the tempelate engine used

# Pug Template Engine

@ it uses white spaces and indention as part of it's syntax

### 1.important pug features

## simple tags

@ tags are nested accoring to there indention; we din't need to close tags

# Space separated

h1 Welcome to Pug

# Piped text

div
| To insert multiple lines of text,
| You can use the pipe operator

# Block of text

div.
But that gets tedious if you have a lot of text.
You can use "." at the end of a tag to denote a block of text.
To put tags inside this block, simply enter tag in a new line and
indent it accordingly.

## comments

@ are same as js // but are changed to HTML ones <!-- -->

## attributes

@ are put in paranthesis and seperated by commas

from:

<div class = "container column main" id = "division" width = "100" height = "100"></div>

to:
div.container.column.main#division(width = "100", height = "100")

### 2.important pug features

Passing Values to Templates

### 3.Important Pug Features

We can also use these passed variables within text

### 4.important pug features

## conditionals

If a User is logged in, the page should display "Hi, User" and if not, then the "Login/Sign Up" link. To achieve this, we can define a simple template like

html
head
title Simple template
body
if(user)
h1 Hi, #{user.name}
else
a(href = "/sign_up") Sign Up

### 5.important pug features
