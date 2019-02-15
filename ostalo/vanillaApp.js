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
]

//Lazarev zadatak:
//Implementiraj sledece fukcije koje kao prvi 
//i jedini argument imaju listu korisnika sa imenom, prezimenom i JMBG-om.

  //   1. Vraca listu svih imena.
  function listOfNames(array) {
      var  toBeReturnedList = []
      for(var i = 0; i < array.length; i++) {
          toBeReturnedList[i] = array[i].name
      }
        return toBeReturnedList
  }
  // I nacin
    console.log("Lista imena:")
    console.log(listOfNames(array))

  // II nacin
    console.log("Lista imena")
    console.log(array.map(item => item.name)) 

  // III nacin
    const taskOne = array.reduce((acc, curr) => [...acc, curr.name], [])
    console.log('Treci nacin, Imena', taskOne)  

// 2. Vraca listu prezimena korisnika cije ime pocinje na L.
// I nacin
  function listOfLNames(array) {
      var toBeReturnedList = []
      var j = 0
      for(var i = 0; i < array.length; i++) {
          if(array[i].name.charAt(0) == "L")
            toBeReturnedList[j++] = array[i].lastname
      }
        return toBeReturnedList
  }

  console.log("Lista prezimena korisnika cije imena pocinju sa \'L\'")
  console.log(listOfLNames(array))

  // II nacin
  console.log("Lista prezimena korisnika cije imena pocinju sa \'L\'")
    function filterLObj(array) {
      return array.filter(item => item.name.charAt(0) == "L")
        .map(item => item.lastname)
     }
  console.log(filterLObj(array))

  //III nacin
  const taskTwo = array.reduce((acc, curr) => curr.name.startsWith('L') ? [...acc, curr.lastname] : acc, [])
  console.log('Treci nacin, Imena na L', taskTwo)


// 3. Vraca listu spojenih imena i prezimena (kao jedan string, sa razmakom),
// svih korisnika koji su rodjeni pre 1996.

//I nacin
  function getYear(client) {
     var myID = parseInt(client.personalID)
     var myYear = (myID / Math.pow(10, 6)) % 1000
     return myYear
  }

  function listBefore96(array) {
      var toBeReturnedList = []
      var j = 0
      for(var i = 0; i < array.length; i++) {
          if(getYear(array[i]) < 996) {
            toBeReturnedList[j++] = array[i].name + " " + array[i].lastname   
          }
      }
        return toBeReturnedList
  }
  console.log("Rodjeni pre 1996")
  console.log(listBefore96(array))

  //II nacin
  console.log("Rodjeni pre 1996:")
    function filter96(array) {
        return array.filter(item => getYear(item) < 996)
          .map(item => item.name + " " + item.lastname)
    }
   console.log(filter96(array))

   // III nacin
   const taskThree = array.reduce((acc,curr) => (getYear(curr) < 996) ? [...acc, curr.name + " " + curr.lastname] : acc, [])
   console.log('Treci nacin, pre 96.', taskThree)
    
// 4. Vraca listu korisnika rodjenih u Nisu (JMBG se zavrsava sa 73xxxx)
// I nacin
  function getLastNumbers(client) {
    var lastNum = parseInt(client.personalID)
    var myNum = Math.trunc((lastNum % Math.pow(10,6) / Math.pow(10,4)))
      return myNum == 73
  }  

  function list73xxxx(array) {
      var toBeReturnedList = []
      var j = 0
        for(var i = 0; i < array.length; i++) {
          if(getLastNumbers(array[i]))
            toBeReturnedList[j++] = array[i].name + " " + array[i].lastname
      }
        return toBeReturnedList
  }

  console.log("73xxxx")
  console.log(list73xxxx(array))

  //II nacin
  console.log("73xxxx")
    function filter73xxxx(array) {
        return array.filter(getLastNumbers)
          .map(item => item.name + " " + item.lastname)
    }
    
  console.log(filter73xxxx(array))

  //III nacin
  const taskFour = array.reduce((acc, curr) => getLastNumbers(curr) ? [...acc, curr.name + " " + curr.lastname] : acc, [])
  console.log("Treci nacin, 73xxxx", taskFour)

// 5. Vraca true/false, da li su svi korisnici rodjeni posle 1993.
//I nacin
  function existenceBefore93(array) {
      var counter = 0
      for(var i = 0; i < array.length; i++) {
          if(getYear(array[i]) < 993)
            counter++
      }
      return counter == array.length
  }

  console.log("Da li su svi rodjeni pre devedes'trece")
  console.log(existenceBefore93(array))

  //II nacin
    console.log("Da li su svi rodjeni pre devedes'trece")
    console.log(!array.some(item => getYear(item) < 993))
  
    //III nacin
  const taskFive = array.reduce((acc,curr) => acc  && (getYear(curr) > 993), true)
  console.log('Treci nacin, Svi rodjeni posle 93.', taskFive)

// 6. Vraca true/false, da li ima bar jedan korisnik cije se prezime ne zavrsava na -vic.
//I nacin
  function existenceOfNonVic(array) {
      var result = false
        for(var i = 0; i < array.length; i++){
          if(array[i].lastname.slice(array[i].lastname.length - 3) != 'vic')
            result = true
      }
      return result
  } 
  console.log("Bar jedan korisnik cije ime se ne zavrsava na -vic.")
  console.log(existenceOfNonVic(array))

  //II nacin
  console.log("Bar jedan korisnik cije ime se ne zavrsava na -vic.")
  console.log(array.some(item => item.lastname.slice(item.lastname.length - 3) != 'vic'))

  //III nacin
   const taskSix = array.reduce((acc, curr) => acc || !curr.lastname.endsWith('vic'), false)
  console.log('Treci nacin, Bar jedan da nije -vic', taskSix)

// 7. Vraca zbir godista svih korisnika.
//I nacin
  function sumOfYears(array) {
      var sum = 0
      for(var i = 0; i < array.length; i++) {
          sum += Math.trunc(1000 + getYear(array[i]))
      }
      return sum
  }

  console.log("Suma godista:")
  console.log(sumOfYears(array))

  //II nacin
    console.log("Suma godista:")
    var sum = 0
    array.forEach(item => sum += Math.trunc(1000 + getYear(item)))
    console.log(sum)
  //III nacin
    const taskSeven  = array.reduce((acc, curr) => acc + 1000 + getYear(curr), 0)
    console.log("Treci nacin, Suma godista", Math.trunc(taskSeven))

  //8. Brojimo sve koji su rodjeni pre 96.
    const tastkEight = array.reduce((acc, curr) => (getYear(curr) < 996) ? acc + 1: acc + 0, 0)
    console.log('Treci nacin, Broj ljudi rodjenih pre 96.', tastkEight)

    var recursiveArray = [1, 2, 3, 4, 5]
    console.log("Rekurzivno odredjivanje sume:")
    console.log(recursiveSum(recursiveArray))
    console.log("Rekurzivno odredjivanje proizvoda:")
    console.log(recursiveProduct(recursiveArray))

    function recursiveSum(array) {
      if(array.length != 0 ) {
        return sum = array[0] + recursiveSum(array.slice(1)) 
      }
      else 
        return 0
    }

    function recursiveProduct(array){
      if(array.length != 0 ) {
        return product = array[0] * recursiveProduct(array.slice(1)) 
      }
      else 
        return 1
    }

    var str = ["Dare", "je", "najbolji", "JS", "programer"]
    console.log("Konkatenacija stringova:")
    console.log(concatStrings(str)) 

    function concatStrings(array){
      console.log("Uso sam.")
      if(array.length != 0 ) {
        return array[0].concat(" - ".concat(concatStrings(array.slice(1)))) 
      }
      else 
        return ""
    }

    console.log("--------------------")
    console.log("SEDMI VELICANSTVENI")
    console.log("--------------------")

    console.log("Funkcionalna cudesa za poslednje 3 funkcije:")
    const sumF = recursiveArray.reduce((acc, curr) => acc + curr, 0)
    console.log("Suma", sumF)
    const productF = recursiveArray.reduce((acc, curr) => acc * curr, 1)
    console.log("Proizvod", productF)
    const concatedStringF = str.reduce((acc, curr) => acc + ' - ' + curr, '')
    console.log("Nadovezani stringovi: ", concatedStringF)

    
    var evenNumbers = recursiveArray.reduce((acc, curr) => curr % 2 == 0 ? [...acc, curr] : acc, [])
    console.log('Parni brojevi iz recursiveArray-a: ', evenNumbers)

    const max = [12, 5, 3, 25, 9].reduce((acc, curr) => acc < curr ? curr : acc)
    console.log('Max: ', max)

