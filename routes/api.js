var express = require('express');
var router = express.Router();
var knex = require('../knex.js');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/posts', function(req, res, next) {
  // knex('posts').then(function(results){
  //   res.json(results)

  knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.id')
  .then(function(results) {
    res.json(results)
    })
});

module.exports = router;
