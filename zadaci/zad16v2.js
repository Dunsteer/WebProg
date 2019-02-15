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

function getYear(client) {
    var myID = parseInt(client.personalID);
    var myYear = (myID / Math.pow(10, 6)) % 1000;
    return myYear;
}

//8. Brojimo sve koji su rodjeni pre 96.
//II nacin 

var sum = 0
array.forEach(item => sum += (getYear(curr) < 996) ? 1 : 0)

console.log('Broj ljudi rodjenih pre 96.')
console.log(array.reduce((acc, curr) => (getYear(curr) < 996) ? acc + 1 : acc + 0, 0));