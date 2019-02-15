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

// 4. Vraca listu korisnika rodjenih u Nisu (JMBG se zavrsava sa 73xxxx)
// I nacin
function getLastNumbers(client) {
    var lastNum = parseInt(client.personalID)
    var myNum = Math.trunc((lastNum % Math.pow(10, 6) / Math.pow(10, 4)))
    return myNum == 73
}

function list73xxxx(array) {
    var toBeReturnedList = []
    var j = 0
    for (var i = 0; i < array.length; i++) {
        if (getLastNumbers(array[i]))
            toBeReturnedList[j++] = array[i].name + " " + array[i].lastname
    }
    return toBeReturnedList
}

console.log("73xxxx")
console.log(list73xxxx(array))