const mergeSort = (arr, lIndex, rIndex) => {
    if(lIndex < rIndex) {
        let mIndex = parseInt((lIndex + rIndex) / 2);
        mergeSort(arr, lIndex, mIndex);
        mergeSort(arr, mIndex + 1, rIndex); 
        merge(arr, lIndex, mIndex, rIndex);  
    }
};

const merge = (arr, lIndex, mIndex, rIndex) => {
    let leftAreaIndex = lIndex;
    let rightAreaIndex = mIndex + 1;

    let tempArr = [];
    tempArr.length = rIndex + 1;
    tempArr.fill(0, 0, rIndex + 1); // 0으로 배열을 채운다.

    let tempArrIndex = lIndex;
    
    while(leftAreaIndex <= mIndex && rightAreaIndex <= rIndex) { // 왼쪽, 오른쪽 영역이 모두 정렬이 되지 않는한
        if(arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            tempArr[tempArrIndex] = arr[leftAreaIndex++];    
        }else {
            tempArr[tempArrIndex] = arr[rightAreaIndex++];
        }
        tempArrIndex++;
    }

    // 만약 한쪽의 영역이 정렬이  완료되었다면 다른한쪽의 모든 원소 또한 정렬이 완료되어 있기에 복사해 줍니다.
    // 오른쪽 영역이 병합이 덜 되었다면 leftAreaIndex는 mIndex보다 크게된다.
    if(leftAreaIndex > mIndex) {
        for(let i = rightAreaIndex; i <= rIndex; i++){
            tempArr[tempArrIndex++] = arr[i];
        }
    }else { // 왼쪽 영역이 병합이 덜되었다면 leftAreaIndex는 mIndex보다 작다.
        for(let i = leftAreaIndex; i <= mIndex; i++){ 
            tempArr[tempArrIndex++] = arr[i]; // 현재 tempArrIndex 인덱스부터 왼쪽 영역의 모든 데이터를 넣어준다.
        }
    }

    for (let i = lIndex; i <= rIndex; i++) {
        arr[i] = tempArr[i];
    }
};

let arr = [3,5,2,4,1,7,8,6];

console.log("before : " + arr);
mergeSort(arr, 0, arr.length - 1);
console.log("after : " + arr);