

// const arr = [1,2,3,4,6]

// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char ${greet}`);
// }


// Map

const map = new Map();
map.set("In", "India")
map.set("USA", "United State")
map.set("FR", "France")
map.set("NP", "Nepal")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, " ", value);
// }


const myObject = {
    "game1": "NFS",
    "game2": "BGMI"
}

// for (const [key, value] of myObject) {.  // not working in object
//     console.log(key, " ", value); 
// }

const myObject2 ={
    js: "javascript",
    cpp: "c++",
    py: 'python',
    html: 'markep up language'
}

// for (const key in myObject2) {
//     console.log(key);
//     console.log(myObject2[key]);
// }


// const pro = ['java', 'javascript', 'cpp', 'python']
// for (const i in pro) {
//     console.log(pro[i]);
// }

// forEarch loop

const coding = ['akash','cpp', 'js', 'ruby', 'python', 'swift', 'java']

const codingName = (item) => {
    console.log(item);
}

// coding.forEach((item) =>{
//     console.log(item);
// })

// coding.forEach(codingName);


// coding.forEach((item, index, arr) =>{
//     console.log(item, index);
// })

const myCoding = [
    {
        languageName: 'javascript1',
        languageFileName: 'js1'
    },
    {
        languageName: 'javascript2',
        languageFileName: 'js2'
    },
    {
        languageName: 'javascript3',
        languageFileName: 'js3'
    },
    {
        languageName: 'javascript4',
        languageFileName: 'js4'
    }
]


myCoding.forEach((item, index) =>{
    console.log(item.languageName);
})