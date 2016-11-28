app.controller('MainController', function($scope, postsService, $location, $rootScope, $cookies, cookieService) {

    $scope.$watch('cookies', function() {
        if ($cookies.getAll().redditSession) {
            $scope.$emit('cookiesDetected')
            $scope.userWelcome = cookieService.decodeCookie($cookies.get('reddit-clone'))
        }
    })

    $scope.$on('cookiesDetected', function() {
        $scope.userWelcome = cookieService.decodeCookie($cookies.get('reddit-clone'))
    })

    postsService.getPosts().then(function(results) {
        $scope.posts = results
    })

    $scope.currentPost = function(id) {
        postsService.getPost(id).then(function(results) {
          console.log(results);
            $rootScope.onePost = results
        })
    }

    $scope.newPost = function(formData) {
        postsService.postPost(formData).then(function(results) {
            $scope.post = results
            $location.path('/')
        })
    }


})

app.controller('AuthController', function($scope, authService) {
    $scope.signUp = function(user) {
        authService.signUp(user).then(function(results) {
        })
    }
    $scope.logIn = function(user) {
      console.log("in the log in function");
        authService.logIn(user).then(function(results) {
        })
    }

})

app.controller('PostController', function($scope, $location, postsService, $rootScope) {
    $rootScope.onePost = $scope.onePost

    $scope.getComments = function(postId) {
        postsService.getComments(postId).then(function(results){
          console.log(results);
          $scope.comments = results
        })
    }

    $scope.delPost = function(id) {
        postsService.delPost(id).then(function(results){
            $scope.post = results
            $location.path('/')
        })
    }

    $scope.voteUp = function(id, voteCount){
      var votes = voteCount++
      console.log(votes);
      postsService.voteUp(id, votes).then(function(results){
        $scope.Onepost.votes = results
      })
    }

})
