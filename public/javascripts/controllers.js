app.controller('MainController', function($scope, postsService, $location){

  postsService.getPosts().then(function(results) {
    $scope.posts = results
  })

  $scope.newPost = function(formData){
    formData.user_id = 1
    // formData.votes = 0
    // formData.comments = 0
    console.log(formData)
    postsService.postPost(formData).then(function(results){
      console.log('On the way back from the server');
      console.log('The results: ' + results);
      

    })
  }

})
