const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){ // 첫번째 원소는 이미 정렬되어 있다고 가정
        let temp = arr[i];
        let j;

        for(j = i-1 ; j >= 0; j--) { // 정렬된 영역을 역순으로 순회
            if(arr[j] > temp) {
                arr[j+1] = arr[j]; // 다음 인덱스의 값에 현재 인덱스의 값을 넣어준다.
            }else { // 작다면 삽입할 위치를 찾음
                break;
            }
        }
        arr[j + 1] = temp;
    }
}

let arr = [4, 1, 5, 3, 6, 2];

console.log("before : " + arr);
insertionSort(arr);
console.log("after : " + arr);