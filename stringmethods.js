// 1.concat
const str1 = 'Hello';
const str2 = 'World';
const concatenatedString = str1.concat(' ', str2);
console.log(concatenatedString); 

// 2.endsWith
const str = 'Hello World';
console.log(str.endsWith('World')); 

// 3.include
const str = 'Hello World';
console.log(str.includes('World')); 

// 4.indexOf
const str = 'Hello World';
console.log(str.indexOf('World')); 

// 5.lastIndexOf
const str = 'Hello World Hello';
console.log(str.lastIndexOf('Hello')); 

// 6.match
const str = 'The rain in Spain falls mainly in the plain';
console.log(str.match(/ain/g)); 

//7.matchall
const str = 'The rain in Spain falls mainly in the plain';
const matches = str.matchAll(/ain/g);
for (const match of matches) {
  console.log(match);
}

// 8.padEnd
const str = 'Hello';
console.log(str.padEnd(10, ' World'));

// 9.padStart
const str = 'World';
console.log(str.padStart(10, 'Hello '));

// 10.repeat
const str = 'Hello';
console.log(str.repeat(3)); 

// 11.search
const str = 'Hello World';
console.log(str.search('World')); 

// 12.slice
const str = 'Hello World';
console.log(str.slice()); 

// 13.split
const str = 'Hello World';
console.log(str.split(' ')); 

// 14.startsWith
const str = 'Hello World';
console.log(str.startsWith('Hello')); 

// 15.substr
const str = 'Hello World';
console.log(str.substr(Hello));

// 16.substring

const str = 'Hello World';
console.log(str.substring());

// 17.toLowerCase
const str = 'Hello World';
console.log(str.toUpperCase());

// 18.trim
const str = '   Hello World   ';
console.log(str.trim()); 

// 19.trimend
const str = '   Hello World   ';
console.log(str.trimEnd());

// 20.trimStart
const str = '   Hello World   ';
console.log(str.trimStart()); 

//21.charAt
const str = 'Hello World';
console.log(str.charAt(0)); 

// 22.charCodeAt
const str = 'Hello World';
console.log(str.charCodeAt(0)); 
