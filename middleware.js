// MIDDLEWARE FUNCTION
const myLogger = function (req, res, next) {
  console.log("A new request received at " + Date.now());
  next();
};

// To load the middleware function, call app.use(), specifying which middleware function
 path (/).

const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log("A new request received at " + Date.now());
   next();
}

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000);

// To restrict it to a specific route (and all its subroutes), provide that route as the first argument of app.use(). For Example,

const express = require('express');
const app = express();

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});


// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

app.listen(3000);

// Error-handling middleware

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// simply pass the error to next()

app.get('/', (req, res, next) => {
  next(new Error('I am passing you an error!'));
});