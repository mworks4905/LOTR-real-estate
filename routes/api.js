var express = require('express');
var router = express.Router();
var knex = require('../knex.js');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/posts', function(req, res, next) {
  knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.id')
  .select('users.id', 'users.username', 'posts.id as postId', 'posts.user_id', 'posts.image', 'posts.title as postTitle', 'posts.body as postBody', 'posts.votes', 'posts.comments', 'posts.created_at')
  .then(function(results) {

    res.json(results)
  })
});

router.post('/post', function(req, res, next) {
  knex('posts')
  .where('posts.id', req.body.id)
  .innerJoin('users', 'posts.user_id', 'users.id')
  .select('users.id', 'users.username', 'posts.id as postId', 'posts.user_id', 'posts.image', 'posts.title as postTitle', 'posts.body as postBody', 'posts.votes', 'posts.comments', 'posts.created_at')
  .then(function(results) {
    // console.log(results);
    // knex('posts')
    // .where('posts.id', req.body.id)
    // .innerJoin('comments', 'posts.id', 'comments.post_id')
    // .select('posts.id as postId', 'comments.user_id', 'comments.post_id as commentPostId', 'comments.body as commentBody', 'comments.created_at')
    // .then(function(results2){
    //   // console.log(results2);
    //   results[0].comments.push(results2)
    //   // console.log(results[0].comments);
    //   console.log(results);
      res.json(results)
    })
});

router.post('/newPost', function(req, res, next){
  knex('posts')
  .returning('*')
  .insert({
    user_id: req.session.userInfo.id,
    title: req.body.postTitle,
    body: req.body.postBody,
    image: req.body.image,
    votes: 0,
    comments: 0,
  })
  .then(function(results) {
    res.json(results)
  })
})

router.post('/delpost', function(req, res, next){
  knex('posts')
  .where('id', req.body.id)
  .del()
  .then(function(results){
    res.json(results)
  })

})

router.post('/signup', function(req, res, next) {
  knex('users').where('username', req.body.username).then(function(results) {
    if (results.length >= 1) {
      console.log('User already exists!');
    } else {
      var hash = bcrypt.hashSync(req.body.hash, 12)
      knex('users')
      .returning('*')
      .insert({
        username: req.body.username,
        hash: hash
      }).then(function(results){
        var user = results[0]
        delete user.hash
        req.session.userInfo = user
        res.send('User signed up!')
      })
    }
  })
})

router.post('/login', function(req, res, next){
  knex('users').where('username', req.body.username).then(function(results){
    if (results.length < 1){
      console.log('Not authorized');
    } else {
      var valid = bcrypt.compareSync(req.body.hash, results[0].hash)
      if (valid){
        var user = results[0]
        delete user.hash
        req.session.userInfo = user
        res.send('User logged in!')
      } else {
        console.log('wrong password');
      }
    }
  })
})

router.post('/comments', function(req, res, next){
  console.log(req.body);
  knex('comments')
  .where('comments.post_id', req.body.id)
  .innerJoin('posts', 'comments.post_id', 'posts.id')
  .select('posts.id', 'comments.post_id as commentPostId', 'comments.user_id as userId', 'comments.body as commentBody')
  .then(function(results){
    // console.log(results);
    res.json(results)
    // knex('comments')
    // .where('comments.post_id', req.body.id)
    // .innerJoin('users', 'comments.user_id', 'users.id')
    // .then(function(results2){
    //   res.json(results2);
    // })
  })
})

router.post('/voteUp', function(req, res, next){
  knex('posts')
  .where('id', req.body.id)
  .update({
    votes: req.body.votes
  })
  .then(function(votes){
    console.log(votes);
    res.json(votes)
  })
})

module.exports = router;
