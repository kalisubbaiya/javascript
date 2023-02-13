//                              LOOP
//      Loops can execute a block of code a number of times.

//      Different Kinds of Loops
//  1.for - loops through a block of code a number of times
//  2.for/in - loops through the properties of an object
//  3.for/of - loops through the values of an iterable object
//  4.while - loops through a block of code while a specified condition is true
//  5.do/while - also loops through a block of code while a specified condition is true


//  1. for loop

//syntax
    // for (expression 1; expression 2; expression 3) {
    //     // code block to be executed
    // }

    //--> exp1  => Initialization   (one time execution)
    //--> exp2  => Condition        (If you omit expression 2, you must provide a break inside the loop)
    //--> exp3  => Increament/ decreament

    // for (i=0; i<=5; i++){
    //     console.log("hello",i);
    // }

//  2. for in

//syntax
    // for (key in object) {
    //     // code block to be executed
    // }

    // const person= {fname:"kali", mname:"raj", lname:"subbaiyakani"};

    // for (let x in person){
    //     console.log(x,person[x]);
    // }

//  3. for of

//syntax
    // for (variables of iterable) {
    //     // code block to be executed
    // }

    // const person1= ['kali','raj','subbaiyakani'];

    // for (let x in person1){
    //     console.log(x,person1[x]);
    // }

    // for (let x of person1){
    //     console.log(x);
    // }

//  4.While
    //The while loop loops through a block of code as long as a specified condition is true.

//syntax

    // while (condition) {
    //     // code block to be executed
    // }

    // let j=0;
    // while (j<5){
    //     console.log("hi",j);
    //     j++;
    // }

//  5.do while
    //The do while loop is a variant of the while loop. This loop will execute the code block once, 
    //before checking if the condition is true, then it will repeat the loop as long as the condition is true.

//syntax
    // do {
    //    code block to be executed
    // }
    // while (condition);

    // let k=0;
    // do {
    //     console.log("hello",k);
    //     k++;
    // }
    // while (k<5);

    // let n=parseInt(prompt("fibonacci numbers less than"));
    // let i=0,j=1,k;
    // while(i<n){
    //     console.log(i);
    //     k=i+j;
    //     i=j;
    //     j=k;   
    // }

    // let n=parseInt(prompt("fibonacci number less than"));
    // let i=0, j=1, k;
    // while (i<n){
    //     console.log(i);
    //     k=i+j;
    //     i=j;
    //     j=k;
    // }

    // let num=parseInt(prompt("enter a number"));
    // let factorial=1;

    // for (i=0; i<num; num--){
    //     factorial*=num;
    // }
    // console.log(factorial);

    // let num=parseInt(prompt("enter a number"));
    // let len=parseInt(prompt("multiplication table length"));

    // let mult;
    // let i=1;
    // do{
    //     mult=num*i;
    //     console.log(i + "x" + num + "=" + mult);
    //     i++; 
    // }
    // while (i<=len)

    // var n = parseInt(prompt("Enter the length of a number"));
    // var num= parseInt(prompt("enter a number for check armstrong or not"));

    // let a=num, b, c=0;

    // for (i=0; a!=0; i++){
    //     b= a % 10;
    //     a= (a-b)/10;
    //     b=b**n;
    //     c=c+b;
    // }
    // if (c==num){
    //     console.log("given number is armstrong");
    // }
    // else{
    //     console.log("given number is not an armstrong");
    // }

    // let num=parseInt(prompt("Enter a number"));
    // let prime1=true;
    // if(num==1){
    //     console.log("1 is neither prime nor composite number.");
    // }
    // else if(num>1){
    //     for(i=2;i<num;i++){
    //         if(num%i==0){
    //             prime1=false;
    //             break;
    //         }
    //     }
    //     if(prime1){
    //         console.log("given number is a prime number");
    //     }
    //     else{
    //         console.log("given number is not a prime number");
    //     }
    // }

//  function reverse(a){
//     let b,c=0;
//     for (i=1; a!=0; i++){
//         b=a%10;
//         a=(a-b)/10;
//         c=(c*10)+b;
//     }
//     console.log("reverse of given number is " +c);
// }
// reverse(213);/


// var num=prompt("enter the value");
// var a, b=num, num2=0;
// for(i=0;i<num.length;i++){
//     a=b%10;
//     b=(b-a)/10;
//     num2=num2*10+a;
// }
// if(num==num2){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// var num=prompt("enter the value");
// let odd=0, even=0;

// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         even+=parseInt(num[i]);
//     }
//     else{
//         odd+=parseInt(num[i]);
//     }
// }
// console.log(" sum of even number in given number is " + even);
// console.log(" sum of odd number in given number is " + odd);

// function reverse(a){
//     let b,c=0;
//     for (i=1; a!=0; i++){
//         b=a%10;
//         a=(a-b)/10;
//         c=(c*10)+b;
//         switch (b){
//             case 0: return 'Zero';
//             case 1: return 'One';
//             case 2: return 'Two';
//             case 3: return 'Three';
//             case 4: return 'Four';
//         }
//         console.log(c);
//     }
    
    
// }
// reverse(213);


// var num = parseInt(prompt("enter a number to reverse"));

// for (var i = num.toString().length; i>0; i--) {
//     var digit = num % 10;
//     console.log(digitToWord(digit));
//     num = (num - digit) /10
// }

// function digitToWord(digit) {
//     switch (digit){
//         case 0: return "zero";
//         case 1: return "one";
//         case 2: return "two";
//         case 3: return "three";
//         case 4: return "four";
//         case 5: return "five";
//         case 6: return "six";
//         case 7: return "seven";
//         case 8: return "eight";
//         case 9: return "nine";
//     }
// }


// var n=parseInt(prompt("enter square value"));
// for(var i=0; i<n; i++){
//     for(var j=0; j<n; j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }


// var str="";
// var n=parseInt(prompt("Enter square number"));
// for(let i = 1; i <= n; i++) { 
//     for(let j = 1; j <= n; j++) { 
//         if(i === 1 || i === n  || j === 1 || j === n){
//             str +="* ";
//         }
//         else {
//             str+="  ";
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// let n = parseInt(prompt("enter n times"));
// let str = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         str += "*";
//     }
//     str += "<br>";
// }
// document.write(`<pre>${str}</pre>`);

// let n = parseInt(prompt("enter n times"));
// let num=0;
// for (let i=1; i<=n; i++){
//     for (let j=0; j<i; j++){
//         num+=1;
//     }
//     document.write("<br>")
    
// }
// document.write(num)

// let i,j;
// for(i=1;i<=5;i++){
//     let num=1;
//     for(j=1;j<=i;j++){
//         document.write(num);
//         num++;
//     }
//     document.write("<br>")
// }


// let n= parseInt(prompt("enter n times"))
// for(let i = 0; i < n; i++){
//     let output = 0;
//     for(let j = 0; j < i + 1; j++){
//       output += 1;
//     document.write(output);
//     }
//     document.write("<br>");
// }


// class Trainee{
//     constructor(name,age,mobil,dob,rating) {
//             this.name=name;
//             this.age=age;
//             this.mobil=mobil;
//             this.dob=dob;
//             this.rating=rating;
//     }
//     identification(value){
//         this.rating=value;
//     }
// }
// // var details=[]; 
// // for(let  i=0; i<3; i++){
// //     var traineeNew=new Trainee(
// //         prompt("name"),parseInt(prompt("age")),parseInt(prompt("mobil")),parseInt(prompt("dob")));
// //     details.push(traineeNew)
// //     traineeNew. identification()
// // }
//     var trainee1=new Trainee("siva","19","9361400856","02-06-2003","5");
//     var trainee2=new Trainee("chitra","20","934567756","10-10-2001","4");
//     var trainee3=new Trainee("aravind","20","9781400856","10-06-2000","5");
//     var trainee4=new Trainee("vicky","19","9761400856","11-10-2003","4");
//     var trainee5=new Trainee("Ram","21","958400856","02-10-2001","3");

//     var details=[]; 
//     details.push(trainee1);
//     details.push(trainee2);
//     details.push(trainee3);
//     details.push(trainee4);
//     details.push(trainee5);

//     console.log(details);


//     var cont=document.getElementById("table-body");

// details.forEach(function(value,index){

//     var tableRow=document.createElement("tr");
//     cont.appendChild(tableRow);

//     var car1=document.createElement("td");
//     car1.innerText=index+1;
//     cont.appendChild(car1);
    
//     var div2=document.createElement("td");
//     div2.innerHTML=value.name;
//     cont.appendChild(div2);

//     var div3=document.createElement("td");
//     div3.innerHTML=value.age;
//     cont.appendChild(div3);

//     var div4=document.createElement("td");
//     div4.innerHTML=value.mobil;
//     cont.appendChild(div4);
    
//     var div5=document.createElement("td");
//     div5.innerHTML=value.dob;
//     cont.appendChild(div5);

//     var div6=document.createElement("td");
//     div6.innerHTML=value.rating;
//     cont.appendChild(div6);

//     var udating=document.createElement("td");
//     cont.appendChild(udating) ;

//     var changInput=document.createElement("input");
//     changInput.setAttribute("id","uptade");
//     changInput.setAttribute("tupe","number");
//     udating.appendChild(changInput);

//     var changebut=document.createElement("button");
//     changebut.innerText="change";
//     changebut.setAttribute("onclick","changeradting(this)")
//     udating.appendChild(changebut);


// });



// class Trainee{
//     constructor(name,idnumber,mobil,dob,qualification,skill) {
//             this.name=name;
//             this.idnumber=idnumber;
//             this.mobil=mobil;
//             this.dob=dob;
//             this.qualification=qualification;
//             this.skill=skill;
//     }
//     get getDetails(){
//         document.write(`the name of the student${this.name} the trainee dob${ this.dob} the trainee id number${this.idnumber} the trrainee qualification ${ this.qualification} the trainee skill${this.skill}`)
//     }
//     set addDetails(details){
//         this.skill.push(details)
//         console.log(this);
//     }
// }

//     var trainee1=new Trainee("siva","FED00102","9361400856","02-06-2003","B.sc",["html","css","javascript","react"]);
//     var trainee2=new Trainee("chitra","FED00102","934567756","10-10-2001","B.sc",["html","css","javascript","react"]);
//     var trainee3=new Trainee("vicky","FED00102","9761400856","11-10-2003","B.sc",["html","css","javascript","react"]);
//     console.log(trainee1,trainee2,trainee3);

//     var details=[]; 

//     details.push(trainee1);
//     details.push(trainee2);
//     details.push(trainee3);
   
    
//     console.log(details);

//     trainee1.addDetails="bootstrap";