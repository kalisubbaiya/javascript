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

    for (i=0; i<=5; i++){
        console.log("hello",i);
    }

//  2. for in

//syntax
    // for (key in object) {
    //     // code block to be executed
    // }

    const person= {fname:"kali", mname:"raj", lname:"subbaiyakani"};

    for (let x in person){
        console.log(x,person[x]);
    }

//  3. for of

//syntax
    // for (variables of iterable) {
    //     // code block to be executed
    // }

    const person1= ['kali','raj','subbaiyakani'];

    for (let x in person1){
        console.log(x,person1[x]);
    }

    for (let x of person1){
        console.log(x);
    }

//  4.While
    //The while loop loops through a block of code as long as a specified condition is true.

//syntax

    // while (condition) {
    //     // code block to be executed
    // }

    let j=0;
    while (j<5){
        console.log("hi",j);
        j++;
    }

//  5.do while
    //The do while loop is a variant of the while loop. This loop will execute the code block once, 
    //before checking if the condition is true, then it will repeat the loop as long as the condition is true.

//syntax
    // do {
    //    code block to be executed
    // }
    // while (condition);

    let k=0;
    do {
        console.log("hello",k);
        k++;
    }
    while (k<5);