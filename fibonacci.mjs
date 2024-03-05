const fibonacci = (n) => {
    if(n == 0 || n == 1) return n; 
    return fibonacci(n-2) + fibonacci(n-1)
} 



/**
 * f(5) 
 * => f(3) + f(4) 
 * => f(1) + f(2) + f(2) + f(3)
 * => f(1) + f(1) + f(0) + f(1) + f(0) + f(1) + f(2)
 * => f(1) + f(1) + f(0) + f(1) + f(0) + f(1) + f(0) + f(1)
 * = 5
 * 
 * 이미 계산한 부분을 계속해서 같은 계산
 * === 극복 ==> 메모리제이션(memoization) = 저장한다
 * 
 */

const upgradeFibonacci = (n, memo) => {
    if(n == 0 || n == 1) return n;
    if(!memo[n]) {
        memo[n] = upgradeFibonacci(n-2 , memo) + upgradeFibonacci(n-1 , memo);
    }
    return memo[n];
}


const checkTime = (n, memo) => {
    const startTime = performance.now();
    const endTime = performance.now();
    let result;
    if(memo){
        result = upgradeFibonacci(n, memo);
    } else {
        result = fibonacci(n);
    } 
    const executionTime = (endTime - startTime);

    console.log("소요시간 : " + executionTime );
    console.log("결과 : " + result);
} 

console.log("-------------fibonacci-------------")
checkTime(30); // O(2^n) 성능
console.log();
console.log("-------------upgrade fibonacci-------------")
checkTime(100, {}); // O(n) 성능