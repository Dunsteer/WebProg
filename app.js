/*
1. Napisati funkciju  koja vraæa prvi neponavljajuæi karakter u stringu tako da je složenost algoritma O(n), primer: MAMMALS
2. Naæi index elementa u nizu tako da je zbir elemenata pre tog elementa veci od zbira posle tog elementa.
3. Obrnuti elemente lancane liste bez korišæenja pomoænog niza:
4. Implementirati funkcije koja radi kao search bar, ako prosledimo niz "how to" funkcija nam vraca sve ponudjene pretrage koje pocinju sa how to
5. Proveriti da li su dva stringa anagrami
6. Proveriti da li je recenica palindrom
7. Lancana lista-implementacija 
*/

let string = "slova koja se ponavljaju";

//console.log(nadjiNePonavljanje(string));

function nadjiPonavljanje(string) {
    const char = [];

    for (let i = 0; i < string.length; i++) {
        if (char[string[i]]) return string[i];
        char[string[i]] = 1;
    }
}

//1. Napisati funkciju  koja vraæa prvi neponavljajuæi karakter u stringu tako da je složenost algoritma O(n), primer: MAMMALS
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

function random5() {
    return Math.floor(Math.random() * Math.floor(5)) + 1;
}

function random7() {
    var niz = new Array(5);

    for (var i = 0; i < 5; i++)
        niz[i] = new Array(5);

    var br = 1;

    for (var i = 0; i < 5; i++)
        for (var j = 0; j < 5; j++) {
            niz[i][j] = (br % 7) + 1;
            br++;
        }

    niz[4][1] = 0;
    niz[4][2] = 0;
    niz[4][3] = 0;
    niz[4][4] = 0;

    var res = 0;

    while (res == 0) {
        var a = random5();
        var b = random5();

        res = niz[a - 1][b - 1];
    }

    return res;
}

//console.log(random7());


//2. Naæi index elementa u nizu tako da je zbir elemenata pre tog elementa veci od zbira posle tog elementa.
function indeksi(n) {
    var ukupno = n.reduce(function (acc, el) { acc += el; return acc; }, 0);

    var suma = 0;
    n.forEach(function (el, ind) {
        if (suma > ukupno - suma - el)
            console.log(ind);
        suma += el;
    });
}

const node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

//3. Obrnuti elemente lancane liste bez korišæenja pomoænog niza
function reverse(n) {
    let prev = null;
    let curr = n;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    n = prev;

    return n;
}

//console.log(reverse(node));

const strings = [
    "how to asd",
    "how to 123",
    "how to jhg",
    "how not to"
];

//4. Implementirati funkcije koja radi kao search bar, ako prosledimo niz "how to" funkcija nam vraca sve ponudjene pretrage koje pocinju sa how to
function pocinje(sample, strings) {
    return strings.filter(x => x.startsWith(sample));
}

//console.log(pocinje("how not",strings));

const s1 = "asdf";
const s2 = "dsfa";

//5. Proveriti da li su dva stringa anagrami
function anagram(s1, s2) {
    const char1 = [];
    const char2 = [];

    for (let i = 0; i < string.length; i++) {
        if (char1[s1[i]])
            char1[s1[i]]++;
        else
            char1[s1[i]] = 1;

        if (char2[s2[i]])
            char2[s2[i]]++;
        else
            char2[s2[i]] = 1;
    }

    for (const ind in char1) {
        if (char1[ind] != char2[ind]) return false;
    }

    return true;
}

//console.log(anagram(s1,s2));