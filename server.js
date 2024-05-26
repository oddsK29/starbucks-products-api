const fastify = require('fastify')({ logger: true })
const knex = require('./configs/db.configs.js');
const routes = require('./src/routes/routes.js')

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`Server is running at http://localhost:3000`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()