const bodyParser = require("body-parser");

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", "./views");
