const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

var data = [
  { item: "milk" },
  { item: "play football" },
  { item: "hello duniya" },
];

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    res.render("todo", { todos: data });
  });

  app.post("/todo", function (req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", function (req, res) {
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
