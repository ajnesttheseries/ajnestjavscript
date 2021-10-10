//JavaScript by Aj.NesT the Series 
//Ex11: JavaScript Strings
//Ex11.1 Strings Double Quotes and Single Quotes
var heroName1 = "Iron Man";
var heroName2 = 'Captain America';
document.getElementById("ex11-1").innerHTML = "I like " +
heroName1 + ' and ' + heroName2 + "."; 

//Ex11.2 Strings using Backslash
var question = 'What\'s your name?';
var answer = "You can call me \"Aj.NesT\", and you?";
let response = "JavaScript \
Manpower.";
document.getElementById("ex11-2").innerHTML = question + "<br>" + answer + "<br>" + response; 

//Ex11.3 Strings Methods
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let eng_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let thai_alphabet = "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ"

//(1) Length
document.getElementById("ex11-3-1").innerHTML = "lorem = " + lorem.length + "<br>" + "eng_alphabet = " + eng_alphabet.length + "<br>" + "thai_alphabet = " + thai_alphabet.length;

//(2) Position IndexOf() start 0,1,2,...,n
document.getElementById("ex11-3-2").innerHTML = "\"Ipsum\" position = " + lorem.indexOf("Ipsum") + "<br>" + "\"N\" position = " + eng_alphabet.indexOf("N") + "<br>" + "\"ช\" position = " + thai_alphabet.indexOf("ช");

//(3) match(/txt/g) g is global
document.getElementById("ex11-3-3").innerHTML = "\"Ipsum\" match = " + lorem.match(/Ipsum/g);

//(4) replace("old text", "new text") or /old text/g แทนที่ทั้งหมด
document.getElementById("ex11-3-4").innerHTML = lorem.replace("Ipsum", "แทนที่แล้ว");
document.getElementById("ex11-3-5").innerHTML = lorem.replace(/Ipsum/g, "แทนที่แล้ว");

//(5) toUpperCase() 
document.getElementById("ex11-3-6").innerHTML = lorem.toUpperCase();
//(6) toLowerCase() 
document.getElementById("ex11-3-7").innerHTML = lorem.toLowerCase();