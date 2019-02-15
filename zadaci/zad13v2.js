var array = [
    {
        name: "Leonid",
        lastname: "Petrovic",
        personalID: "0112985730043"
    },
    {
        name: "Milan",
        lastname: "Jankovic",
        personalID: "1210997730012"
    },
    {
        name: "Lola",
        lastname: "Medvedev",
        personalID: "1112997910023"
    },
    {
        name: "Aleksandra",
        lastname: "Rajevski",
        personalID: "0503999882912"
    },
    {
        name: "Ahmed",
        lastname: "Nurudin",
        personalID: "1705992901231"
    },
    {
        name: "Svetlana",
        lastname: "Raznatovic",
        personalID: "1406973891321"
    }
];

// 5. Vraca true/false, da li su svi korisnici rodjeni posle 1993.
//I nacin
function getYear(client) {
    var myID = parseInt(client.personalID);
    var myYear = (myID / Math.pow(10, 6)) % 1000;
    return myYear;
}

console.log("Da li su svi rodjeni pre devedes'trece")
console.log(!array.some(item => getYear(item) < 993))