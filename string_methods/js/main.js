//----> STRING METHODS >----//

//--1.charAt()      returns the character at a specified index (position) in a string.
//     syntax---->    string.charAt(index) (default index = 0)
let word = "HELLO WORLD"
console.log('charAt is ' + word.charAt(6));

//--2.charCodeAt() A - Z => 65 - 90;  a-z => 97-122
//          charCodeAt() returns a number between 0 and 65535.
// index unmatched----> returns NaN.

console.log('charCodeAt is ' + word.charCodeAt(6));

//--3.codePointAt() 
// index unmatched----> returns undefined.
console.log('codePointAt is ' + word.codePointAt(6));

//--4.concat()
let word1 = "WELCOME";
console.log(word.concat(" you"," ", "are", " ", word1));

//--5.constructor

//      The constructor property returns the function that created the String prototype.
//      For JavaScript strings the constructor returns:
//      function String() { [native code] }
console.log(word.constructor);

//--6.endsWith()   (same as startWith)
console.log(word.endsWith('WORLD'));  // returns true
console.log(word.endsWith('world'));  // returns false
console.log(word.endsWith('W', 7));   // returns true  7 --> length

//--7.fromCharCode()    convert Unicode values to characters:
console.log(String.fromCharCode(72, 69, 76, 76, 79));  // returns HELLO

//--8.includes()    returns true if a string contains a specified string.
console.log(word1.includes('WEL'));     // true
console.log(word1.includes('WEL', 0));  // true

//--9.indexOf()
console.log(word.indexOf("L"));
console.log(word.indexOf("L", 4));
console.log(word.indexOf("2"));  // returns -1

//--10.lastIndexOf()
console.log(word.lastIndexOf("L"));
console.log(word.lastIndexOf("L", 4));
console.log(word.lastIndexOf("2"));  // returns -1

//--11.localeCompare()  compares two strings in the current locale.
        // syntax : string.localeCompare(compareString)
let firstName = "kali";
let lastName = "raj";
console.log(firstName.localeCompare(lastName)); // returns -1 (default)
console.log(lastName.localeCompare(firstName)); // returns 1
console.log(firstName.localeCompare("kali")); // returns 0

//--12.match()

// The match() method matches a string against a regular expression **
// The match() method returns an array with the matches.
// The match() method returns null if no match is found.

let text2 = "The rain in SPAIN stays mainly in the plain";
let [result] = text2.match("ain") ;
console.log(result);
[result,a] = text2.match(/ain/) ;
console.log(result,a);
[a,b,c,d] = text2.match(/ain/g) ;
console.log(a,b,c,d);
[a,b,c,d,e] = text2.match(/ain/gi) ;
console.log(a,b,c,d,e);
let text3 = text2.match("hello")
console.log(text3);                     // returns null

//--13.prototype

class Employee{
    constructor(name, jobtitle, born){
        name = name;
        jobtitle = jobtitle;
        born = born;
    }    
}
Employee.prototype.salary = 20000;

const res = new Employee("kaliraj", "Developer", 1996);
console.log(res);
console.log(res.salary);

//--14.repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

console.log(firstName.repeat(2));

//--15.replace() replaces only the first match
let myName='Kaliraj Subbaiyakani';
let demo = document.getElementById("demo");
demo.innerHTML = myName;
function myFunction(){
    let myName1=myName.replace('Kaliraj Subbaiyakani','Kali Subbaiya'); //To replace case insensitive use /i (insensitive)
    demo.innerHTML = myName1;                      //ex: /KALIRAJ/i
}
//--15.replace: replaces all using /g (global match)
let text='My favourite cricketer is Kohli.Kohli is the best player across three format.Kohli is called as KING of cricket.'
console.log(text.replace(/Kohli/g,'V Kohli'));

//--16.search () // returns index of first match, defualt -1
console.log(text.search("Kohli"));

//--17.slice(): slice(start, end) (end not included).
console.log('remove first 8 char\\ '+myName.slice(8));
console.log('print first 9 char\\ '+myName.slice(0,9));
console.log('print last 12 char\\ '+myName.slice(-12));
console.log('print from last char\\ '+myName.slice(-8,-4));

//--18.split()  return new array
let newArr = myName.split("")
console.log(newArr);

newArr = myName.split(" ")
console.log(newArr);

newArr = myName.split("a")
console.log(newArr);

//--19.startsWidth()
console.log(word.startsWith('HELLO'));  // returns true
console.log(word.startsWith('World'));  // returns false
console.log(word.startsWith('W', 6));   // returns true  6 th index


//--20.substring(): substring(start, end) (end not included).
// Start and end values less than 0 are treated as 0 in substring().
console.log('remove first 8 char\\ '+myName.substring(8));
console.log('print first 9 char\\ '+myName.substring(0,9));

//--21.subsrt(): substr(start, length)
console.log('remove first 8 char\\ '+myName.substr(4,5));
console.log('print last 12 char\\ '+myName.substr(-12));

//--22.replace all:
                // replaceAll() is an ES2021 feature.
                // replaceAll() does not work in Internet Explorer.
console.log(text.replaceAll('Kohli','Virat Kohli'));

//--23.toLocalLowerCase()
// The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
// The locale is based on the language settings of the browser.
let word2 = word.toLocaleLowerCase();
console.log(word2);

//--24.toLocalUpperCase()
console.log(word2.toLocaleUpperCase());

//--25.toString()
console.log(word.toString());


//--26.trim()
let word3 = "  Kaliraj Subbaiyakani   ";
console.log(word3.trim());


//--27.to uppercase:
console.log(myName.toUpperCase());

//--28.to lowercase:
console.log(myName.toLowerCase());


//--29.trimEnd()
console.log(word3.trimEnd());

//--29.trimStart()
console.log(word3.trimStart());

//--30.valueOf()   returns primitive value of a string
// The valueOf() method is the default method for JavaScript strings.
console.log(word.valueOf());


function splitString(input){
    let split = input.match(/[0-9]/g)
    console.log(split.join(""));
}
splitString("kaliraj28");

function splitString1(input){
    let split = input.match(/[^a-zA-Z]/g)
    console.log(split.join(""));
}
splitString1("kaliraj28/.,");

let details = "My name is kaliraj and my favourite colour is green";
details=details.match(/my/gi);
console.log(details.length);

let details1 = "My name is kaliraj and my favourite colour is green my My MY";
let details2 = details1.toLowerCase().split("my");
console.log(details2.length-1);

console.log(details1);
let details3 = details1.toLowerCase().replace("my ","");
console.log(details3);