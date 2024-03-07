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

const upgrade2Fibonacci = (n) => {
    if(n == 0 || n == 1) return n;

    let table = [0, 1];

    for(let i = 2; i <= n; i++){
        table[i] = table[i - 2] + table[i - 1];
    }
    return table[n];
}

const logMemoryUsage = () => {
    const memoryUsage = process.memoryUsage();
    console.log("Resident Set Size: " + memoryUsage.rss / (1024 * 1024) + " MB");
    console.log("Heap Total: " + memoryUsage.heapTotal / (1024 * 1024) + " MB");
    console.log("Heap Used: " + memoryUsage.heapUsed / (1024 * 1024) + " MB");
}

const checkTime = (n, version, memo) => {
    const startTime = performance.now();
    let result;

    switch(version) {
        case 0 :
            result = fibonacci(n)
        break;
        case 1 :
            result = upgradeFibonacci(n, memo)
        break;  
        case 2 :
            result = upgrade2Fibonacci(n)
    }
    const endTime = performance.now();
    const executionTime = (endTime - startTime);

    console.log("소요시간 : " + executionTime );
    console.log("결과 : " + result);
    //logMemoryUsage();
} 

console.log("-------------fibonacci-------------")
checkTime(30, 0); // O(2^n) 성능
console.log();
console.log("-------------upgrade fibonacci-------------")
checkTime(40,1, {}); // O(n) 성능 
console.log("-------------upgrade fibonacci2-------------")
checkTime(40, 2);