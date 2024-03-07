import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(){
        this.arr = [];
        for(let i = 0; i < 10; i++) {
            this.arr[i] = new DoublyLinkedList();
        }
    }

    #hashFunction(num) {
        return num % 10;
    }

    set(key, value) {
        this.arr[this.#hashFunction(key)].insertLast(new HashData(key, value)); 
    }

    get(key) {
        let currentNode = this.arr[this.#hashFunction(key)].head;
        while(currentNode != null){
            if(currentNode.data.key == key) {
                return currentNode.data.value;
            }else {
                currentNode = currentNode.next;
            }
        }
        return null;
    }

    remove(key) {
        let list = this.arr[this.#hashFunction(key)];
        let currentNode = list.head;
        let deleteIndex = 0;

        while(currentNode != null){
            if(currentNode.data.key == key){
                return list.deleteAt(deleteIndex);
            } else {
                currentNode = currentNode.next;
                deleteIndex++; 
            }
        }

        throw new Error("해당 키를 찾을 수 없습니다.");
    }

    printAll(){
        this.arr.forEach((el, i) => {
            console.log(i + ":");
            el.printAll();
        });
    }

}

export {HashTable, HashData}
    
    
