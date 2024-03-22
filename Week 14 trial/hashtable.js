// class Stack{
//     constructor(){
//         this.items=[] ;
//     }
// }

// let arr = [1, 2, 3, 4];

// function push(arr, element) {
//     arr.push(element);
// }
// function pop(arr) {

//     return arr.pop();
// }
// function print(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// print(pop(arr))




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

    insert(key,value){
        const index=this.hash(key);
        this.table[index].unshift({key,value});
    }

    search(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        for (let i = 0; i < bucket.length; i++) {
 if (bucket[i].key==key) {
    return bucket[i].value
 }
            
        }
        return bucket
    }
    remove(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        this.table[index] = bucket.filter((entry) => entry.key !== key);
    }
}


const myHashTable=new HashTable();

myHashTable.insert('name','shibil')
myHashTable.insert('name','deepak')
 
// myHashTable.insert('nmae','sl')
// myHashTable.remove('nmae')
console.log(myHashTable.search('name'));