

const divDanica=document.getElementById("danica");
// filter

let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let parni=[];
let neparni=[];

parni=numbers.filter((broj)=>{
    return (broj%2==0);
})

console.log(parni);

neparni=numbers.filter(broj=>{
    return (broj%2!=0);
})

console.log(neparni);

neparni=neparni.map(broj=>{
    return broj*2;
})

console.log(neparni);

const iceCreams = [
    { flavor: 'pineapple', color: 'white' },
    { flavor: 'strawberry', color: 'red' },
    { flavor: 'watermelon', color: 'red' },
    { flavor: 'kiwi', color: 'green' },
    { flavor: 'mango', color: 'yellow' },
    { flavor: 'pear', color: 'green' }
  ];

  let redIceCreams=iceCreams.filter(sladoled=>{
      return (sladoled.color==="red")
  })

  console.log(redIceCreams);

  // preko reduce izracunati koji je ukus koliko zastupljen
  const flavours = [
    "strawberry",
    "strawberry",
    "kiwi",
    "kiwi",
    "kiwi",
    "strawberry",
    "mango",
    "kiwi",
    "banana"
  ];

  const acc={};
  let reducer2=((acc,flav)=>{
    if(!acc[flav])
        acc[flav]=1;
    else
        acc[flav]++;
    return acc;
  })

  let outcome=flavours.reduce(reducer2,{});

  console.log("Kiwi: "+outcome.kiwi);

  
  // koriscenjem reduce spojiti nizove [[a, b, c], [d, e, f], [g, h i]] -> [a, b, c, d, e, f, g, h, i]

  let velikiNiz=[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
  console.log(velikiNiz);
  let reducer=((acc,next)=>{
    return acc.concat(next);
  })

  let concated=velikiNiz.reduce(reducer);
  console.log(concated);

  // koriscenjem filter/map/reduce pronaci zadati element u nizu

  let brojevi=[1,2,3,4,5,6,7,8,9,33,21,45,62];

  let reducer3=((broj)=>{
      return (broj==5);
  })

  let nadjen=brojevi.filter(reducer3);

  /*const b = items.reduce((result, item) => {
    if (item.name === 'b') { result = item }
    return result
  }, null)*/

  console.log(nadjen);

  // odstampati sva imena niza var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],

  let names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  let spampanje=(ime=>console.log(ime));

  names.map(spampanje);

  // prebrojati koja rec se koliko puta ponovila 

  let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

  let reducer4=((acc,word)=>{
      if(!acc[word])
        acc[word]=1;
      else
        acc[word]++;
      return acc;
  })

  let final=inputWords.reduce(reducer4,acc);
  console.log("Durian "+final.Durian);
  console.log("Banana "+final.Banana);
  console.log("Apple "+final.Apple);

  // preko reduce implementirati map

  let reduceNiz=[];
  let mapNiz=[1,2,3,4,5,6,7,8];

  let reducer5=((reduceNiz,element)=>{
      reduceNiz.push(element*2);
      return reduceNiz;
  })

  let rez=mapNiz.reduce(reducer5,reduceNiz);

  console.log(rez);

  /*Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true*/

/*Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/

let toClone=[1,2,3,[5,6,7,[8,9]]];
let acc1=[];
let reducer6=((acc,el)=>{
    acc.push(el);
    return acc;
})

let cloned=toClone.reduce(reducer6,acc1);
console.log(toClone);
console.log(cloned);

// izbaciti null,false i 0

let nizEl=[58, '', 'abcd', true, null, false, 0];

let funkcija=(el=>{
    return (el!=null && el!=false && el!=0);
})

console.log(nizEl.filter(funkcija));

/*Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

let stringovi=["Crveno","Je","Moja","Boja"];
console.log(stringovi);
let funkcija1=((acc,el)=>{
    return acc.concat(el+" ");
})
let bla=stringovi.reduce(funkcija1,"")
console.log(bla);

/* Write a JavaScript program which accept a number as
 input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.*/

 brojevi=[0,2,5,4,6,8];

 let funkcija2=((acc,el,index,thisArray)=>{
     acc.push(el);
     if(el%2==0 && thisArray[index+1]%2==0)
        acc.push("-");
     return acc;
 })

 console.log(brojevi.reduce(funkcija2,[]));

 /*Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


/*The goal of this article is going to be to write some JavaScript that will sum all of the dogs ages in dog years.*/
let data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  let mapFunkcija=(el=>{return el.age*=7;})
  let reduceFunkcija=((acc,el)=>{return acc+el;})
  let filterFunkcija=(el=>{return (el.type ==='dog')})

  let rezz=data.filter(filterFunkcija).map(mapFunkcija).reduce(reduceFunkcija,0);
  console.log("Psece godine su " +rezz);

  /*2. Naæi index elementa u nizu tako da je zbir elemenata pre tog elementa veci od zbira posle tog elementa.*/

  let pre=0;
  brojevi=[2,11,88,2,30,15,9,4,12,0,6,8];
  let ind=0;
  let suma=brojevi.reduce(((acc,el)=>{
    return acc+el;
  }),0)

  let funkcija3=((acc,el,index)=>{
      pre+=el;
      if(pre>(suma-pre-el) && ind==0){
        acc=index;
        ind=1;
      }
        return acc;
  })

  let indeks=brojevi.reduce(funkcija3,null);
  console.log("Indeks");
  console.log(indeks);

  //Napisati funkciju  koja vraæa prvi neponavljajuæi karakter u stringu tako da je složenost
//algoritma O(n), primer: MAMMALS

let mam=['M','A','M','M','A','L','S'];

function nadjiNePonavljanje(string) {
    const char = [];

    for (const curr of string) {
        if (char[curr])
            char[curr]++;
        else
            char[curr] = 1;
    }

    for (const curr of string) {
        if (char[curr] == 1) return curr;
    }
}

console.log("Neponavljajuci element");
console.log(nadjiNePonavljanje(mam))

//Obrnuti elemente lancane liste bez korišæenja pomoænog niza:
export class Node{
    constructor(info){
        this.info=info;
        this.next=null;
    }
}

export class LinkedList{
    constructor(){
        this.head=null;
    }

    add(node){
        if(this.head==null){
            this.head=node;
            this.head.next=null;
        }
        else{
            let tmp=this.head;
            this.head=node;
            this. head.next=tmp;
        }
    }
    /*Write a function that inserts an element into a list only if the element to be inserted
    is larger than any of the elements currently in the list. Larger can mean either greater
    than when working with numeric values, or further down in the alphabet, when
    working with textual values.*/

    addifGrater(node){
        if(this.head==null){
            this.head=node;
            this.head.next=null;
            console.log("Element inserted");
        }
        else if(node.info>this.findMax()){
            let tmp=this.head;
            this.head=node;
            this. head.next=tmp;
            console.log("Element inserted");
        }
        else
            console.log("Element can't be inserted");
    }

    findMax(){
        let max=this.head.info;
        let tmp=this.head;
        while(tmp!=null){
            if(tmp.info>max){
                max=tmp.info;
            }
            tmp=tmp.next;
        }
        return max;
    }

    print(){
        tmp=this.head;
        while(tmp.next!=null){
            console.log(tmp.info);
            tmp=tmp.next;
        }
    }
}

let node=new LinkedList();
let a1=new Node(5);
node.add(a1);
a1=new Node(2);
node.add(a1);
a1=new Node(9);
node.add(a1);
a1=new Node(11);
node.add(a1);
a1=new Node(4);
node.add(a1);
a1=new Node(-9);
node.add(a1);

console.log("Max element: " +node.findMax());
a1=new Node(1);
node.addifGrater(a1);
a1=new Node(78);
node.addifGrater(a1);



stampanje(node.head);
function stampanje(p){
    while(p!=null){
        console.log(p.info);
        p=p.next;
    }
}
console.log("Obrtanje");
function rekurzivnoStampanje(p){ // stampanje od pozadi
    if(p==null)
    return;
    rekurzivnoStampanje(p.next);
    console.log(p.info);
}

function rekurzivnoObrtanje(p,node){
    if(p.next==null){
        node.head=p;
        return;
    }
    rekurzivnoObrtanje(p.next,node);
    // 5->8->null
    // <-5<-8<-head
    let tmp=p.next;
    tmp.next=p;
    p.next=null;
}

rekurzivnoStampanje(node.head);
rekurzivnoObrtanje(node.head,node);
console.log(node);





//Create a grades object that stores a set of student grades in an object. Provide a
//function for adding a grade and a function for displaying the student’s grade average.

export class Student{
    constructor(name,surname,grade){
        this.name=name;
        this.surname=surname;
        this.grade=grade;
    }
}
export class ArrayOfStudents{
    constructor(){
        this.array=[];
    }
    add(student){
        this.array.push(student);
    }
}

let objS=new ArrayOfStudents();
let af=new Student("Ana","Ilic",9.36);
objS.add(af);
af=new Student("Ana","Milic",6.34);
objS.add(af);
af=new Student("Ana","Igic",10.0);
objS.add(af);
af=new Student("Ana","Ilijic",8.88);
objS.add(af);
af=new Student("Ana","Lokic",7.12);
objS.add(af);

let sumiranje=((acc,grade)=>{return acc+grade.grade})
let brojanje=((acc)=>{return acc+1})

let sumOfGrades=objS.array.reduce(sumiranje,0);
let studentCount=objS.array.reduce(brojanje,0);

console.log("Ukupno studenata: "+studentCount);
console.log("Ukupna suma ocena: "+sumOfGrades);
console.log("Prosek: "+parseFloat(sumOfGrades/studentCount));

//Implementirati funkcije koja radi kao search bar, ako prosledimo niz "how to" funkcija nam 
//vraca sve ponudjene pretrage koje pocinju sa how to

let baza=["how to drink beer","How to be kind","I am an alien","how to be nice","how not to be dumb"];
let sub="how to";
let stampajSve=((el)=>{
    if(el.toLowerCase().startsWith(sub.toLowerCase()))
    console.log(el);
})

baza.map(stampajSve);

//Implementiraj sledece fukcije koje kao prvi 
//i jedini argument imaju listu korisnika sa imenom, prezimenom i JMBG-om.
let nizLjudi = [
    {
        name: "Leonid",
        lastname: "Petrovic",
        personalID: "0112999730043" 
    },
    {
        name: "Milan",
        lastname: "Jankovic",
        personalID: "1210997730012"
    },
    {
        name: "Lola",
        lastname: "Medvedevic",
        personalID: "1112997910023"
    },
    {
        name: "Aleksandra",
        lastname: "Rajevskivic",
        personalID: "0503999882912"
    },
    {
        name: "Ahmed",
        lastname: "Nurudinvic",
        personalID: "1705999901231"
    },
    {
        name: "Svetlana",
        lastname: "Raznatovic",
        personalID: "1406993891321"  
    },
    {
        name: "Biljana",
        lastname: "Biljkavic",
        personalID: "1406999891321"  
    }
  ]
//1) Vraca listu svih imena.
let vratiIme=((el)=>{
    return el.name;
})
let nizImena=nizLjudi.map(vratiIme);

console.log(nizImena);
//2) Vraca listu prezimena korisnika cije ime pocinje na L.
let vratiPrezime=(el=>{
    if(el.name.startsWith("L"))
        return el;
    
})
let nizPrezimena=nizLjudi.filter(vratiPrezime).map((el=>{return el.lastname}));
console.log(nizPrezimena);
//3) Vraca listu spojenih imena i prezimena (kao jedan string, sa razmakom), svih korisnika koji su rodjeni pre 1996.
let sveZajedno=nizLjudi.filter(el=>{if(el.personalID[4]<'9' || (el.personalID[5]<='9' && el.personalID[6]<'6')) return el;})
.map(el=>{return (el.name.concat(" ").concat(el.lastname))})
.reduce((acc,el)=>{return acc.concat(" "+el+" ")});
console.log(sveZajedno);
//4) Vraca listu korisnika rodjenih u Nisu (JMBG se zavrsava sa 73xxxx)
sveZajedno=nizLjudi.filter(el=>{if(el.personalID[7]=='7' && el.personalID[8]=='3')return el;})
.map(el=>{return el})
console.log(sveZajedno);
//5) Vraca true/false, da li su svi korisnici rodjeni posle 1993.
let proveraGodista=((acc,el)=>{
    if(el.personalID[4]=='9' && (el.personalID[5]<='9' && el.personalID[6]<='3'))
        acc=false;
    return acc;
})
sveZajedno=nizLjudi.reduce(proveraGodista,true);
console.log(sveZajedno);
//6) Vraca true/false, da li ima bar jedan korisnik cije se prezime ne zavrsava na -vic.
let proveraPrezimena=((acc,el)=>{
    if(!el.lastname.endsWith("vic"))
        acc=false;
    return acc;
})
sveZajedno=nizLjudi.reduce(proveraPrezimena,true);
console.log(sveZajedno);
//7) Vraca zbir godista svih korisnika.
//prosto

//8) Brojimo sve koji su rodjeni pre 96.
//prosto

//9. Rekurzivno izvrsiti konkatenaciju stringova niz(niz=['ja','ti','mi,'vi','oni']->['ja ti mi vi oni'])


//10. Rekurzivno odrediti sumu elemenata niza.
brojevi=[1,2,3,4,5,45,23]; //83
let inde=0;
function rekurzivnaSuma(array,inde){
    if(inde>=array.length)
    return 0;
    else
    return array[inde]+rekurzivnaSuma(array,(inde+1));
}
console.log("Suma niza je "+rekurzivnaSuma(brojevi,0));

//11. Rekurzivno odrediti proizvod elemenata niza
brojevi=[1,2,3,4,5]; //120
inde=0;
function rekurzivniProizvod(array,inde){
    if(inde>=array.length)
    return 1;
    else
    return array[inde]*rekurzivniProizvod(array,(inde+1));
}
console.log("Proizvod niza je "+rekurzivniProizvod(brojevi,0));

//12. Odrediti maximalni element u nizu koristeci reduce
brojevi=[8,9,3,2,65,11,13,15];
let maxReduce=((acc,el)=>{
    if(acc<el)
        acc=el;
    return acc;
})

let maxEl=brojevi.reduce(maxReduce,brojevi[0]);
console.log("Maksimalni element je: "+maxEl);

const niz = [1,2,3,4,7,8];
function suma2(arr)
{
    var index2 = 0;
	return function sumica(index2)
	{
        console.log(index2);
		if(index2 === arr.length-1)
			return 0;
		index2 = index2 +1;
		return arr[index2] + sumica(index2);
	}
}

console.log((suma2(niz))(0));

console.log("PROTOTIPOVI");
console.log("------------------------");

function funk(){
    this.a=12;
    this.b=3;
}

let ob=new funk();
console.log(ob); // ZA OBJEKAT zajednicki prototip je funk.prototype
console.log(Object.getPrototypeOf(ob));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(ob)));
funk.prototype.c=998;
ob.c=45;
console.log(ob.c); // dodaje prototipu funk atribut c, a ne objektu ob 45 
console.log(ob); // dodaje atribut c objektu ob

let ob2=new funk();
console.log(ob2);
console.log(ob2.c); // 998

// 1. --- KLASE U ES5 mogu da se prave kao konstruktorske funkcije

let Student2=(function(){
    let faks="Elfak";
    return function(ime,prezime,prosek){
        this.ime=ime;
        this.prezime=prezime;
        this.prosek=prosek;
        this.getIme=function(){return this.ime;}
        this.getFull=function(){return faks+" "+this.ime+" "+this.prezime+ " "+this.prosek;}
        this.setFaks=function(x){faks=x;} // bez this!!!!!!!!!!!!!!!!
    }
})()

let st1=new Student2("Danica","Djordjevic",9.43);
let st2=new Student2("Ana","Ilic",10.0);
let st3=new Student2("Milena","Milic",8.93);

console.log(st1.getFull());
console.log(st2.getFull());
console.log(st3.getFull());

st1.setFaks("ETF");
console.log(st1.getFull());
console.log(st2.getFull());
console.log(st3.getFull());

// funkcije klase mogu da se deklarisu i van nje, a u klasama je neophodn imati pokazivac na odredjenu funkciju
function getRobotInfo(){
    return this.name+" "+this.energy;
}

function Robot(name){
    //let that=this;
    this.name=name;
    this.energy=100;

    this.charge=function(){this.energy++;console.log("punjenje baterije");} // direktno mogu funkcije da se dodele konstruktorskoj funkciji
    this.getInfo=getRobotInfo;
    Robot.prototype.loseEnergy=function(){this.energy--;} // treci nacin dodeljivanja funkcija klasama je dodeljivanje prototipu

}

let robot=new Robot("R2D2");
robot.charge();
console.log(robot);
robot.charge();
console.log(robot.getInfo());
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
robot.loseEnergy();
console.log(robot.getInfo());

// 2. ---- KLASE mogu da se prave i kao objekti u js 
// NIJE MOGUCE INSTANCIRANJE
// OVI OBJEKTI SU SIGLETON
// nemamo this

let jsObj={
    name:"jabuka",
    weight:56,
    getInfo: function(){return this.name+" "+this.weight;}
}

console.log(jsObj);
console.log(jsObj.getInfo());

// 3. ---- SINGLETON PREKO FUNKCIJE
// imamo this

let voce= function(){
    this.name="jabuka";
    this.weight=67;
    this.getInfo=function(){return this.name+" "+this.weight;}
}

let pro= new voce();
console.log(pro);


// NASLEDJIVANJE U ES5

function Shape(x,y){
    this.x=x;
    this.y=y;
}

Shape.prototype.move=function(x,y){
    this.x+=x;
    this.y+=y;
}

function Circle(x,y,r){
    Shape.call(this,x,y);
    this.r=r;
}

Circle.prototype=Object.create(Shape.prototype); // ovim kazemo da krug nasledjuje oblik
Circle.prototype.constuctor=Circle;

// ako hocemo da dodajemo metode specificne za klasu krug, dodajemo ih prototipu!
Circle.prototype.area=function(){console.log(this.r*this.r*3.14);}

let c1=new Circle(3,4,5);
console.log(c1);
c1.move(5,6);
console.log(c1);
c1.area();

// ES6 klase

class Proba{
    constructor(x,y){
        this.x=x;
        this.y=y;
        if(!this.x)
        this.x=0;
        if(!this.y)
        this.y=0;
    }
    get vratiX(){return this.x;}
    set postaviX(k){this.x=k;}
}

let p1=new Proba(4,5);
console.log(p1.vratiX);
p1.postaviX=7;
console.log(p1.vratiX);

class Izvedena extends Proba{
    constructor(r){
        super(null,null); // MORA prvo konstruktor osnovne klase da se pozove, pa tek onda da se dodeli vrednost r
        this.r=r;
    }

    stampaj(){
        return (this.x+" "+this.y+" "+this.r);
    }

    postavi(x,y,r){
        this.r=r;
        super.postaviX=x; // metode roditeljske funkcije zovemo sa SUPER
        this.y=y;
    }

}

let i1=new Izvedena(1);
console.log(i1.stampaj());
console.log(i1.vratiX);
i1.postavi(9,8,7);
console.log(i1.stampaj());

// CONST i LET

// promenljivoj tipa const ne moze ponovo vrednost da se dodeli, ali dodeljenom vrednoscu sme da se manipulise
const k1=89;
let k2=89;
console.log(k1);
console.log(k2);

//k1=98; //greska
k2=98; // ispravno

console.log(k1);
console.log(k2);

//const k1=90; //greska
//let k2=90; //greska

// NE MOGU PONOVO DA SE DEKLARISU

console.log(k1);
console.log(k2);

console.log("TEST");

function letTest(){
    let k2=25;
    if(true){
        let k2=20;
        console.log(k2);
    }
    console.log(k2);
}
console.log(k2); //98
letTest(); //20 pa 25
// dopusta da imamo vise deklaracija promenljivih sa istim imenom, ali razlicitim vrednostima

let x="global";
//console.log(this.x); //greska

var y="global";
//console.log(this.y); //greska

// ES6 ARROW FUNKCIJE

let multiply=((el1,el2)=>{return el1*el2});
console.log("3*6 = "+multiply(3,6));

let sumary=((el1,el2)=>{return el1+el2});
console.log("3+6 = "+sumary(3,6));

let oduzmi=((el1,el2)=>{return el1-el2});
console.log("3-6 = "+oduzmi(3,6));

let podeli=((el1,el2=2)=>{return el1/el2});
console.log("3/6 = "+podeli(3,6));
console.log("3/? = "+podeli(3));

// TYPESCRIPT specificira tip podataka koji se obradjuej
// ako se ovoj funkciji prosledi intidzer, prijavljivace gresku
// typescript ovde ne radi
function greet(person){
    return "Hello "+person;
}

let year=22;
let usr=`He is ${year} years old`;
divDanica.innerHTML=greet(usr);
console.log(`He is ${year} years old`);

// KONSTRUKTOR PREKO IIFE

let Student3=(function(){
    return function(name,lastname,age){
        this.name=name;
        this.lastname=lastname;
        this.age=age;
        this.fullname=function(){return this.name+" "+this.lastname};
        this.getAge=function(){return this.age};
    }
})()

let ob3=new Student3("ana","milic",25);
console.log(ob3.fullname());
console.log(ob3.fullname() +" is "+ob3.getAge());

// TYPESCRIPT SABLONI



// join funkcija
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let joined=fruits.join(" ");
console.log(fruits);
console.log(joined); // sa sve zarezom ga spaja ako se navede join()
// ako se navede " " onda svaki element odvaja blanko znakom

fruits="Banana Orange Apple Mango";
joined=fruits.split("a");
console.log(joined);

// hoisting u js

cv=5;
console.log(cv);
var cv;

//closure

let Klass=(function(){
    //var that=this;
    return function(name){
        this.name=name;
       
    }
})()

let oo=new Klass("Danica");
console.log(oo);
//console.log(oo.getName());
//oo.setName("Milica");
console.log(oo);
//console.log(oo.getName());

let zaSum=[1,2,3,4,5];
let sumirano=zaSum.reduce(((acc,br)=>{return acc+br;}),0);
console.log(sumirano);

// 4^3 preko iife

/*let naKub=(function(stepen){
    return function(broj){
        return Math.pow(broj,stepen);
    }
})(3)*/

let naKub=function(stepen){
    return function(broj){
        return Math.pow(broj,stepen);
    }
}
let naK=new naKub(3);

let prom=naK(4);
console.log("4^3 je "+prom);

const R = 6;
const C = 5;

let mat = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
]

function min(a, b, c) {
    let m = a;
    if (m > b)
        m = b;
    if (m > c)
        m = c;
    return m;
}

let mat2 = new Array(R);
for (let i = 0; i < R; i++) {
    mat2[i] = new Array(C);
    mat2[i][0] = mat[i][0];
}

for (let j = 0; j < 5; j++) {
    mat2[0][j] = mat[0][j];
}

for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
        if (mat[i][j] == 1)
            mat2[i][j] = min(mat2[i][j - 1], mat2[i - 1][j], mat2[i - 1][j - 1]) + 1;
        else
            mat2[i][j] = 0;
    }
}

let max_of_s = mat2[0][0]; let max_i = 0; let max_j = 0;
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (max_of_s < mat2[i][j]) {
            max_of_s = mat2[i][j];
            max_i = i;
            max_j = j;
        }
    }
}

console.log(max_of_s);

