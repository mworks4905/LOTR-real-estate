
exports.seed = function(knex, Promise) {
    return knex('comments').del()
        .then(function() {
            return Promise.all([
                knex('comments').insert([{
                  post_id: 2 ,
                  user_id: 1 ,
                  body: 'I absolutely love this place. Whenever I get some free time I always swing through to say hi to my long time friend Bilbo. When I eventually settle down I will be getting a place here!'
                }, {
                  post_id: 4,
                  user_id: 3,
                  body: `Is there a significant amount of rock climbing around the area because if there is then I'm very interested in this property`
                }, {
                  post_id: 3,
                  user_id: 1,
                  body: 'Not the most fun place in the world but its not that bad once you get use to it'
                }, {
                  post_id: 3,
                  user_id: 2,
                  body: 'Gandalf you are absolutely crazy! No one should ever live here!!!'
                }])
            ]);
        });
};
