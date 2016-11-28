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
            postsService.getPost(id)
                .then(function(results) {
                    console.log('main controller: ' + results);
                    $rootScope.onePost = results
                })
        }
        // $scope.greeting = "Hello"

    $scope.newPost = function(formData) {
        // formData.votes = 0
        // formData.comments = 0
        formData.user_id = 1
        postsService.postPost(formData).then(function(results) {
            console.log('The results: ' + results);
            $scope.post = results
            $location.path('/newPost')
        })
    }
})

app.controller('AuthController', function($scope, authService) {
    $scope.signUp = function(user) {
        authService.signUp(user).then(function(results) {
          
        })
    }
})

app.controller('PostController', function($scope, $location, postsService, $rootScope) {
    $rootScope.onePost = $scope.onePost
})
