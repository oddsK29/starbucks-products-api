class ProductsService {
    constructor(client) {
        this.client = client
    }

    async getAll() {
        const { rows } = await this.client.query('SELECT * FROM products')
        return rows
    }

    async getById(id) {
        const { rows } = await this.client.query('SELECT * FROM products WHERE id = $1', [id])
        return rows[0]
    }

    async create(data) {
        const { rows } = await this.client.query(
            `INSERT INTO products (name, description, price, region, weight, flavor_profile, grind_option, roast_level, image_url, stock)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [data.name, data.description, data.price, data.region, data.weight, JSON.stringify(data.flavor_profile), JSON.stringify(data.grind_option), data.roast_level, data.image_url, data.stock]
        )
        return rows[0]
    }

    async update(id, data) {
        const { rows } = await this.client.query(
            `UPDATE products SET name = $1, description = $2, price = $3, region = $4, weight = $5, flavor_profile = $6, grind_option = $7, roast_level = $8, image_url = $9, stock = $10 WHERE id = $11 RETURNING *`,
            [data.name, data.description, data.price, data.region, data.weight, JSON.stringify(data.flavor_profile), JSON.stringify(data.grind_option), data.roast_level, data.image_url, data.stock, id]
        )
        return rows[0]
    }

    async delete(id) {
        const { rows } = await this.client.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])
        return rows[0]
    }
}

module.exports = ProductsService
