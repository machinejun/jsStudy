import { BinaryTree } from './Binarytree.mjs';

class BinarySearchTree {
    constructor(rootNode = null){
        this._root = rootNode;
    }

    insert(data) {
        if(this._root == null){
            this._root = new BinaryTree(data);
            return;
        }

        let currentNode = this._root;
        let parentNode = null;

        while(currentNode != null) {
            parentNode = currentNode;

            if(data < currentNode.getData()) { // 인설트한 데이트가 현재 노드보다 작다면 왼쪽으로 이동
                currentNode = currentNode.getLeftSubTree();
            } else if( data > currentNode.getData()) { // 인설트한 데이트가 현재 노드보다 크다면 오른쪽으로 이동
                currentNode = currentNode.getRightSubTree(); // 인설트한 데이트가 현재 노드와 같다면 중복 허용하지 않기에 종료
            } else { // 인설트한 데이트가 현재 노드와 같다면 중복 허용하지 않기에 종료
                return;
            }   
        }

        // 위치를 찾으면 currentNode = null, parentNode는 들어갈 위치의 부모 노드
        let newNode = new BinaryTree(data);
        if(data > parentNode.getData()){
            parentNode.setRightSubTree(newNode);
        }else {
            parentNode.setLeftSubTree(newNode); 
        }
    }

    search(targetData) {
        let currentNode = this._root;
        
        while(currentNode != null) {
            if(currentNode.getData() == targetData) { //현재 노드의 데이터가 찾는 데이터와 같다면 현재 노드를 리턴한다.
                return currentNode;
            }else if(currentNode.getData() > targetData) { // 현재 노드가 찾는 데이터 보다 크다면 왼쪽으로 이동
                currentNode = currentNode.getLeftSubTree();
            }else { // 현재 노드가 찾는 데이터 보다 작다면 오른쪽으로 이동
                currentNode = currentNode.getRightSubTree();
            }
        }

        return null;
    }
}

let bsTree = new BinarySearchTree();
bsTree.insert(18);
bsTree.insert(15);
bsTree.insert(10);
bsTree.insert(6);
bsTree.insert(8);
bsTree.insert(31);
bsTree.insert(27);
bsTree.insert(33);
bsTree.insert(24);
bsTree.insert(35);
bsTree.insert(13);
bsTree._root.inOrderTraversal(bsTree._root);

console.log("---------- 탐색 ----------");
let fNode = bsTree.search(10);
console.log("결과 : " + fNode.getData());


