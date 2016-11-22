app.service('postsService', function($http){
  return {
    getPosts: function(){
      return $http.get('/api/posts').then(function(response){
        return response.data
      })
    },
    // newPost: function(post){
    //   return $http.post('/api/newpost', post).then(function(response){
    //     return response.data
    //   })
    // }
  }
})
