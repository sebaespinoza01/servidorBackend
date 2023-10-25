// ProductManager.js
const fs = require('fs').promises;

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            throw error;
        }
    }

    async getProductById(productId) {
        const products = await this.getProducts();
        return products.find(product => product.id === productId);
    }
}

module.exports = ProductManager;
