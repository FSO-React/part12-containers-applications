const express = require('express');
const { getAsync } = require('../redis/index');

const router = express.Router();

router.get('/', async (req, res) => {
  const todoCount = await getAsync('added_todos');
  console.log(todoCount);
  res.json({
    added_todos: todoCount ? Number(todoCount) : 0,
  });
});

module.exports = router;