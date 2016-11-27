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
    },

    editPost: function(id, title, body){

    },

    delPost: function(id){
      var reqObj = {id: id}
      return $http.post('./api/delpost', reqObj).then(function(respone){
        console.log('post deleted');
        
      })
    }


  }
})
