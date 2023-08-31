// rest operator in function 
// rest operator return an array 

// get all value in one array

function calculateCartPrice(...num){
    return num
}

// get sum of all value

function calculateCartPrice(...num){
    return num.reduce((initial, next) => {return (initial + next)});
}

// console.log(calculateCartPrice(12, 232, 32,32,42, 43, 43, 32, 42, 5463 ))


function calculateCartPrice(val1, val2, ...num){
    return num
}

// console.log(calculateCartPrice(100, 200, 300, 4000, 5500))


// object in function 

const user = {
    name: "Akash",
    age: 21,
}

function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user)
// handleObject({name: "Akash", age: 21})


const myNewArray = [200, 1100, 323, 300];

function acceptArray(getArray){
    return getArray[1]
}

// console.log(acceptArray(myNewArray))
console.log(acceptArray([2,3,4,5]))

