var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // knex('posts').then(function(results){
  //   res.json(results)
  console.log("hi there");
  // knex('posts').innerJoin('users', 'posts.user_id', 'users.id')
  //   .then(function(results) {
  //     res.json(results)
  //   })
});

module.exports = router;
