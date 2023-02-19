//  A JavaScript function is a block of code designed to perform a particular task.

// import { count } from "console";

//  A JavaScript function is executed when "something" invokes it (calls it).

//      ---->   Syntax
//  A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

//  Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).


            // function name(parameter1, parameter2, parameter3) {
            //     // code to be executed
            // }

            // name();

//  Inside the function, the arguments (the parameters) behave as local variables.


// Function Invocation

//  1.When an event occurs (when a user clicks a button)
//  2.When it is invoked (called) from JavaScript code
//  3.Automatically (self invoked)

window.onload = function() {
    console.log("kaliraj");
};


// Function Return

//  When JavaScript reaches a return statement, the function will stop executing.


let x = myFunction(4, 3);
function myFunction(a, b) {
    return a * b;
}
console.log(x);

//  Why functions

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.
// without () will return the function object


//  Local variables

//  Variables declared within a JavaScript function, become LOCAL to the function.
//  Local variables can only be accessed from within the function.
//  Since local variables are only recognized inside their functions, variables with the same name can be used in   different functions
//  Local variables are created when a function starts, and deleted when the function is completed.




function table(a){
    for (i=1; i<=10; i++){
        console.log(i*a);
    }
}
table(5)



function factorial(a){
    var fact=1;
    for (i=a; i>1; i--){
        fact*=i;
    }
    console.log(fact);
}
factorial(5);



function fibonacci(n){
    let i=0,j=1,k;
    while(i<n){
        console.log(i);
        k=i+j;
        i=j;
        j=k;
    }
}
fibonacci(10);


function reverse(a){
    var x,y=0;
    for (i=0; a!=0; i++){
        x=a%10;
        a=(a-x)/10;
        y=(y*10) +x;
    }
    console.log(y);
}
reverse(456);


function square(n) {
    return n * n;
}
var m=console.log(square(5));
var r=console.log(square(6));


// var num1=parseInt(prompt("enter number 1"));
// var num2=parseInt(prompt("enter number 2"));
// var operator=prompt("type mahtmatical operator + - * or /");
// function sum(num1, num2, operator){
//    if (operator === "+"){
//     console.log(num1 + num2);
//    }
//    else if (operator === "-"){
//     console.log(num1 - num2);
//    }
//    else if (operator === "*"){
//     console.log(num1 * num2);
//    }
//    else if (operator === "/"){
//     console.log(num1 / num2);
//    }
// }

// sum(num1, num2, operator);

// var myName=prompt("Type your name or anything");
// var noOfVowel=0;
// var vowels = ["a", "e", "i", "o", "u"];
// function countVowel() {
//     for (i=0; i<myName.length; i++){
//         for (j=0; j<i; j++){
//             if (myName.i === vowels[j]){
//                 noOfVowel++;
//             }
//         }
//     }
//     return noOfVowel
// }

// console.log(countVowel(noOfVowel));


var myName = prompt("enter your name")
function countVowel(myName) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (let x of myName) {
        if (vowels.includes(x)) {
            count++;
        }
    }
    return count;
}

console.log(countVowel(myName));