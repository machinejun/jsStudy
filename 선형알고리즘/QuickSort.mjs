const quickSort = (arr, left, right) => {
    if(left <= right){
        let pivot = divide(arr, left, right); //피벗의 정렬을 마친후 해당 피벗이 정렬된 인덱스를 반환한다.
        quickSort(arr, left, pivot - 1); // 피벗 왼쪽의 배열을 정렬해줍니다.
        quickSort(arr, pivot + 1, right); // 피벗 오른쪽의 배열을 정렬해줍니다.
    }
}

const divide = (arr, left, right) => {
    let pivot = arr[left];
    let leftStratIndex = left + 1; //피벗이 가장 왼쪽으로 정했기 때문에 다음 인덱스 부터 진행
    let rightStartIndex = right;

    while(leftStratIndex <= rightStartIndex) { // leftStartIndex가 rightStartIndex보다 크면 지나친 상황
        while(leftStratIndex <= right && pivot >= arr[leftStratIndex]) { // 검색된 값이 피벗보다 작다면 계속 이동
            leftStratIndex++;
        } 

        while(rightStartIndex >= (left + 1) && pivot <= arr[rightStartIndex]) { // 검색된 값이 피벗보다 작다면 계속 이동
            rightStartIndex--;
        }
        
        if(leftStratIndex <= rightStartIndex) {
           swap(arr, leftStratIndex, rightStartIndex);
        }
    }

    swap(arr, left, rightStartIndex); // 피벗의 위치와 rightStartIndex의 위치를 교환해준다.

    return rightStartIndex;
}

const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];
console.log("Before : " + arr);
quickSort(arr, 0, arr.length - 1);
console.log("After : " + arr);