class Node {
    constructor(data, next = null, prev = null ) { 
        // next, prev의 default 값은 null로 만들어주자
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;  
        this.count = 0;
    }

    #getBeforeNode(index) {
        let currentNode = this.head;

        for(let i = 0; i < index - 1; i++){
            currentNode = currentNode.next;
        }

        return currentNode;
    }


    printAll() {
        let currentNode = this.head;
        let text = this.count +" [";
        while(currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) text += ", ";
        }
        text += "]";

        console.log(text);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if(index > this.count || index < 0 ) {
            throw new Error("잘못된 범위입니다.");
        }

        let newNode = new Node(data);

        if(index == 0){ // 삽입할려는 노드가 list의 head인 경우
            newNode.next = this.head;
            if(this.head != null) {
                this.head.prev = newNode; //기존의 head의 prev에 삽입하는 노드
            }
            this.head = newNode;
        } else if(index == this.count) { // 삽입하려는 노드가 tail인 경우
            newNode.next = null;
            newNode.prev = this.tail // 기존의 tail을 삽입하려는 노드 prev에
            this.tail.next = newNode;
        } else {
             let currentNode = this.#getBeforeNode(index);
             newNode.next = currentNode.next;
             newNode.prev = currentNode; // 새로운 노드의 이전에 currentNode를
             currentNode.next = newNode;
             newNode.next.prev = newNode; // 새로운 노드의 다음 노드의 prev에 삽입하려는 노드를
        }

        if(newNode.next == null) this.tail = newNode;

        this.count++;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if(index > this.count || index < 0 ) {
            console.log("123123")
            throw new Error("잘못된 범위입니다.");
        }

        if(index == 0) {
            if(this.head.next == null){ // 데이터가 한개인경우
                this.head = null;
                this.tail = null;
            } else { // 데이터가 2개 이상인경우
                this.head = this.head.next;
                this.head.prev = null;
            }
            
        } else if(index == (this.count - 1)){ // 삽입하려는 노드가 tail인 경우
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        } else {
            let currentNode = this.#getBeforeNode(index);
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
        }
        this.count--;

    }

    deleteLast() {
        this.deleteAt(this.count -1);
    }

    getNodeAt(index) {
        if(index > this.count || index < 0 ) {
            throw new Error("잘못된 범위입니다.");
        }

        if(index == 0) return this.head.data;
        else return this.#getBeforeNode(index).next.data;
    }


}

export { Node, DoublyLinkedList } 
// 다른 자바스크립트 파일에서 Node 클래스를 참조할 수 있도록