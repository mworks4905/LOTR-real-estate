
exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function() {
            return Promise.all([
                knex('users').insert([{
                    first_name: 'Gandalf',
                    last_name: 'Grey',
                    email: 'wizard@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    first_name: 'Frodo',
                    last_name: 'Baggins',
                    email: 'hobbit@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    first_name: 'Craig',
                    last_name: 'Quincy',
                    email: 'craig@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }])
            ]);
        });
};
