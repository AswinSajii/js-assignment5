// 1.concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); 

// 2.every
const array = [1, 2, 3, 4, 5];
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log(array.every(isBelowThreshold)); 

// 3.fill
const array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); 

// 4.find
const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found); 

// 5.findIndex
const array = [5, 12, 8, 130, 44];
const foundIndex = array.findIndex(element => element > 10);
console.log(foundIndex); 

// 6.flat
const array = [1, 2, [3, 4]];
const flattenedArray = array.flat();
console.log(flattenedArray); 

// 7.forEach
const array = ['a', 'b', 'c'];
array.forEach(element => console.log(element));

// 8.include
const array = [1, 2, 3];
console.log(array.includes(2));

// 9.indexOf
const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3));

// 10.join
const array = ['Hello', 'World'];
console.log(array.join(' ')); 

// 11.lastIndexOf
const array = [2, 5, 9, 2];
console.log(array.lastIndexOf(2));

// 12.pop
const array = [1, 2, 3];
console.log(array.pop()); 

// 13.push
const array = [1, 2, 3];
array.push(4);
console.log(array);

// 14.reverse
const array = [1, 2, 3];
array.reverse();
console.log(array);

// 15.unshift
const array = [1, 2, 3];
array.unshift(0);
console.log(array); 

// 16.shift
const array = [1, 2, 3];
console.log(array.shift()); 

// 17.slice
const array = [1, 2, 3, 4, 5];
console.log(array.slice(2)); 

// 18.some
const array = [1, 2, 3, 4, 5];
const isEven = (element) => element % 2 === 0;
console.log(array.some(isEven)); 

// 19.sort
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
array.sort((a, b) => a - b);
console.log(array); 

// 20.splice
const array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);

// 21.toString
const array = [1, 2, 3];
console.log(array.toString());

// 22.filter
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element % 2 === 0);
console.log(filteredArray); 

// 23.reduce
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// 24.map
const array = [1, 2, 3];
const mappedArray = array.map(element => element * 2);
console.log(mappedArray);

// 25.forEach
const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element * 2);
});