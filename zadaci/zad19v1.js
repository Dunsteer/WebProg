var str = ["Dare", "je", "najbolji", "JS", "programer"]

function concatStrings(array) {
    console.log("Uso sam.")
    if (array.length != 0) {
        return array[0].concat(" - ".concat(concatStrings(array.slice(1))))
    }
    else
        return ""
}

console.log("Konkatenacija stringova:")
console.log(concatStrings(str))