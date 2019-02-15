//1. Napisati funkciju  koja vraca prvi neponavljajuci karakter u stringu tako da je složenost algoritma O(n), primer: MAMMALS
let string = "MAMMALS";

function nadjiNePonavljanje(string) {
    const char = [];

    for (const curr of string) {
        if (char[curr])
            char[curr]++;
        else
            char[curr] = 1;
    }

    for (const curr of string) {
        if (char[curr] == 1) return curr;
    }
}

console.log(nadjiNePonavljanje(string));