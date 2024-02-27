//Array Methods
//Arraylength()
const games= ["Need for Speed", "PUBG", "CS","FreeFire","8 Ball Pool"];
let size = games.length;
//Array ToString()
document.getElementById("demo").innerHTML = games.toString();
//Array at()
let game = games.at(2);
//Aray Join()
document.getElementById("demo").innerHTML = games.join("@");
//Array Pop()
games.pop(1);
//Array push()
games.push("valorant");
//Array Shift()
games.shift();
//Array shift()
games.unshift("CS")
//Array Delete()
games.delete(2)
//Merging Arrays(Concatenation)
const Firstname = ["Hira", "ayesha"];
const Lastname = ["Ayub", "Shah", "khan"];
const myChildren = Firstname.concat(Lastname);
Firstname.concat("Sadia");
//Copy within()
games.copyWithin(2,0);
//Array Splice()
games.splice(2, 2, "SE", "Kiwi");
//Array Splice to Remove elements
games.splice(0,1);




//String MMethods
//String Length
let text = "MycountryisPakistan";
let length = text.length;
//String CharAt
let name = "Saqlain Khan";
let char = text.charAt(0);
//String At
let letter = name[2];
//String Split
text.split("/");
//String Replace
let text3 = "Please visit Comsats and Comsats!";
let newText = text3.replace(/Comsats/g, "Attock");
//ReplaceAll
text = text.replaceAll("birds","dogs");
//Repeat
let word = "Hello Pkistan!";
let result = word.repeat(2);
//PadEnd
let numb = 5;
let sentence = numb.toString();
let padded = sentence.padEnd(4,"0");
//UpperCase
let text1 = "Hello World!";
let text7 = text1.toUpperCase();
//LowerCase
let text6 = text1.toLowerCase();
//String Substr
let str = "My name is nimra";
let part = str.substr(7, 6);






