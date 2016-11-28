app.service('postsService', function($http){
  return {
    getPosts: function(){
      return $http.get('/api/posts').then(function(response){
        return response.data
      })
    },

    getPost: function(id){
      var reqObj = {id: id}
      return $http.post('/api/post/', reqObj).then(function(response){
        // console.log(response.data);
        return response.data
      })
    },

    postPost: function(formData){
      return $http.post('/api/newPost', formData).then(function(response){
        console.log('made a new post: ' + response.data);
        return response.data
      })
    },

    editPost: function(id, title, body){

    },

    delPost: function(id){
      var reqObj = {id: id}
      return $http.post('./api/delpost', reqObj).then(function(respone){
        console.log('post deleted');

      })
    },

    getComments: function(postId){
      var reqObj = {id: postId}
      return $http.post('./api/comments', reqObj).then(function(response){
        return response.data
      })
    },

    voteUp: function(id, votes){
      var reqObj = {id: id, votes: votes}
      console.log(reqObj);
      return $http.post('./api/voteUp', reqObj).then(function(res){
        console.log(res.data);
        return res.data
      })
    }
  }
})

app.service('authService', function($http, $location){
  return{
    signUp: function(user){
      return $http.post('./api/signup', user).then(function(response){
        $location.path('/')
      })
    },
    logIn: function(user){
      return $http.post('./api/login', user).then(function(response){
        $location.path('/')
      })
    }
  }

})

app.service('cookieService', function($cookies, $location) {
  return {
    decodeCookie: function(cookie){
      let base64decoded = atob(cookie)
      let sliceStart = (base64decoded.indexOf('"username":"') + 12)
      let sliceEnd = (base64decoded.indexOf('}}')-1)
      let username = base64decoded.slice(sliceStart, sliceEnd)
      return username
    }
  }
})
