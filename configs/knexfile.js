require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    }
};
