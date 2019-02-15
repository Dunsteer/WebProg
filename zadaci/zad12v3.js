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
// III nacin
function getLastNumbers(client) {
    var lastNum = parseInt(client.personalID)
    var myNum = Math.trunc((lastNum % Math.pow(10, 6) / Math.pow(10, 4)))
    return myNum == 73
}

const taskFour = array.reduce((acc, curr) => getLastNumbers(curr) ? [...acc, curr.name + " " + curr.lastname] : acc, [])
console.log("73xxxx")
console.log(array.reduce((acc, curr) => getLastNumbers(curr) ? [...acc, curr.name + " " + curr.lastname] : acc, []))