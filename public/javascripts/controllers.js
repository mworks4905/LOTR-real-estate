app.controller('MainController', function($scope, postsService){

  postsService.getPosts().then(function(results) {
    console.log(results);
    $scope.arr = results

  })


})
