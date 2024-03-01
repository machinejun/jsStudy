const factorial = (n) => {
    
    /*
    *  n! = n * (n-1)! 과 같습니다.
    *
    *  ex) 5! = 5*4*3*2*1 입니다.
    *      5! = 5*(4*3*2*1) = 5 * (4!)
    */
   
   if(n == 1 || n == 0 ){
    return 1; // 기저조건
   } else {
       return n * factorial(n-1);
   }
}

console.log(factorial(5));