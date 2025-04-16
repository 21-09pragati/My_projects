// PRACTICE -1
//Q1
// let a="pragati"
// let b=21
//console.log(a+b)

const PromptSync = require("prompt-sync")

//Q2
//console.log(typeof (a+b))

//Q3
// const v ={
//     name: "Pragati",
//     rollno: 21
// }

//v = 21

//Q4
 
// v['place']="karad"
// console.log(v)






//Practice-2
//Q1
// const prompt=require('prompt-sync')();
// let a=prompt("Enter age: ")

// if (a>10 && a<20){
//     console.log("age granted")
// }
// else{
//     console.log("Age not granted")
// }

//Q2
// const prompt=require('prompt-sync')();
// const a1= Number(prompt("Enter colour number:"))
// switch(a1){
//     case 1:
//         console.log("Blue colour")
//         break;
//     case 2:
//         console.log("Yellow colour")
//         break;
//     case 3:
//     case 4:
//         console.log("Pink or black")
//         break;
//     default:
//         console.log("No valid colour")
// }



//Q3
/*
const prompt=require("prompt-sync")();
let num=prompt("Enter number to check if it is divisible by 2 & 3: ")

if (num%2==0 && num%3==0){
    console.log(`${num} is divisible by 2 & 3`)
}
else{
    console.log(`${num} is not divisible by 2 & 3`)
}
*/


//Practice-3
//Q1
/*
const marks={
    "Pragati":50,
    "Dipak":45,
    "Ayush":60,
}

for (let i=0;i<Object.keys(marks).length;i++){

    console.log("The marks of " +Object.keys(marks)[i]+ "are" +marks[Object.keys(marks)[i]])
}

*/

//Q2
/*const marks={
    "Pragati":50,
    "Dipak":45,
    "Ayush":60,
}

for (let i in marks){
    console.log("Marks of " +i+ " is " +marks[i])
}
*/

//Q3
/*
let num=21
let i 
while(i!=num){
    const prompt=require("prompt-sync")();
    i=prompt("Enter a number: ")
    i=Number.parseInt(i)
    console.log("Wrong Number . Please try again")
}
console.log("You have entered a correct number")
*/

//Q4
/*
function mean(a,b,c,d,e){
    sum=a+b+c+d+e
    return sum/5
}

console.log(mean(1,2,3,4,5))
*/

//Practice-4

//Q1
//console.log("Prag\"".length)

//Q3
// let a="PRAGATI"
// console.log(a.toLowerCase())


//Q4
// let a="Please give me Rs 1000"
// console.log(a.slice(15))


//Q5
let a="Please give me Rs 1000"
console.log(a.replace("a","i"))