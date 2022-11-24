var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();
const cors = require("cors")
app.use(cors({origin:["http://localhost:3000", "https://to-do-to-do.onrender.com"]}))

app.use(express.urlencoded({ extended: false }));
//set up template engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));

//fire controlers
todoController(app);

//listen to port
const PORT = process.env.PORT || 3000
app.listen(3000);
console.log("you are listening to port 3000");
