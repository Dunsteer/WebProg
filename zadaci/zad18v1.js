var recursiveArray = [1, 2, 3, 4, 5]

function recursiveProduct(array) {
    if (array.length != 0) {
        return product = array[0] * recursiveProduct(array.slice(1))
    }
    else
        return 1
}

console.log("Rekurzivno odredjivanje proizvoda:")
console.log(recursiveProduct(recursiveArray))