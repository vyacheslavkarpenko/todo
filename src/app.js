// подключение express
const express = require("express");
const app = express();

const tasks = require('./routes/tasks')
app.use('/tasks', tasks)

app.listen(3000);
module.exports = app;
