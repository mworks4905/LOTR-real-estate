exports.seed = function(knex, Promise) {
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                knex('posts').insert([{
                  user_id: 2, image:'http://static.directmatin.fr/sites/default/files/styles/image_880_495/public/mina_tirith.jpg?itok=vuj_QbG5',
                  title: 'Minas Tirith ',
                  body:'Great location in the heart of Gondor! There’s lots of space to have friends and family over, plus it comes with its own defense catapults. Recently fallen on hard times which has brought the price down to an absolute steal!!! Don’t miss this opportunity to snag a great castle at below market price ',
                  votes: 8
                }, {
                  user_id: 1,
                  title: 'Hobbiton',
                  image:'http://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/this-isnt-fantasy-its-hobbiton---just-as-it-was-created-for-peter-jacksons-movies.jpg?height=406&outputformat=jpg&quality=85&source=2153445&transformationratio=1.3&transformationsystem=autoboxfit&width=720&securitytoken=1961B45B30004B5997220A2BE4105489',
                  body:'A cute and quiet neighborhood located in the Shire where everyone knows your name. Houses are eco friendly and extremely cozy. You’ll be paying a pretty penny but you definitely will not regret it!',
                  votes: 0
                }, {
                  user_id: 2,
                  title:'Fangorn Forest',
                  image:'http://www.thelandofshadow.com/wp-content/uploads/2016/07/FangornLarge1.jpg',
                  body:'If you’re the outdoorsy type then this is the place for you! Secluded and remote literally no one will find you. The “neighbors” keep to themselves as long as you don’t go trying to capitalize on the beautiful old growth forest. Priced to sell!!!',
                  votes: -100
                }, {
                  user_id: 3,
                  title:'Rivendell',
                  image:'http://sagesselfique.s.a.pic.centerblog.net/080217073050189811730600.jpg',
                  body:'Elegant old world architecture, definitely built to last! You will not be disappointed with the amazing scenic views of the surrounding mountainside and lush forest, not to mention several beautiful waterfalls. Currently sitting at the very reasonable price considering the craftsmanship of buildings and surrounding grounds.',
                  votes: 15
                }]),
            ]);
        });
};
