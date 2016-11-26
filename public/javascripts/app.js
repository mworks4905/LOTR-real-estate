var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/posts.html',
    controller: 'MainController'
  })
  .when('/newPost', {
    templateUrl: './partials/newPost.html',
    controller: 'MainController'
  })

})
