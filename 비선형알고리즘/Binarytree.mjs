/*
추상자료형

1. getData() : 해당 노드의 데이터를 리턴
2. setData() : 해당 노드의 데이터를 설정
3. getLeftSubTree() : 해당 노드의 왼쪽 서브 트리를 리턴
4. getRightSubTree() : 해당 노드의 오른쪽 자식 노드를 리턴
5. setLeftSubTree() : 해당 트리의 왼쪽 서브 트리를 Tree로 설정
6. setRightSubTree() : 해당 트리의 오른쪽 서브 트리를 Tree로 설정
7. preOrderTraversal() : 전위 순회
8. inOrderTraversal() : 중위 순회
9. postOrderTraveral() : 후위 순회

*/

class BinaryTree {
    constructor(data, leftTree = null, rightTree = null){
        this._data = data;
        this._leftSubTree = leftTree;
        this._rightSubTree = rightTree;
        // 저번 LinkedList에서는 노드와 리스트를 분리하였지만 Tree에서는 같이 만든다 
        // why ? : 노드는 하나로도 하나의 서브 트리이기 때문이다.
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }

    getLeftSubTree() {
        return this._leftSubTree;
    }

    getRightSubTree() {
        return this._rightSubTree;
    }

    setLeftSubTree(tree) {
        this._leftSubTree = tree; 
    }

    setRightSubTree(tree) {
        this._rightSubTree = tree;
    }

    // 루트 노드를 먼저 출력하고 다음 왼쪽 자식, 오른쪽 자식 순으로 출력 = 전위 순회
    preOrderTraversal(tree) {
        if(tree == null) return; // 해당 노드가 터미널 노드일때 
        console.log(tree.getData());
        this.preOrderTraversal(tree.getLeftSubTree()); 
        this.preOrderTraversal(tree.getRightSubTree()); 
    }

    // 맨 왼쪽 자식을 먼저 출력하고 그다음 루트노드를 출력하고 다음 오른쪽 노드를 출력
    // 루트 노드를 중간에 출력함 = 중위 순회
    inOrderTraversal(tree) {
        if(tree == null) return;
        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.getData());
        this.inOrderTraversal(tree.getRightSubTree());
    }

    // 왼쪽, 오른쪽, 루트 노드 순으로 출력 = 후위순회
    postOrderTraveral(tree) {
        if(tree == null) return;
        this.postOrderTraveral(tree.getLeftSubTree());
        this.postOrderTraveral(tree.getRightSubTree());
        console.log(tree.getData());
    }

    // 왼쪽 자식 노드를 제거
	removeLeftSubTree() {
		let deleteNode = this.getLeftSubTree();
		this.setLeftSubTree(null);
		return deleteNode;
	}

    // 오른쪽자식 노드를 제거   
	removeRightSubTree() {
		let deleteNode = this.getRightSubTree();
		this.setRightSubTree(null);
		return deleteNode;
	}

}

export { BinaryTree }