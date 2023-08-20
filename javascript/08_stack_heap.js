// two type of memory 
// Stack (Primitive data) return (copy value), Heap (Non-Primitive data) return (refrence value)


// let name = "Akash Kumar";
// let anotherName = name;

// anotherName = "Vikash Chopra";

// console.log(name);
// console.log(anotherName);



let user_1 = {
    email: 'abc@gmail.com',
    upi: 'abc@ybl'
}

let user_2 = user_1;

user_2.upi = 'def@ybl';

console.table(user_1);