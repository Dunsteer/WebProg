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

// 7. Vraca zbir godista svih korisnika.
//I nacin
function sumOfYears(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += Math.trunc(1000 + getYear(array[i]))
    }
    return sum
}

console.log("Suma godista:")
console.log(sumOfYears(array))