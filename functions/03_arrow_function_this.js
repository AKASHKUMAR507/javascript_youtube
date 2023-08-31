// const user = {
//     username: "Akash",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Kumar"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let userName = "Aakash"
//     console.log(this.userName);
// }
// chai()


// const chai = () =>{
//     let username = "Akashh";
//     console.log(this);
// }
// chai()

// arrow function

// const add = (num, num2) = (num + num2);



// IIFE 

(function chai(){
    console.log("DB CONNECT!!");
})();


(function aurChai() {
    // named iife
    console.log('DB CONNECTED TWO!!');
})();


((name) => {
    console.log(`DB THREE ${name} CONNECTED!!`);
})("MONGO DB");


