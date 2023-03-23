// ---------------Math Method-----------------

//  The JavaScript Math object allows you to perform mathematical tasks on numbers.

// ------->     The syntax for any Math property is : Math.property.

//  --JavaScript provides 8 mathematical constants that can be accessed as Math properties:

          // Math.E        // returns Euler's number
            document.write("Math.E ---"+Math.E + "<br>");
          // Math.PI       // returns PI
            document.write("Math.PI ---",Math.PI + "<br>");
          // Math.SQRT2    // returns the square root of 2
            document.write("Math.SQRT2 ---",Math.SQRT2 + "<br>");
          // Math.SQRT1_2  // returns the square root of 1/2
            document.write("Math.SQRT1_2 ---",Math.SQRT1_2 + "<br>");
          // Math.LN2      // returns the natural logarithm of 2
            document.write("Math.LN2 ---",Math.LN2 + "<br>");
          // Math.LN10     // returns the natural logarithm of 10
            document.write("Math.LN10 ---",Math.LN10 + "<br>");
          // Math.LOG2E    // returns base 2 logarithm of E
            document.write("Math.LOG2E ---",Math.LOG2E + "<br>");
          // Math.LOG10E   // returns base 10 logarithm of E
            document.write("Math.LOG10E ---",Math.LOG10E + "<br>");

//  The syntax for Math any methods is : Math.method(number)
//  There are 4 common methods to round a number to an integer:

        // Math.round(x)	Returns x rounded to its nearest integer
          console.log(Math.round(4.6)) //------> 5
          console.log(Math.round(4.4)) //------> 4
          console.log(Math.round(-4.4)) //------> -4
          console.log(Math.round(-4.6)) //------> -5
        // Math.ceil(x)	Returns x rounded up to its nearest integer
          console.log(Math.ceil(4.6)) //------> 5
          console.log(Math.ceil(4.4)) //------> 5
          console.log(Math.ceil(-4.4)) //------> -4
          console.log(Math.ceil(-4.6)) //------> -4
        // Math.floor(x)	Returns x rounded down to its nearest integer
          console.log(Math.floor(4.9)) //------> 4
          console.log(Math.floor(-4.9)) //------> -5
          console.log(Math.floor(4.4)) //------> 4
        // Math.trunc(x)	Returns the integer part of x (new in ES6)
          console.log(Math.trunc(4.9)) //------> 4
          console.log(Math.trunc(-4.9)) //------> -4
          console.log(Math.trunc(4.4)) //------> 4


        // Math.fround()
        // The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.
          console.log("fround", Math.fround(4.056));

console.log(Math.sign(4));  //-----> return 1
console.log(Math.sign(-4));  //-----> return -1

console.log(Math.pow(5, 2));  //----> 5 * 5

console.log(Math.sqrt(25));

console.log(Math.abs(-4.5));  // returns positive value

console.log(Math.min(0, 100, -50,10));
console.log(Math.max(0, 100, -50,10));

console.log(Math.random()); // returns random number 0 to 1

console.log(Math.cbrt(125));

function myFunc(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

cont = document.querySelector(".container");

let myName = document.createElement("h1");
cont.appendChild(myName);
myName.innerHTML = "KALIRAJ";

let inp = document.createElement("input");
inp.setAttribute("id","nameColor");
cont.appendChild(inp);

let btn = document.createElement("button");
btn.setAttribute("onClick","changeColor()");
btn.setAttribute("type","submit");
cont.appendChild(btn);
btn.innerHTML = "click here"

function changeColor(){
  let inpValue = inp.value.trim();
  myName.style.color = `${inpValue}`;
}
