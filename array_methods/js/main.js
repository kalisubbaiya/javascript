//------array methods

//--1.concat()
let array1=[1,2,3];
let array2=[4,5];
let array3=array1.concat(array2);
document.write("concat is "+array3+"<br>");

//--2.copyWithin()
        //Syntax:
        // array.copyWithin(target, start, end)
const fruits = ["Banana", "Orange", "Apple", "Mango","Papaya"];
console.log(fruits.copyWithin(2,0,2));

//--3.entries   // returns key/value pairs
let iterator1 = fruits.entries();

for (x of iterator1){
    console.log(x);
}

//--4.every()   // returns Boolean
let array4 = [12, 22, 09, 26, 28];
let res = array4.every((item, index)=>{
    return item > 18
});
console.log(res);

//--5.fill()
const fills = fruits.fill("Mango");
console.log(fills);

//--6.filter
let filt=[12,22,18,7,60];
const result=filt.filter((filt) => filt > 18);
console.log(result);

//--7.find
let find1=[12,22,18,7,60];
const find_res=find1.find(find1=>find1>18);
document.write("find is "+find_res);
document.write("<br>");

//--8.findIndex
const find_res1=find1.findIndex(find1=>find1>18);
document.write("findIndex is "+find_res1);
document.write("<br>");

//--9.findLastIndex
const find_res2=find1.findLastIndex(find1=>find1>18);
document.write("findLastIndex is "+find_res2);
document.write("<br>");

//--10.forEach()
    //Syntax:
    // array.forEach(function(currentValue, index, arr), thisValue)
let fruits1 = ["Mango", "Banana", "Apple", "Orange", "Papaya"]
var resEach = fruits1.forEach((e, index, arr)=>{
    console.log(e);
    console.log(index);
    console.log(arr);
})

//--11.from()   returns an array from any iterable object.
let text1 = "kaliraj";
console.log(Array.from(text1));

//--12.includes()   returns Boolean
console.log(fruits1.includes("Banana"));
console.log(fruits1.includes("Banana", 2)); // value , index


//--13.IndexOf
const friuts2=["apple","banana", "mango","orange","banana"];
console.log(friuts2.indexOf("banana"));

//--14.isArray()    returns Boolean
console.log(Array.isArray(friuts2));    //returns true
console.log(Array.isArray(text1));      //returns false

//--15.join()   returns a new string from an array
console.log(friuts2.join());
console.log(friuts2.join(" "));
console.log(friuts2.join(" and "));

//--16.keys()       returns an Array Iterator object with the keys of an array.
const keys = friuts2.keys();
for (let x of keys){
    console.log(x);
}


//--17.lastIndexOf
document.write("lastIndexOf banana is "+friuts2.lastIndexOf("banana"));
document.write("<br>");


//--18.map
const array5=[12,22,33,44,55];
const map1 = array5.map(x => x > 40);
document.write("map1 is "+map1);
document.write("<br>");
const map2 = array5.map(x => x * 2);
document.write("map2 is "+map2);
document.write("<br>");

//--19.pop
document.write("pop is "+array5.pop());
document.write("<br>");
document.write("after pop is "+array5);
document.write("<br>");

//--20.push
document.write("after push  array5 length is "+array5.push(66));
document.write("<br>");
document.write("after push is "+array5);
document.write("<br>");

//--21.reduce
const array6=[1,2,3,4,5]
const reduce1 = array6.reduce((x, y) => x*y);
document.write("after reduce is "+reduce1);
document.write("<br>");

//--22.reverse
document.write("after reverse "+array6.reverse());
document.write("<br>");

//--23.shift
const array7=[11,22,33,44,55,66,77]
document.write("shift first "+array7.shift());
document.write("<br>");
document.write("after shift "+array7);
document.write("<br>");

//--24.slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
document.write("after slice -"+animals.slice(2));
document.write("<br>");
document.write("after slice -"+animals.slice(2,4));
document.write("<br>");

//--25.some()
let somes = [12,18,22,07,95];
let res1 = somes.some((item)=> item > 18)
console.log(res1);

//--26.sort()
let words = ["banana", "orange", "apple", "jackfruit", "cherry"];
console.log(words.sort());

//--27.splice()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon"); // add an value
console.log(fruits2);

console.log(fruits2.splice(2)); // remove position 3 (length)
console.log(fruits3.splice(2, 2)); // remove position 3 and 4 (length)


//--28.toString
console.log("after tostring - "+array7.toString());

//--29.unshift
document.write("after unshift -"+array7.unshift("hello"));
document.write("<br>");
document.write("after unshift -"+array7)

//--30.valueOf()
console.log(array7.valueOf());






//var a=[2, 3, 4, 5, 6, 7, 10, 12]  ==>  [2, 4, 6, 10, 12]
var a=[2, 3, 4, 5, 6, 7, 10, 12];
var a1=a.filter((item)=>{
    return item%2==0
})
console.log(a1);

//a=['a','f','g','h','l','k']===>[1,6,7,8,12,11]
var b=['a','f','g','h','l','k'];
var b1 = b.map((item)=>{
    return item.charCodeAt()-96
})
console.log(b1);

// a=[2,8,5,9,14,66,3,22,1]
// Get the two digit numbers only and in order for array?
// a=[14,22,66];
var c = [2,8,5,9,14,66,3,22,1];
var c1 = c.filter((item)=>{
    return item > 9 && item <100
})
console.log(c1.sort());

//let a=[11,12,21,22,23,33,34,40,44]=>[11,22,33,44]
var d = [11,12,21,22,23,33,34,40,44];
var d1 = d.filter((item)=>{
    return (
        item == item.toString().split("").reverse().join("")
    )
})
console.log(d1);

var [a, b, c, d, e, f, g] = [0, 1, 2, 3, 10, 20, 30];
[a, b, c, d, e, f, g] = [a, b, e, c, f, d, g]
console.log([a, b, c, d, e, f, g]);


let arr = [0, 1, 2, 3, 10, 20, 30];
console.log(arr.sort());

var a = [5, 10, "ram", 20, "bala", 40, "anand"];
var b = a.filter((e)=>{
    return typeof(e) === "string"
} );
console.log(b);

var a = [5, 10, "ram", 20, "bala", 40, "anand"];
a.forEach((e, index) =>{
    if (typeof e === "number"){
        a.splice(index, 1)
    }
})
console.log(a);


var input =  [12, 10, 15, -11, -14, 13, 16];
for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
        if (input[i] > input[j]) {
            var temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
    }
}
console.log(input);

const countRepeats = (array) => {
    let count = {};
    array.forEach(string => {
      if (count[string]) {
        count[string]++;
      } else {
        count[string] = 1;
      }
    })
    return count;
  }
  
  console.log(countRepeats(['a', 'b', 'a', 'c', 'a', 'a', 'b']))

  

// var array = [1, 2, 3, 4, 5, 6, 7];
// var output = [];

// var a = Math.ceil(Math.random()*array.length)

// for (i=0; i<array.length; i++){
//     output[a] = array[i];
// }

// console.log(output);


function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// const array =[1, 2, 3, 4, 5, 6, 7, 8].sort(()=> Math.random())
// console.log(array);




// const uniqueArray = [...new Set(array)];

// console.log(uniqueArray);

const array = [6, 1, 2, 2, 3, 4, 2, 3, 5];
const uniqueArray = array.filter((value, index, currentArray) =>{
    return currentArray.indexOf(value) === index
})
console.log(uniqueArray);



function changeColor(){
    var red = Math.ceil(Math.random()*256);
    var green = Math.ceil(Math.random()*256);
    var blue = Math.ceil(Math.random()*256);
    document.body.style.background=`rgb(${red}, ${green}, ${blue})`
}

// var num = prompt("text here");

function palindromeCheck( num ){
    var num1 = num.split('').reverse().join("");
    if (num === num1){
        console.log(num + " is palindrome");
    }
    else{
        console.log(num + " is not palindrome");

    }
}
palindromeCheck("kali");


let date1 = new Date('Mar 1, 2023 14:00:00');
let date2 = new Date('Mar 9, 2023 12:00:00');
let differenceInTime = Math.abs(date2.getTime() - date1.getTime());
let differenceInHours = differenceInTime / (1000*60*60);
var differ=Math.round(differenceInHours);

console.log(differ + " Hours");

var strings = "my name is kaliraj. my age is 26"

var removeFirst = strings.toLowerCase().replace("my ", "")
console.log(removeFirst);

var duplicateArray = [1, 2, 1, 2, 3, 4, 1, 2, 7];

var removedDuplicate = duplicateArray.filter((val, index, currArray)=>{
    return currArray.indexOf(val) === index;
})
console.log(removedDuplicate);

// var num = prompt("enter a number to reverse");

// for (var i = num.length; i>0; i--) {
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


// var num=parseInt(prompt("enter number"));
// var a,b,c;


// for(i=0;num!==0;i++){
//   a=num%10;
//   c=a;
//   b=num-a;
//   num=b/10;
//   if(c==0){
//      document.write("zero")
//   }
//   else if(c==1){
//     document.write("one")
//   }
//   else if(c==2){
//     document.write("two")
//   }
//   else if(c==3){
//     document.write("three")
//   }
//   else if(c==4){
//     document.write("four")
//   }
//   else if(c==5){
//     document.write("five")
//   }
//   else if(c==6){
//     document.write("six")
//   }
//   else if(c==7){
//     document.write("seven")
// }
// else if(c==8){
//   document.write("eight")
// }
// else if(c==9){
//   document.write("nine")
// }
 
// }

// let durations = [10, 20, 10, 40, 50, 60, 70];
// let arry1 = [];

// let durationsNew = durations.reduce((a, b) => {
//   arry1.push(a + b);
//   return arry1;
// });

// console.log(durationsNew);


var input = [10, 20, 10, 40, 50, 60, 70];
var output = [];

for (i=0; input.length; i++){
  if (input[i] + input[i+1] === 50){
    console.log(i, i+1);
  }
}