
exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function() {
            return Promise.all([
                knex('users').insert([{
                    username: 'GandalfIsAWizardKing',
                    email: 'wizard@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    username: 'FBRingRunna',
                    email: 'hobbit@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    username: 'Craig',
                    email: 'craig@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }])
            ]);
        });
};
