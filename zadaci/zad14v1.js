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

// 6. Vraca true/false, da li ima bar jedan korisnik cije se prezime ne zavrsava na -vic.
//I nacin
function existenceOfNonVic(array) {
    var result = false
    for (var i = 0; i < array.length; i++) {
        if (array[i].lastname.slice(array[i].lastname.length - 3) != 'vic')
            result = true
    }
    return result
}

console.log("Bar jedan korisnik cije ime se ne zavrsava na -vic.")
console.log(existenceOfNonVic(array))
