// console.log("HEllo world");
// console.log("HEllo world");
// console.log("HEllo world");

// const http = require("http");
// import http from "http";
// console.log(http);

import { add, name } from "./app.js";
add(2, 3);
console.log(name);

const express = require('express');
const app = express();

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: “Gomycode", 
      url:"http://www.tutorialspoint.com"
   });
});

app.listen(3000);
