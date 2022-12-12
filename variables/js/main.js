//number type
let num=18;
console.log(num);
console.log("type of num is"+" "+typeof(num));
//string type
let king="kohli";
console.log(king);
console.log("type of king is"+" "+typeof(king));
//undefined type
let undef;
console.log("type of undef is"+" "+typeof(undef));
//boolean type
console.log("type of confirm is"+" "+typeof(confirm()));
console.log(confirm());
//NaN type
let word="hello";
let nan=king-undef;
console.log(nan);
//null type
let val=null;
console.log("type of null is"+" "+typeof (null));
console.log(val);
//BigInt type
let x=BigInt(9892788273672363738372876378);
console.log(typeof x);
console.log(x);
//pre-increment
let a=17;
console.log(a++);
console.log(a++);
//post-increment
let b=18;
console.log(++b);
//ternary-operator
let c=(a>b)? "a is big":"b is big";
console.log(c);