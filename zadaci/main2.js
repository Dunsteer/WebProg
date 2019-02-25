/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

export class HashNode{
    constructor(key,ind){
        this.key=key;
        this.ind=ind;
    }

    set setKey(k){
        this.key=k;
    }
}

export class HashTable{
    constructor(size){
        this.size=size+1;
        this.table=new Array(this.size);
    }

    hash(key){
        return (key%this.size);
    }

    add(arg){
        let indeks=this.hash(arg.key);
        this.table[indeks]=arg;
    }

    exists(arg){
        console.log("dobio sam "+this.hash(arg));
        console.log("element "+this.table[this.hash(arg)].key);
        if(!this.table[this.hash(arg)]){
            console.log("Vracam false");
            return false;
        }
        else{
            console.log("Vracam true");
            return true;
        }
    }
    
    returnIndeks(arg){
        console.log("Indeks "+this.table[this.hash(arg)].ind);
        return this.table[this.hash(arg)].ind;
    }
    
}

const target=9;
let array=[2,8,7,5];


function findmax(array){        // O(n)
    let max=array[0];
    for(let i=0;i<array.length;i++)
        if(max<array[i])
            max=array[i];
    return max;
}

function importArray(array,hashTable){    // O(n)
    for(let i=0;i<array.length;i++){
        let node=new HashNode(target-array[i],i);
        hashTable.add(node);
    }
}

function findIndex(array,target){ // O(n^2)
    let obj={};
    for(let i=0;i<array.length-1;i++){
        obj.indeks1=i;
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==target){
                obj.indeks2=j;
                return obj;
            }
        }
    }
}

let obj=findIndex(array,target);

console.log(obj.indeks1+"  "+obj.indeks2);

function findIndexWithHash(array,target){ // O(n)
    let obj={};
    let hashsize=findmax(array);
    let ht=new HashTable(hashsize);
    importArray(array,ht);
    console.log(ht);
    for(let i=0;i<array.length;i++){
        obj.indeks1=i;
        if(ht.exists(target-array[i])){
            console.log("usao sam "+target-array[i])
            obj.indeks2=ht.returnIndeks(array[i]);
            return obj;
        }
    }

    return undefined;
}

let obj2=findIndexWithHash(array,target);
console.log("Sa hash tablicom "+obj2.indeks1+"  "+obj2.indeks2);


//reverse digits of an integer.

let broj=121;

console.log("Duzina broja 123 je "+vratiDuzinu(broj));

function vratiDuzinu(broj){   //O(n)
    let i=0;
    let br=broj;
    while(br!=0){
        br=parseInt(br/10);
        i++;
    }
    return i;
}


function obrni(broj){ // O(n)
    let br=broj;
    let tmp=0;
    let prethodni=0;
    while(br!=0){
        tmp=br%10; 
        br=parseInt(br/10);
        prethodni=prethodni*10+tmp;
    }
    return prethodni;
}

console.log("Prvobitni broj "+broj);
console.log("Obrnuti broj "+obrni(broj));

/*Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.
121 true*/

function smestiUNiz(broj){  //O(n)
    let array=[];
    while(broj!=0){
        array.push(broj%10);
        broj=parseInt(broj/10);
    }

    return array;
}

function isPalindrome(broj){   //O(n/2)
    let array=smestiUNiz(broj);
    let i=0;
    while(i<parseInt(array.length/2)){
        if(array[i]!=array[array.length-1-i])
            return false;
        i++;
    }
    return true;
}

console.log("Broj 121 je palindrom: "+isPalindrome(broj))

/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
*/

let niz=[["flower"],["flow"],["flowed"]];
//console.log(niz[1]);

function prefix(niz){     // O(n^2)
    if(niz.length==0)
    return "";
    let pref=JSON.stringify(niz[0]);
    let bul=true;
    let indikator=false;
    while(indikator==false){
        for(let i=1;i<niz.length;i++){
            bul=true;
            console.log(pref);
            
            if(JSON.stringify(niz[i]).startsWith(pref)==false){
                pref=pref.slice(0,pref.length-1);
                bul=false;
                break;
            }
        }
        if(bul==true)
            indikator=true;
    }
    return pref.slice(2,pref.length);
}

console.log("Prefiks za flower,flow i flowed je "+prefix(niz));

/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.*/


export class Stack{
    constructor(){
        this.pointer=0;
        this.stack=[];
    }

    push(el){
        this.stack[this.pointer]=el;
        this.pointer++;
    }

    pop(){
        let tmp=this.stack[this.pointer];
        this.pointer--;
        console.log(this.pointer);
        return tmp;
    }

    peek(){
        let tmp=this.stack[this.pointer-1];
        return tmp;
    }

    get returnPointer(){
        return this.pointer;
    }
}

function isItValid(expression){
    let stek=new Stack();
    let i=0;
    let el;
    while(i<expression.length) {
        el=expression[i];
        if(el=="("||el=="{"||el=="["){
            stek.push(el);
        }
        else if(el==")" && stek.peek()=="("){
            stek.pop();
        }
        else if(el=="]" && stek.peek()=="["){
            stek.pop();
            
        }
        else if(el=="}" && stek.peek()=="{"){
            stek.pop();
        }
        i++;
    }

    if(stek.returnPointer==0){
        return true;
    }
    return false;
}

let exs="[2+5]+{8+9+(8+6)}";

console.log(exs+" "+ isItValid(exs));

/*Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

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

    returnHead(){
        return this.head;
    }

    returnIntersect(head2){
        let tmp1=this.head;
        let tmp2=head2;
        let i,j;
        i=0;
        j=0;
        let pom1=this.head;
        let pom2=head2;
        while(tmp1.info!=tmp2.info){
            tmp2=tmp2.next;
            tmp1=tmp1.next;
            if(tmp1==null && j%2==0){
                tmp1=pom1;
            }
            else if (tmp1==null){
                tmp1=pom2;
            }
            if(tmp2==null && i%2==0){
                tmp2=pom2;
            }
            else if(tmp2==null){
                tmp2=pom1;
            }
            i++;
            j++;
        }
        return tmp1;
    }

    print(){
        let tmp=this.head;
        while(tmp!=null){
            console.log(tmp.info);
            tmp=tmp.next;
        }
    }

    merge(ll2){
        let tmp2=ll2.head;
        let tmp1=this.head;
        if(this.info>ll2.head.info){
            tmp1=ll2.head;
            tmp2=this.head;
        }
        while(tmp2!=null && tmp1!=null){
            if(tmp1.info < tmp2.info){
                tmp1=tmp1.next;
            }
            else if(tmp1.info >= tmp2.info){
                let tmp=tmp1.next;
                tmp1.next=tmp2;
                tmp2=tmp2.next;
                tmp1.next.next=tmp;
            }
        }

    }
}

let node=new LinkedList();
let a1=new Node(3);
node.add(a1);
a1=new Node(2);
node.add(a1);
a1=new Node(1);
node.add(a1);

let node2=new LinkedList();
a1=new Node(6);
node2.add(a1);
a1=new Node(4);
node2.add(a1);
a1=new Node(2);
node2.add(a1);

node2.print();
console.log("Prva");
node.print();

console.log("Merge");
//node.merge(node2);
node.print();

/*Given a sorted array nums, remove the 
duplicates in-place such that each element appear only once and return the new length.*/

array=[1,1,1,3,3,4,4,6,6,6,6,6,6,8,9];  // O(n)

let pret=array[0];
let reduced=[];
/*reduced.push(pret);
array.forEach(el=>{
    if(el!=pret){
        pret=el;
        reduced.push(el);
    }
})*/
function funk(acc,el){
    if(el!=pret){
        pret=el;
        acc.push(el);
    }
    return acc;
}
reduced=array.reduce(funk,[]);
console.log(reduced);

/*Do not allocate extra space for another array,
 you must do this by modifying the input array in-place with O(1) extra memory.*/

 pret=6;
 function funk2(acc,el){
    if(el!=pret){
        acc.push(el);
    }
    return acc;
}
reduced=array.reduce(funk2,[]);
console.log(reduced);

console.log(array.filter((el=>{return el!=6})));

/*Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2

Example 2:

Input: [1,3,5,6], 2
Output: 1
*/

function binarySearch(array,el){   // O(log(n))
    let d=0;
    let g=array.length-1;
    let s=parseInt((d+g)/2);
    while(d<=g && array[s]!=el){
        if(el<array[s])
            g=s-1;
        else
            d=s+1;
        s=parseInt((d+g)/2);
        if(el==array[s])
        return s;
    }
    return (s+1);
}

array=[1,5,6,9,12,14,23,45,54,77,87,123]; 

console.log(array);
console.log("Indeks elementa 9 je "+binarySearch(array,9));

console.log(array);
console.log("Indeks elementa 63 je "+binarySearch(array,63));

/*Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]*/

let nums2 = [2,5,6];
let nums1 = [1,2,3];
let nums3=[];

let i,j;
i=0;
j=0;
while(nums1[i] && nums2[j]){
    if(nums1[i]<nums2[j]){
        nums3.push(nums1[i]);
        i++;
    }
    else{
        nums3.push(nums2[j]);
        j++;
    }
}
if(nums1[i]){
    while(nums1[i]){
        nums3.push(nums1[i]);
        i++;
    }
}
if(nums2[j]){
    while(nums2[j]){
        nums3.push(nums2[j]);
        j++;
    }
}
console.log("Output: [1,2,2,3,5,6]");
console.log(nums3);

/*Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

function returnNumber(str){
    if(str=="1")
    return 1;
    else
    return 0;
}

function addBinary(array1,array2){
    let i=array1.length-1;
    let j=array2.length-1;
    let prenos=0;
    let cifra;
    let tmp=0;
    while(j>=0 && i>=0){
        let el1=returnNumber(array1[i]);
        let el2=returnNumber(array2[j]);
        cifra=(el1+el2+prenos)%2;
        if(el1==1 && el2==1)
            prenos=1;
        tmp=tmp*10+cifra;
        i--;
        j--;
    }

    if(j>=0){
        while(j>=0){
            let el2=returnNumber(array2[j]);
            cifra=(el2+prenos)%2;
            if(el2==1 && prenos==1)
                prenos=1;
            tmp=tmp*10+cifra;
            j--;
        }
    }
    if(i>=0){
        while(i>=0){
            let el2=returnNumber(array2[i]);
            cifra=(el2+prenos)%2;
            if(el2==1 && prenos==1)
                prenos=1;
            tmp=tmp*10+cifra;
            i--;
        }
    }
    return cifra;

}

console.log("Rezultat sabiranja 1011 i 11 je "+addBinary("1011","11"));

/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
*/



let funk3=((acc,el)=>{
    if(!acc[el]){
        acc[el]=1;
    }
    else{
        acc[el]++;
    }
    return acc;
});

array=[2,2,3,1,3,4,1];

obj=array.reduce(funk3,{});
for(let key in obj){
    if(obj[key]==1){
        console.log("Element koji se ponavlja samo jednom je "+key);
    }
}

/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

array=[-2,1,-3,4,-1,2,1,-5,4];

let max = array[0];
let maxI = 0;
let maxJ = 0

for (i = 0; i < array.length; i++) {
    let sum = 0;
    for (j = i; j < array.length; j++) {
        sum += array[j];

        if (sum >= max) {
            maxI = i;
            maxJ = j;
            max = sum;
        }
    }
}

console.log("Maksimalna suma je "+max);
console.log(array.slice(maxI, maxJ+1));

// odrediti da li se sve lancane liste preplicu
//intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
//Output: Reference of the node with value = 8

let linkLista1=new LinkedList();
linkLista1.add(new Node(5));
linkLista1.add(new Node(4));
linkLista1.add(new Node(8));
linkLista1.add(new Node(1));
linkLista1.add(new Node(0));
linkLista1.add(new Node(7));

let linkLista2=new LinkedList();
linkLista2.add(new Node(5));
linkLista2.add(new Node(4));
linkLista2.add(new Node(8));
linkLista2.add(new Node(1));
linkLista2.add(new Node(4));

//console.log("Mesto sastanka je "+linkLista1.returnIntersect(linkLista2.returnHead()).info);

/*Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.*/

array=[2,7,11,15];
let tar=9;
obj=findIndexWithHash(array,tar);
console.log("Index1 "+(obj.indeks1+1)+" Indeks2 "+(obj.indeks2+1));

/*Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3*/


array=[2,2,1,1,1,2,2];
let reducer=((acc,el)=>{
    if(acc[el]){
        acc[el]++;
    }
    else{
        acc[el]=1;
    }
    return acc;
})

let bla=array.reduce(reducer,{});
for(let key in bla){
    if(bla[key]>(parseInt(array.length/2))){
        console.log(key);
    }
}

/*Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.*/

function faktorijel(n){
    if(n==1){
        return 1;
    }
    return n*faktorijel(n-1);
}

let fak3=faktorijel(3);
console.log("3! je "+fak3);

function trailingZero(int){
    let fakint=faktorijel(int);
    return countZeros(fakint);
}

function countZeros(fakint){
    let tmp=fakint;
    let ostatak=fakint;
    let brojNula=0;
    while(tmp!=0){
        ostatak=tmp%10;
        tmp=parseInt(tmp/10);
        if(ostatak==0){
            brojNula++;
        }
    }
    return brojNula;
}

console.log("3! je "+fak3+ " i ima "+trailingZero(3)+" nula");
console.log("5! je "+faktorijel(5)+ " i ima "+trailingZero(5)+" nula");

/* Happy number
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/

function vratiNizCifara(int){
    let tmp=int;
    let ostatak=int;
    let niz=[];
    while(tmp!=0){
        ostatak=tmp%10;
        tmp=parseInt(tmp/10);
        niz.push(ostatak);
    }
    return niz;
}

function sumirajKvadrate(niz){
    let output=0;
    niz.forEach(element => {
        output+=Math.pow(element,2);
    });
    return output;
}

function happyNumber(int){
    let output=0;
    let tmp=int;
    while(output!=1){
        let niz=vratiNizCifara(tmp);
        // na indeksu 0 je cifra najmanje tezine
        output=sumirajKvadrate(niz);
        tmp=output;
    }
    return true;
}

console.log("Broj 19 je happy number: "+happyNumber(19));

/*The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

*/
let str="ja sam Danica";
/*for (i = 0; i < str.length; i++) {
    console.log(str.charAt(i)); // izbacuje slovo po slovo
}*/

convert("PAYPALISHIRING",4);



function convert(string,numRows){
    let array=new Array(numRows);
    let pomeraj=0;
    let red=0;
    let i=0;

    for(i=0;i<numRows;i++){
        array[i]=[];
    }

    i=0;

    while(i<string.length){
    
        //(str.charAt(i)); // izbacuje slovo po slovo
        if(pomeraj%numRows==0 && red<numRows){
            array[red].push(string.charAt(i));
            //alert("Ubacujem "+string.charAt(i))
            i++;
            
        }
        else if(pomeraj%numRows==(numRows-1) && red<numRows){
            array[red].push(string.charAt(i));
            i++;
            pomeraj=1;
            //alert("Ubacujem "+string.charAt(i))
        }
        else if(pomeraj%numRows==(numRows-1) && red>=numRows){
            numRows=0;
            pomeraj=1;
        }
        else if(pomeraj%numRows>0 && pomeraj%numRows<(numRows-1)){
            if(red==(numRows-pomeraj-1)){
                alert("Red je "+(numRows-pomeraj-1));
                array[red].push(string.charAt(i));
                i++;
                //alert("Ubacujem "+string.charAt(i))
            }
        }
        red++;
        if(red==numRows){
            pomeraj++;
            red=0;
        }
    }

    console.log(array);

    let output=[];

    let m=array[0].length;
    let n=numRows;
    for(i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(array[i][j])
                output.push(array[i][j]);
        }
    }

    console.log(output);
}


  /*2. Naæi index elementa u nizu tako da je zbir elemenata pre tog elementa veci od zbira posle tog elementa.*/

  array=[2,11,88,2,30,15,9,4,12,0,6,8];
  let pre=0;
  let ind=0;

  let sumiraj=(array=>{
        let sum=0;
        array.forEach(el=>{
            sum+=el;
    })
    return sum;
  })

  let total=sumiraj(array);

  let ponadji=((acc,el,index)=>{
        pre+=el;
        if(pre>total-el-pre && ind==0){
            acc=index;
            ind=1;
        }
        return acc;
  })

  console.log("Indeks je "+array.reduce(ponadji,null))

  //9. Rekurzivno izvrsiti konkatenaciju stringova niz(niz=['ja','ti','mi,'vi','oni']->['ja ti mi vi oni'])

array=['ja','ti','mi','vi','oni'];

function concat2(ind,array){
    if(ind>=array.length)
        return " ";
    return array[ind].concat(" "+concat2(ind+1,array));
}

console.log(concat2(0,array));






