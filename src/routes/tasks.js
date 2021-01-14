const express = require('express')
const router = express.Router()

// all tasks
router.get('/', function (req, res) {
  console.log('tasks')
  res.status(200).send("Hello World!");
})

module.exports = router
