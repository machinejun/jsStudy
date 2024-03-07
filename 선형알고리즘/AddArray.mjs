const addArray = (array) => {
    if(array.length == 1) return array[0];
    return array[array.length - 1] + addArray(array.slice(0, -1));
};

let array = [1,2,3,4,5];
console.log(addArray(array));