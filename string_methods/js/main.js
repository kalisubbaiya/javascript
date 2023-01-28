//----> STRING METHODS >----//

//--1.string length:
let myName='Kaliraj Subbaiyakani';
console.log('My Name is '+ myName);
console.log('String length is:'+ myName.length);

//--2.slice(): slice(start, end) (end not included).
console.log('remove first 8 char\\ '+myName.slice(8));
console.log('print first 9 char\\ '+myName.slice(0,9));
console.log('print last 12 char\\ '+myName.slice(-12));
console.log('print from last char\\ '+myName.slice(-8,-4));

//--3.substring(): substring(start, end) (end not included).
// Start and end values less than 0 are treated as 0 in substring().
console.log('remove first 8 char\\ '+myName.substring(8));
console.log('print first 9 char\\ '+myName.substring(0,9));

//--4.subsrt(): substr(start, length)
console.log('remove first 8 char\\ '+myName.substr(4,5));
console.log('print last 12 char\\ '+myName.substr(-12));

//--5.replace: replaces only the first match
function myFunction(){
    let myName1=myName.replace('Kaliraj','Kali'); //To replace case insensitive use /i (insensitive)
    document.write(myName1);                      //ex: /KALIRAJ/i
}
//--5.replace: replaces all using /g (global match)
let text='My favourite cricketer is Kohli.Kohli is the best player across three format.Kohli is called as KING of cricket.'
console.log(text.replace(/Kohli/g,'V Kohli'));

//--6.replace all:
                // replaceAll() is an ES2021 feature.
                // replaceAll() does not work in Internet Explorer.
console.log(text.replaceAll('Kohli','Virat Kohli'));

//--7.to uppercase:
console.log(myName.toUpperCase());

//--8.to lowercase:
console.log(myName.toLowerCase());

//--9.concat():
let job_title='Front-End Developer';
console.log(myName.concat(' ' , job_title));
console.log('Hello'.concat(' ','World'));

//--10.trim()
