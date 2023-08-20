// Primitive data type
// 7 types : String, Number, Boolean, null, undefined, Symble, BigInt

// Reference Type || Non Primitive datatype
// Array, Object, Function


// Note : JavaScript is a dynamically typed language, which means that
//        data types of variables are determined by the value they hold at runtime 
//        and can change throughout the program as we assign different values to them.

const name = "Akash Kumar";
const number = 621731;
const isLoggedIn = false;
const age = null;
const user = undefined;

const id = Symbol("123");
const id2 = Symbol("123");

// console.log(id == id2);
// console.log(id.description);
// console.log(id2.description);


const heros = ['abs', 'def', 'ghi'];

const obj = {
    name : 13,
    age: 2
}


const myFunction = function name () {
    console.log('Hello');
}

console.log(typeof myFunction);