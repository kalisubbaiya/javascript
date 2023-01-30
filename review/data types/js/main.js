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
console.log(typeof(undefined));

//boolean type
console.log("type of confirm is"+" "+typeof(confirm()));
console.log(confirm());

//null type
let val=null;
console.log("type of null is"+" "+typeof (null));
console.log(val);

//null==undefined is true
//null===undefined is false

//array
let array=['hi',"hello"];
console.log(array);
console.log(typeof(array));

//object
let obj={fName:'kaliraj',lName:"subbaiyakani"};
console.log(obj);
console.log(typeof(obj));


let x=5;
let y=x;
y=6;
console.log(x);
console.log(y);


let obj1=obj;
obj.fName='kali';
console.log(obj);
console.log(obj1);



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