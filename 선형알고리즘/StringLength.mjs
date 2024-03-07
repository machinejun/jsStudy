const arrayLength = (strArr) => {
    if(strArr[0] == null) return 0;
    return 1 + arrayLength(strArr.slice(0,-1));
};

let strArr = ['a','b','c','d','e'];
console.log(arrayLength(strArr));

