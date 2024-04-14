import {HashSet} from './선형알고리즘/HashSet.mjs';

let hashSet = new HashSet();

hashSet.add(1);
hashSet.add(2);
hashSet.add(3);
hashSet.add(4);
hashSet.add(5);
hashSet.add(6);
hashSet.add(7);
hashSet.add(8);
hashSet.add(9);
hashSet.add(9);
hashSet.add(9);
hashSet.add(10);

hashSet.printAll();

console.log("9 : " + hashSet.isContain(9));
hashSet.remove(9)
console.log("9 : " + hashSet.isContain(9));

hashSet.clear();
console.log("clear : " + hashSet.isEmpty(s));
hashSet.printAll();

console.log("test");



