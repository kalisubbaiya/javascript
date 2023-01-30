// operator is a special symbol used to perform operations on operands (values and variables).

//                                      1.Arithmetic

//1.addition
let a=10,b=8;
let add=a+b;
console.log("Addition is " + add);

//2.Subtraction
let sub=a-b;
console.log("Subtraction is " + sub);

//3.multiplication
let mult=a*b;
console.log("Multiplication is " + mult);

//4.Exponentiation
let expo=a**2;
console.log("Exponentiation is " + expo);

//5.Division
let div=add / sub;
console.log("Division is " + div);

//6.Modulus
let mod=add % mult;
console.log("Modulus is " + mod);

//increment,decrement

let inc=15;
console.log("Post increment is " + inc++);

let inc1=15;
console.log("Pre increment is " + ++inc1);

let dec=15;
console.log("Post decrement is " + dec--);

let dec1=15;
console.log("Pre decrement is " + --dec1);

//                                      2.Assignment

let x=a;
console.log("simple assign "+x); //simple assign

x+=a;
console.log("addition assign "+x); //addition assign

x-=b;
console.log("subtraction assign "+x); //subtraction assign

x*=add;
console.log("multiplication assign "+x); //multiplication assign

b**=5;
console.log("exponentiation assign "+b); //exponentiation assign

b/=8*8;
console.log("division assign "+b); //division assign

b%=5;
console.log("remainder assign "+b); //remainder assign

//                                      3.comparison

x="18";
console.log(x==18);  //equal to value

console.log(x===18); //equal to value and data type

console.log(x!=10); //not equal

console.log(x!==18); //not equal value or not equal type

console.log(x>18); //greater than

console.log(x<18);  //less than

console.log(x>=18); //greater than or equal to

console.log(x<=18); //less than or equal to


//                                      4.Logical

x=10,y=8;
console.log(x>5 && y<6); // AND

console.log(x>5 || y<6); // OR

console.log(!(x==5)); // NOT

//                                      5.Condition or Ternary (three operand)

function myFunction() {
    let eligible;
    let age = Number(document.getElementById("inp").value);
    if (!(age)) {
      eligible = "Input is not a number";
    } else {
      eligible = (age < 18) ? "Not eligible" : "Eligible";
    }
    document.getElementById("result").innerHTML = eligible + " to Marry";
}

//                                      6.String

let text="hello";
let text2="everyone";
console.log(text+ text2);
console.log(text +" "+ text2);
console.log(text+ 5 + 5);
console.log(5- "2");
console.log(5+null); //null is 0 here
console.log("5"+ null);
console.log("5"* 2);
console.log("5"* "2");


console.log(Number(false));
console.log(Boolean(1));
console.log(Number("ten"));
console.log(Number(null));
console.log(Number(undefined));

//                                    7.comma
console.log(a, b, x, text, text2);

//                                    8.Unary operators(A unary operation is an operation with only one operand.)
// delete
let details={name:'kaliraj', degree:'B.E', department:'Mechanical', jobTitle:'Quality Inspector'};
delete details.jobTitle;
console.log(details);

// typeof
console.log(typeof(details));
console.log(typeof blur);        // returns "function"
console.log(typeof eval);        // returns "function"
console.log(typeof parseInt);    // returns "function"
console.log(typeof Date);    // returns "function"
console.log(typeof Function);    // returns "function"
console.log(typeof Math);    // returns "object"
console.log(typeof Option);    // returns "function"
console.log(typeof String);    // returns "function"


//                                    9.relational
// instanceof
// syntax: var name= objectName | instanceof | objectType
var obj={name:"kaliraj"};
console.log(obj instanceof Array);
console.log(obj instanceof Object);

var obj2=["mango","banana"];
console.log(obj2 instanceof Array);
console.log(obj2 instanceof Object);

// in
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees);    // returns true
console.log('length' in trees); // returns true (length is an Array property)
console.log('bday' in trees);   // returns false (bday is not an Array property)
                                // (b day is a value of an array)

//                                    10.Bitwise

//          0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//                            32 16 8 4 2 1

// AND
console.log(5 & 1); //  0101 & 0001
// OR
console.log(5 | 1); //	0101 | 0001
// NOT
console.log(~ 5); //	 ~ 0101
// XOR
console.log(5 ^ 1); //  0101 ^ 0001
// left shift
console.log(5 << 1);
// right shift
console.log(-5 >> 1);
// right shift
console.log(5 >>> 1);


