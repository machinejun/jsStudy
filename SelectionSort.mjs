const selectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        let minValueIndex = i;

        for(let j = i+1 ; j < arr.length; j++) {
            if(arr[i] > arr[j]) { // 현재 값이 검색된 값보다 크다면 
                minValueIndex = j;
            }
        }

        let temp = arr[i]; 
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }
}

let arr = [4, 3, 2, 1];
console.log("before : " + arr);
selectionSort(arr);
console.log("after : " + arr);
