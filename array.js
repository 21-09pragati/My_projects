let a1=[21,43,23,56]

/*
for (let i=0; i<a1.length;i++){
    console.log(a1[i])
}
*/
//  console.log(typeof a1)

/*
b=a1.toString()
console.log(b)
*/

let a2= [78,789,231,123,23,4,1]
// b=a1.concat(a2)
// console.log(b)

// c=a2.sort()
// console.log(c)

// z=[3,2,1,5,6,7]
// console.log(z.pop())
// console.log(z)

// console.log(a2.push(666))
// console.log(a2) //modifies new array

// console.log(a1.shift())  //removes first element and returns it
// console.log(a1)         //modifies original array

// let b1=[54,23,43,12,23]
// console.log(b1.unshift(1900))
// console.log(b1)

// let b2=[54,23,43,12,23]
// delete b2[1]
// console.log(b2)  


// let compare=(x,y)=>{
//     return x-y
// }
// d=[123,534,23,245,87,886,4,5,3]
// let d1= d.sort(compare)
// console.log(d1)


/*
1. The compare Function
This function takes two numbers, x and y, and returns the result of x - y.

In sort(), this tells JavaScript how to compare two elements in the array:

If the result is negative, x comes before y.

If the result is positive, y comes before x.

If it’s zero, their order stays the same.

So, x - y means: sort in ascending order (smallest to largest).*/


// let f=['a','f','k','i']
/*f1=f.splice(1,1,'p')
console.log(f1, f)*/
// f2=f.splice(2,1,'u','o','e')
// console.log(f2,f)















let a= Array.from("Pragati")
console.log(a)