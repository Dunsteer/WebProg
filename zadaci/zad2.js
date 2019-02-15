//2. Naci index elementa u nizu tako da je zbir elemenata pre tog elementa veci od zbira posle tog elementa.

const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function indeksi(n) {
    var ukupno = n.reduce(function (acc, el) { acc += el; return acc; }, 0);

    var suma = 0;
    n.forEach(function (el, ind) {
        if (suma > ukupno - suma - el)
            console.log(ind);
        suma += el;
    });
}

console.log(indeksi(niz));