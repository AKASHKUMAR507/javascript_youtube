// Arrays

// const arr = [1,2,3,4, {name: "Akash", age: 32}];
// console.log(arr);


// javascript ke array resizable hote hai

const myArr = [1,2,3,5,6,7,8];

// console.log(myArr[0]);

// Shallow Copies:  A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.


const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);

ingredientsListCopy[1].list = ['rice', 'flour', 'water'];


// console.log(ingredientsList);
// console.log(ingredientsListCopy)

// Note : Shallow copy me refrence milta hai original value ka so agar copy value me change kiya to original value me bhi chnage hoga .



// Deep Copies : A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

// Deep copy me ek copy milta hai original value ka so agar aap change karte hai copy value me toh original value me change nahi hota hai


const myArray = new Array(1,2,3,4,5);

// console.log(myArray);

// Array Method

// myArray.push(6);
// myArray.pop()

// myArray.unshift(8)
// myArray.shift();

// console.log(myArray.includes(3));
// console.log(myArray.indexOf(3));


// const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);


// slice, splice 

console.log("A ", myArray);
const newArr = myArray.slice(1,3);

console.log(newArr);
console.log("B", myArray);

const newArr2 = myArray.splice(1,3)
console.log("C" , myArray);
console.log(newArr2);


// Note slice original array ko change nahi karta hai
// jabki splice original array ko change kar deta hai

