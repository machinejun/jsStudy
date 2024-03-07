/**
 * 버블정렬 수학식
 * 
 * (n-1) + (n-2) + (n-3) + .... + 2 + 1 
 * = 등차수열의 합
 * = n * (n-1) / 2 = n^2 - n / 2
 * = O(n^2)
 */

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) { 
        // for문이 돌때마다 정렬되지 않은 원소중 가장 큰 원소가 우측으로 정렬된다.
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