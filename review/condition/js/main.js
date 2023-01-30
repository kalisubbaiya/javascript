//                              Conditional Statements

//     1. Use if to specify a block of code to be executed, if a specified condition is true

//  syntax:
//  if (condition) {
        //  block of code to be executed if the condition is true
//  }

let time = new Date().getHours();

if (time < 10){
    console.log("Good morning");
}

//      2.Use else to specify a block of code to be executed, if the same condition is false

else{
    console.log("Not a morning");
}

//      3.Use else if to specify a new condition to test, if the first condition is false

if (time < 10){
    console.log("Good morning");
}
else if(time < 20){
    console.log("Good day");
}
else{
    console.log("Good evening");
}

//      Use switch to specify many alternative blocks of code to be executed

// syntax:
//                   switch(expression) {
//                      case x:
//                        // code block
//                        break;
//                      case y:
//                        // code block
//                        break;
//                      default:
//                        // code block
//                   }

switch (new Date().getDay()){
    case 1:
        day= "Today is monday";
        break;
    case 2:
        day= "Today is tuesday";
        break;
    case 3:
        day= "Today is wednesday";
        break;
    case 4:
        day= "Today is thursday";
        break;
    case 5:
        day= "Today is friday";
        break;
    default:
        day= "Weekend";
}

console.log(day);

var a="king";
switch (a){
	case "cool":
   		console.log("Dhoni");
    	break;
	case "hitman":
	    console.log("Rohit");
		break;
	case "king":
    	console.log("Kohli");
		break;
	case "classy":
		console.log("Rahul");
		break;
	default:
		console.log("Virat")
}

// let gender=prompt("Enter the gender");
// let marital=prompt("enter marital status 'yes' or 'no'");
// if (gender=="female"){
//     document.write("work only in urban areas");
// }
// else if (gender=="male"){
//     var age=parseInt(prompt("enter the age"));
//     if (age>=20 && age <40){
//         document.write("work anywhere");
//     }
//     else if (age>=40 && age<=60){
//         document.write("only work in urban areas");
//     }
//     else{
//         document.write("write");
//     }
// }

// let age1=parseInt(prompt("enter age 1"));
// let age2=parseInt(prompt("enter age 2"));
// let age3=parseInt(prompt("enter age 3"));

// if (age1 >= age2){
//     if (age1 >= age3){
//         console.log("person1 age is older");
//         console.log("person 3 is young");
//     }
//     else{
//         console.log("person3 age is older");
//         console.log("person2 is young");
//     }
// }
// else if (age2 >= age3){
//     console.log("person2 age is older");
//     console.log("person3 is young");
// }
// else{
//     console.log("person3 age is older");
//     console.log("person1 is young");
// }



// function charCheck(text){
// var input_char = text.charCodeAt(0);
         
// if (
//     (input_char >= 65 && input_char <= 90) ||
//     (input_char >= 97 && input_char <= 122)
//     ){
//           console.log(" Alphabet ");
//     }
//     else if (input_char >= 48 && input_char <= 57){
//         console.log(" Digit ");
//     }  
//     else {
//         console.log(" Special Character ");
//     }
// }
// charCheck('10')

var x=prompt("Type any character");
if ((x >='a' && x<='z') || (x>='A' && x<='Z')){
    console.log("this is an alphabet");
}else if (x>='0' && x<='9'){
    console.log("this is a digit");
}else{
    console.log("this is special character");
}