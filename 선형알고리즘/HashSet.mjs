import {HashTable} from './HashTable.mjs';

class HashSet {
    constructor() {
        this.hashTable = new HashTable();
    }

    add(value) {
        if(this.hashTable.get(value) == null) this.hashTable.set(value, "NaN");
    }

    remove(value) {
        this.hashTable.remove(value);
    }

    clear() {
        for(let i = 0; i < this.hashTable.arr.length; i++) this.hashTable.arr[i].clear();
    }

    isContain(value) {
        return this.hashTable.get(value) != null ? true : false; 
    }

    isEmpty() {
        let isEmpty = true;
        for(let i = 0; i < this.hashTable.arr.length; i++){
            if(this.hashTable.arr[i].count > 0){
                isEmpty = false;
                break;
            } 
        }
        return isEmpty;
    }

    printAll() {
        for(let i = 0; i < this.hashTable.arr.length; i++){
            let currentNode = this.hashTable.arr[i].head;
            while(currentNode != null){
                console.log(currentNode.data.key); 
                currentNode = currentNode.next;
            }
        }
    }
}

export{HashSet}