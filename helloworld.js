// import modules
const express = require("express");

// create app
const app = express();

// the port it will run in
const port = 4000;

//  more interactive
app.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});

//  a wildcard route (*) with app.get() function:
app.get("*", function (req, res) {
  res.end("Hello World");
});

// start the Express.js web server and output a user-friendly terminal message in a callback
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
