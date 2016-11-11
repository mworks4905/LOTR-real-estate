'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/reddit_clone'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/reddit_clone'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
