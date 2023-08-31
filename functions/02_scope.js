// let a = 2;
// var b = 3;
// const c = 4;

var b = 32;

if (true) {
    // let a = 2;
    // const c = 4;
    var b = 300;
}


// console.log(a);
// console.log(b);
// console.log(c);


// scope part 2 


function one(){
    const userName = "Akash";
    
    function two(){
        const website = 'youtube';
        console.log(userName);
    }

    // console.log(website);

    // two();
}

// one()



// *************************** Interesting concept ********************

one();

function one(num){
    return num + 1;
}

// one();

// addTwo();  //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

// addTwo();