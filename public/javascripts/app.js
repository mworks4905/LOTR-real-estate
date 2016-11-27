var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'ngAnimate'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/posts.html',
    controller: 'MainController'
  })
  .when('/post', {
    templateUrl: '../partials/post.html',
    controller: 'PostController'
  })
  .when('/signup', {
    templateUrl: '../partials/signup.html',
    controller: 'AuthController'
  })


})
