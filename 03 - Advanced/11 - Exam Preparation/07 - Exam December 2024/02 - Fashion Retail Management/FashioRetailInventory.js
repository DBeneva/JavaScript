class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
        this.listOfSuppliers = [];
    }

    addProduct(productName, size, quantity, price) {
        const existingProduct = this.productStock.find(p => p.name === productName && p.size === size);

        if (existingProduct) {
            existingProduct.quantity += quantity;

            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ name: productName, size, quantity, price });

            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const productIndex = this.productStock.findIndex(p => p.name === productName && p.size === size);

        if (productIndex > -1) {
            this.productStock.splice(productIndex, 1);

            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    }

    findProductsBySize(size) {
        const productsBySize = this.productStock.filter(p => p.size === size);

        if (productsBySize.length > 0) {
            return productsBySize.map(p => `${p.name}-${p.quantity} pieces`).join(', ');
        } else {
            return 'There are no products available in that size';
        }
    }

    listProducts() {
        if (this.productStock.length > 0) {
            const sortedProducts = this.productStock.sort((a, b) => a.name.localeCompare(b.name));
            const productsForOutput = sortedProducts.map(p => `${p.name}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`).join('\n');

            return `${this.storehouse} storehouse in ${this.location} available products:\n${productsForOutput}`;
        } else {
            return `${this.storehouse} storehouse is empty`;
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());