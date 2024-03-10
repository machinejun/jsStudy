/**
 * 이진 탐색(재귀로 구현)
 * 
 * @param arr : 배열
 * @param target : 찾는 값
 * @param start : 시작 인덱스
 * @param end : 끝 인덱스
 */
const binarySerach = (arr, target, start, end) => {
    if(start > end) {
        return null;
    };
    
    let mid = Math.round((start + end) / 2); // 반올림 처리

    if(arr[mid] == target){ // 중간값이 타겟값인 경우
        return mid; 
    } else if(arr[mid] > target) { // 중간값이 타겟값 보다 큰경우
        return binarySerach(arr, target, mid + 1, end);
    }else { // 중간 값이 타겟값 보다 작은 경우
        return binarySerach(arr, target, start, mid - 1);
    }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 배열은 정렬되어 있다고 가정

let target = 6;
let result = binarySerach(arr, target, 0, arr.length -1);

console.log(`${target}의 index는 ${result}입니다.`);
console.log(`arr[${result}] = ${arr[result]}`);