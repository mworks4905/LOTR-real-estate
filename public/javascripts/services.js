app.service('postsService', function($http){
  return {
    getPosts: function(){
      return $http.get('/api/posts').then(function(response){
        return response.data
      })
    },
    getComments: function(){
      return $http.get('/api/comments').then(function(response){
        console.log(response)
      })
    },
    postPost: function(formData){
      // console.log('Form Data: ', formData);
      return $http.post('/api/newPost', formData).then(function(response){
        console.log('made a new post: ' + response.data);
        return response.data
      })
    }
    // newPost: function(post){
    //   return $http.post('/api/newpost', post).then(function(response){
    //     return response.data
    //   })
    // }
  }
})
