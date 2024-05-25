const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-postgres'), {
    connectionString: 'postgres://root:admin@localhost:5432/starbucksdb'
})

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