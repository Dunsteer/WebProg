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

// 2. Vraca listu prezimena korisnika cije ime pocinje na L.
// I nacin
function listOfLNames(array) {
    var toBeReturnedList = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.charAt(0) == "L")
            toBeReturnedList[j++] = array[i].lastname;
    }
    return toBeReturnedList;
}

console.log("Lista prezimena korisnika cije imena pocinju sa \'L\'")
console.log(listOfLNames(array));