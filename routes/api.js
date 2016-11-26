var express = require('express');
var router = express.Router();
var knex = require('../knex.js');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/posts', function(req, res, next) {
  knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.id')
  .select('users.id', 'users.first_name as firstName', 'posts.id as postId', 'posts.user_id', 'posts.image', 'posts.title as postTitle', 'posts.body as postBody', 'posts.votes', 'posts.comments', 'posts.created_at')
  .then(function(results) {
    console.log(results);
    res.json(results)
  })
});

router.post('/newPost', function(req, res, next){
  console.log('In the posts route');
  console.log(req.body);

  knex('posts')
  .returning('*')
  .insert({
    user_id: req.body.user_id,
    // user_id: req.session.userInfo.id,
    title: req.body.postTitle,
    body: req.body.postBody,
    image: req.body.image,
    votes: 0,
    comments: 0,

  }).then(function(results) {
    console.log(results);
    res.json(results)
})
})

//
// router.get('/', function(req, res, next) {
//     knex('users')
//         .innerJoin('posts', 'users.id', 'posts.user_id')
//         .select('users.id', 'users.first_name as firstName', 'posts.id as postId', 'posts.user_id', 'posts.title', 'posts.body')
//         .orderBy('postId', 'desc')
//         .then(function(data) {
//             for (i = 0; i < data.length; i++) {
//                 if (req.session.userInfo.id == data[i].user_id) {
//                     data[i].edit = 'Edit'
//                     data[i].delete = 'Delete'
//                 }
//             }
//             res.render('posts', {
//                 allPosts: data,
//                 logout: 'Log Out'
//             })
//         })
// });

// router.get('/comments', function(req, res, next){
//   knex('comments')
//   .innerJoin('posts', 'post_id', 'comments.id')
//   .then(function(results){
//     res.json(results)
//   })
// })

module.exports = router;
