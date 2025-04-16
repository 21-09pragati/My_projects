// FOR LOOP
/*
const prompt=require('prompt-sync')();
let n = prompt("Enter value of n: ")
n=Number.parseInt(n)


let fact=1
for (let i=1;i<=n;i++){
    fact=fact*i  //fact*=i

}
console.log("Factorial of "+n+" is " +fact)
*/


//FOR IN Loop
/*
let marks={
    "pragati":98,   // for keys--> i and for values--> marks[i]
    "ayush":76,
    "sulu":88,
    "mahesh":76
}

for (let i in marks){
    console.log(marks[i])
}
*/


//FOR OF loop
/*

for (let i of [1,2,3]){
    console.log(i)
}
*/


// While loop
/*
const prompt=require('prompt-sync')();
let n=prompt("Enter value of n: ")

let i=1
while (i<n){
    console.log(i*2)
    i++
}
*/

//do-while loop

const prompt=require('prompt-sync')();
let n=prompt("Enter value of n: ")

let i=1
do{
    console.log(i*2)
    i++
}while (i<n)