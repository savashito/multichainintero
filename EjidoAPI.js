var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

const list_all_ejidos = function(req, res) {
  /*Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });*/
  res.json({bark:"hello"});

};

 app.route('/ejido')
    .get(list_all_ejidos)
    // .post(todoList.create_a_task);