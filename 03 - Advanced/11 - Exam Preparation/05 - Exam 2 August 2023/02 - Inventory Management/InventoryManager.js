class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        
        if (this.items.length == this.capacity) {
            throw new Error('The inventory is already full.');
        }

        const existingItem = this.items.find(i => i.itemName == itemName);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        }
    }
    
    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const existingItem = this.items.find(i => i.itemName == itemName);

        if (!existingItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        } else if (existingItem.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        } else {
            existingItem.quantity -= quantity;
            
            if (existingItem.quantity == 0) {
                this.items.splice(this.items.indexOf(existingItem), 1);
                this.outOfStock.push(itemName);
            }

            return `Sold ${quantity} ${itemName}(s) from the inventory.`;
        }
    }

    reStockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const existingItem = this.items.find(i => i.itemName == itemName);
        const outOfStockItem = this.outOfStock.find(i => i == itemName);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        if (outOfStockItem) {
            this.outOfStock.splice(this.outOfStock.indexOf(itemName), 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let summary = 'Current Inventory:\n';
        summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}\n`;
        summary += this.outOfStock.length > 0 ? `Out of Stock: ${this.outOfStock.join(', ')}\n` : '';

        return summary;
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.reStockItem("Drill", 5));
console.log(manager.reStockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

