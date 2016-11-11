var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../views/partials/posts.html',
    controller: 'MainController'
  })

})
