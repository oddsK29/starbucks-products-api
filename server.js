const fastify = require('fastify')({ logger: true })
const knex = require('./configs/db.configs.js'); 

fastify.register(require('./src/routes/products.routes.js'))

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