const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://amarjeet:yjvXjw7UC4A02hvf@cluster0.mkw03uy.mongodb.net/test", {
    useNewUrlParser:true
})

var todoSchema = new mongoose.Schema({
    item :String
})

var Todo = mongoose.model("Todo", todoSchema);


module.exports = function (app) {
  app.get("/", function (req, res) {
    Todo.find( {}, function(err,data){
        if(err) throw err
        res.render("todo", {todos:data})
    })
  });

  app.post("/todo", function (req, res) {
    var newTodo = Todo(req.body).save(function(err,data){
        if(err) throw err
        res.json(data)
    })
  });

  app.delete("/todo/:item", function (req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
        if(err) throw err
        res.json(data)
    })
  })
};
