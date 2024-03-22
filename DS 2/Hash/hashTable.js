// Hash Table Implementation in JavaScript

class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hashValue = 0; 
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        this.table[index].push({ key, value });
    }

    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (const entry of bucket) {
            if (entry.key === key) {
                return entry.value;
            }
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        this.table[index] = bucket.filter((entry) => entry.key !== key);
        // bucket.splice(i, 1);
    }


    printTable() {
        for (let i = 0; i < this.size; i++) {
            console.log(`Bucket ${i}:`);
            console.log(this.table[i]);
        }
    }

    
}

// Sample Usage
const myHashTable = new HashTable();

myHashTable.insert("name", "John");
myHashTable.insert("age", 25);
myHashTable.insert("siva", "shabu York");
myHashTable.insert("visa", "athu g York");

myHashTable.printTable();

// console.log("Search 'name':", myHashTable.search("name")); // Output: John
// console.log("Search 'age':", myHashTable.search("age")); // Output: 25
// console.log("Search 'city':", myHashTable.search("city"));
// console.log("Search 'ciyt':", myHashTable.search("ciyt"));


// myHashTable.remove("age");
// console.log("Search 'age' after removal:", myHashTable.search("age")); // Output: null
// console.log(); // in this i want to see the maded linked list in this index