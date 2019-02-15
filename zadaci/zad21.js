let array = [12, 5, 3, 25, 9]

console.log('Max: ');
console.log(array.reduce((acc, curr) => acc < curr ? curr : acc));