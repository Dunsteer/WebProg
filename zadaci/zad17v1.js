var recursiveArray = [1, 2, 3, 4, 5]

function recursiveSum(array) {
    if (array.length != 0) {
        return sum = array[0] + recursiveSum(array.slice(1))
    }
    else
        return 0
}

console.log("Rekurzivno odredjivanje sume:")
console.log(recursiveSum(recursiveArray))