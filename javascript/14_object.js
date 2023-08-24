// there are two ways to create object 
// 1. literals 
// 2. constructor or singleton
// Object.create

// obj literals

const mySym = Symbol('Key');

const user = {
    name: "Akash",
    "lastName": 'Kumar',
    [mySym]: "Key1",
    age: 12,
    location: 'delhi',
    email: 'akash@google.com',
    isLoggedIn: false,
    lastLogin: [1,2,3,4,5],

}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["lastName"]);

// console.log(user[mySym]);


// Object.freeze(user) // you can not change onj value;

// user.name = "Sumit";

// console.log(user);

user.greeting = function() {
    console.log("Hello user");
}


user.greetingTwo = function() {
    console.log(`hello user ${this.name}`);
}


console.log(user.greeting());
console.log(user.greetingTwo());


