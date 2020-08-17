//Function default parameter for not provided values
/** 
function add(num1, num2){
    return num1 + num2;
}
const total = add(12, 34);
console.log(total);
*/
/** 
function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(12);
console.log(total);
*/

/** 
function add(num1, num2){
    num2 = undefined || 0;
    return num1 + num2;
}
const total = add(12);
console.log(total);
*/

/** 
function add(num1, num2 = 0){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(12);
console.log(total);
*/

/** 
function add(num1, num2 = 20){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(12, 3);
console.log(total);
*/