var recursiveArray = [1, 2, 3, 4, 5]

console.log("Rekurzivno odredjivanje proizvoda:")
console.log(recursiveArray.reduce((acc, curr) => acc * curr, 1))