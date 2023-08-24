// const tinder = new Object();

const tinder = {};

tinder.id = '23dsa342';
tinder.name = "Alasj";

// console.log(tinder);

const Hello = ({tinder}) =>{
    // const {id, mame} = tinder;
    // console.log(id, name);
}


const ob1 = {1: "a", 3: 'b'};
const ob2 = {5: "d", 7: 'e'};
const ob3 = {9: "g", 11: 'f'};


const newObj = {ob1, ob2, ob3}
const newObj2 = Object.assign({}, ob1, ob2, ob3);
const newObj3 = {...ob1, ...ob2, ...ob3}

// data base se value aati hai tab

const user = [
    {
        id:1,
        email: "anc@gmail.com",
    },
    {
        id:1,
        email: "anc@gmail.com",
    },
    {
        id:1,
        email: "anc@gmail.com",
    },
    {
        id:1,
        email: "anc@gmail.com",
    },
]


// const userData = user[0]

// console.log(userData);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('name'));



