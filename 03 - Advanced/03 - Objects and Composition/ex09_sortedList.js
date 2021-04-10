function createSortedList() {
    let collection = [];
    let object = { add, remove, get, size: 0 };

    function add(element) {
        collection.push(element);
        collection.sort((a, b) => a - b);
        this.size++;
    }

    function remove(index) {
        if (collection[index] != undefined) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (collection[index] != undefined) {
            return collection[index];
        }
    }

    return object;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
