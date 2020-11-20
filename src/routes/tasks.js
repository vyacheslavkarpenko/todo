const express = require('express')
const router = express.Router()

// all tasks
router.get('/', function (req, res) {
  res.send('<h1>Tasks</h1>')
})

console.log('tasks')
module.exports = router
