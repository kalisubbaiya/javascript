//------array methods

//--1.concat()
let array1=[1,2,3];
let array2=[4,5];
let array3=array1.concat(array2);
document.write("concat is "+array3+"<br>");

//--2.constructor

//--3.entries
let array4=[1,2,3,4];
let iterator1 = array1.entries();
document.write("entries "+iterator1.next().value);
document.write("entries "+iterator1.next().value);
document.write("<br>");

//--4.filter
let filt=[12,22,18,7,60];
const result=filt.filter(filt=>filt>18);
document.write("filter is "+result);
document.write("<br>");

//--5.find
let find1=[12,22,18,7,60];
const find_res=find1.find(find1=>find1>18);
document.write("find is "+find_res);
document.write("<br>");

//--6.findIndex
const find_res1=find1.findIndex(find1=>find1>18);
document.write("findIndex is "+find_res1);
document.write("<br>");

//--7.findLastIndex
const find_res2=find1.findLastIndex(find1=>find1>18);
document.write("findLastIndex is "+find_res2);
document.write("<br>");

//--8.IndexOf
const friuts=["apple","mango","orange","banana"];
document.write("index of banana is "+friuts.indexOf("banana"));
document.write("<br>");

//--9.lastIndexOf
document.write("lastIndexOf banana is "+friuts.lastIndexOf("banana"));
document.write("<br>");

//--10.map
const array5=[12,22,33,44,55];
const map1 = array5.map(x => x > 40);
document.write("map1 is "+map1);
document.write("<br>");
const map2 = array5.map(x => x * 2);
document.write("map2 is "+map2);
document.write("<br>");

//--11.pop
document.write("pop is "+array5.pop());
document.write("<br>");
document.write("after pop is "+array5);
document.write("<br>");

//--12.push
document.write("after push  array5 length is "+array5.push(66));
document.write("<br>");
document.write("after push is "+array5);
document.write("<br>");

//--13.reduce
const array6=[1,2,3,4,5]
const reduce1 = array6.reduce((x, y) => x*y);
document.write("after reduce is "+reduce1);
document.write("<br>");

//--14.reverse
document.write("after reverse "+array6.reverse());
document.write("<br>");

//--15.shift
const array7=[11,22,33,44,55,66,77]
document.write("shift first "+array7.shift());
document.write("<br>");
document.write("after shift "+array7);
document.write("<br>");

//--16.slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
document.write("after slice -"+animals.slice(2));
document.write("<br>");
document.write("after slice -"+animals.slice(2,4));
document.write("<br>");

//--17.toLocalString

//--18.toString
document.write("after tostring -"+array7.toString());
document.write("<br>");

//--19.unshift
document.write("after unshift -"+array7.unshift("hello"));
document.write("<br>");
document.write("after unshift -"+array7)


