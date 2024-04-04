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
		// 루트 노드를 제거할 때 사용
		// 루트 노드를 제외한 모든 노드는 부모 노드를 가짐 -> 부모 노드를 가지고 연결
		// 루트 부모 노드는 부모가 없어 제거를 진행 할 수 없다. --> 임시로 루트 노드의 부모를 만들어 준다.(사용하지 않는 노드라서 value=0)

		let parentNode = fakeParentNode; //루트노드부터 시작한다
		let currentNode = this._root;
		let deleteNode = null; // 제거할 노드

		fakeParentNode.setRightSubTree(this._root); // 루트의 임시 부모로 설정

		while(currentNode != null && currentNode.getData() != targetData) { // 노드 찾기
			parentNode = currentNode;
			if(currentNode.getDatat() > targetData) {
				currentNode = currentNode.getLeftSubTree();
			}else {
				currentNode = currentNode.getRightSubTree();
			}
		}

		if(currentNode == null) return; // 데이터를 찾지 못하였을 때

		// currentNode는 제거할 데이터
		deleteNode = currentNode;

		if(deleteNode.getLeftSubTree() == null && deleteNode.getRightSubTree() == null) { //1. 자식노드가 하나도 없는 터미널 노드일 때
			if(parentNode.getLeftSubTree() == deleteNode) parentNode.removeLeftSubTree();
			else parentNode.removeRightSubTree();
		}
		else if(deleteNode.getLeftSubTree() == null || deleteNode.getRightSubTree() == null) { //2. 자식 노드가 하나인 노드 제거
			let deleteNodeChild = null; // 제거할 노드의 자식노드 임시 저장

			if(deleteNode.getLeftSubTree() != null) {
				deleteNodeChild = deleteNode.getLeftSubTree();
			}else {
				deleteNodeChild = deleteNode.getRightSubTree();
			}

			if(parentNode.getLeftSubTree() == deleteNode) parentNode.setLeftSubTree(deleteNodeChild); // 제거할 노드와 자식 노드 교체
			else parentNode.setRightSubTree(deleteNodeChild);
		
		}
		//3. 자식 노드가 두개인 노드 제거 --> 제거시 왼쪽 자식 노드에서 가장 큰값을 찾아 제거된 노드 위치로
		else {
			let replaceNode = deleteNode.getLeftSubTree(); // 큰값을 찾을 노드
			let replaceParent = deleteNode; // 큰값의 부모


			while(replaceNode.getRightSubTree() != null) { // 왼쪽 자식 트리중 가장 큰 값을 가진 노드 찾기
				replaceParent = replaceNode;
				replaceNode = replaceNode.getRightSubTree();
			}

			let deleteNodeData = deleteNode.getData(); // 제거할 노드의 값
			deleteNodeData.setData(replaceNode.getData()); // 대체할 노드의 값

			// 대체할 노드의 자식 노드를 대체할 노드의 부모의 자식 노드로 대체
			if(replaceParent.getLeftSubTree() == replaceNode){ 
				// 부모 노드의 왼쪽 자식 노드가 대체할 노드라면
				replaceParent.setLeftSubTree(replaceNode.getLeftSubTree()); // 왼쪽 자식노드를 대체할 노드의 왼쪽 자식노드로 대체   
			}else {
				replaceParent.setRightSubTree(replaceNode.getLeftSubTree());// 오른쪽 자식노드를 대체할 노드의 왼쪽 자식노드로 대체
			}
			// 여기서 왼쪽노드만 대체 -> why ? 대체할 노드가 해당 왼쪽 트리에서 가장 큰값이기 때문에 오른쪽 자식 노드가 존재할수 없다.

			deleteNode = replaceNode;
			deleteNode.setData(deleteNodeData);
		
		}

		if(fakeParentNode.getRightSubTree() != this.root) { // 루트 노드를 제거할 경우
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


