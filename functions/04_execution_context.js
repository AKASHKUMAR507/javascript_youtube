// javascript execution context 

// {} => global execution context 
// {} => function EC 
// {} => Eval EC 

// [{}] => Memory creation phase 
//         Execution Phase 

let var1 = 10;
let var2 = 20;

function addNum(num1, num2){
    let total = num1 + num2;
    return total
}

let res = addNum(var1, var2);
let res2 = addNum(32,43);

