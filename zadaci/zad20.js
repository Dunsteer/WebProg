var recursiveArray = [1, 2, 3, 4, 5]

console.log('Parni brojevi iz recursiveArray-a: ')
console.log(recursiveArray.reduce((acc, curr) => curr % 2 == 0 ? [...acc, curr] : acc, []));
