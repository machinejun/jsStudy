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

	remove(targetData) {
		let fakeParentNode = new BinaryTree(0); 
		//루트 노드를 제거할 때 사용
		// why ? 루트노드는 다른 노드와 다르게 부모 노드를 가지고 있지 않음

		let parentNode = fakeParentNode; //루트노드부터 시작한다
		let currentNode = this._root;
		let deleteNode = null;

		fakeParentNode.setRightSubTree(this._root);

		while(currentNode != null && currentNode.getData() != targetData) {
			parentNode = currentNode;
			if(currentNode.getDatat() > targetData) {
				currentNode = currentNode.getLeftSubTree();
			}else {
				currentNode = currentNode.getRightSubTree();
			}
		}

		if(currentNode == null) return; // 데이터를 찾지 못하였을 때

		deleteNode = currentNode;

		if(deleteNode.getLeftSubTree() == null && deleteNode.getRightSubTree() == null) { //1. 자식노드가 하나도 없는 터미널 노드일 때
			if(parentNode.getLeftSubTree() == deleteNode) parentNode.removeLeftSubTree();
			else parentNode.removeRightSubTree();
		}
		else if(deleteNode.getLeftSubTree() == null || deleteNode.getRightSubTree() == null) { //2. 자식 노드가 하나인 노드 제거
			let deleteNodeChild = null;

			if(deleteNode.getLeftSubTree() != null) {
				deleteNodeChild = deleteNode.getLeftSubTree();
			}else {
				deleteNodeChild = deleteNode.getRightSubTree();
			}

			if(parentNode.getLeftSubTree() == deleteNode) parentNode.setLeftSubTree(deleteNodeChild);
			else parentNode.setRightSubTree(deleteNodeChild);
		
		}
		//3. 자식 노드가 두개인 노드 제거 
		else {
			let replaceNode = deleteNode.getLeftSubTree();
			let replaceParent = deleteNode;


			while(replaceNode.getRightSubTree() != null) { // 왼쪽 자식 트리중 가장 큰 값을 가진 노드 찾기
				replaceParent = replaceNode;
				replaceNode = replaceNode.getRightSubTree();
			}

			let deleteNodeData = deleteNode.getData();
			deleteNodeData.setData(replaceNode.getData());

			if(replaceParent.getLeftSubTree() == replaceNode){ // 우리는 오른쪽 자식 노드가 없다는 것을 알고 있기 때문에 왼쪽 자식만 신경쓰면 된다.
				replaceParent.setLeftSubTree(replaceNode.getLeftSubTree());
			}else {
				replaceParent.setRightSubTree(replaceNode.getLeftSubTree());
			}

			deleteNode = replaceNode;
			deleteNode.setData(deleteNodeData);
		
		}

		if(fakeParentNode.getRightSubTree() != this.root) {
			this.root = fakeParentNode.getRightSubTree();
		}

		return deleteNode;

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


