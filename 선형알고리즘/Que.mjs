import { DoublyLinkedList } from './DoublyLinkedList.mjs'
class Queue {

    constructor() {
        this.list = new DoublyLinkedList();
    }

    enqueue(data){
        this.list.insertAt(0, data);
    }

    dequeue(data){
        try {
            this.list.deleteLast();
        } catch(e) {
            console.log(e);
            throw Error("데이터가 존재하지 않습니다.");
        }   
    }

    front(){
         return this.list.getNodeAt(this.list.count - 1);
    }

    isEmpty(){
        return this.list.count == 0;
    }

    printAll(){
        this.list.printAll();
    }
}

export{Queue}