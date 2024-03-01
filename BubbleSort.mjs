const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) { 
        for(let j = 0; j < (arr.length - i - 1); j++) { // 정렬이 완료된 갯수만큼 빼줌
            if(arr[j] > arr[j+1]){ //배열의 두 숫자를 비교
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

const arr = [5, 2, 9, 6, 8, 3];
console.log("before : :" + arr);
bubbleSort(arr);
console.log("after : :" + arr);