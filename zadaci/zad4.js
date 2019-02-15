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

console.log(pocinje("how not",strings));