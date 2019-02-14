let string = "slova koja se ponavljaju";

console.log(nadjiNePonavljanje(string));

function nadjiPonavljanje(string) {
    const char = [];

    for (let i = 0; i < string.length; i++) {
        if (char[string[i]]) return string[i];
        char[string[i]] = 1;
    }
}

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


/* pronalazi indeks elementa kome je suma sa leve veca od sume sa desne strane */
function indeksi(n) {
    var ukupno = n.reduce(function (acc, el) { acc += el; return acc; }, 0);

    var suma = 0;
    n.forEach(function (el, ind) {
        if (suma > ukupno - suma - el)
            console.log(ind);
        suma += el;
    });
}