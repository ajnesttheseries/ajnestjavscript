//JavaScript by Aj.NesT the Series 
//Ex14: JavaScript Loops
//Ex14.1: For Loop
function roundFor(){
    let n = document.getElementById("roundFor").value;
    for(let i = 1; i <= n; i++){
        document.getElementById("ex14-1").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
    }
}

//Ex14.2: For-in Loop
function objForIn(){
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let locationValue = document.getElementById("location").value;
    var obj = {name: nameValue, age: ageValue, location: locationValue};
    for(key in obj){
        let value = obj[key];
        document.getElementById("ex14-2").innerHTML += key + ' : ' + value + '<br>';
    }
}

//Ex14.3: For-of Loop
function objForOf(){
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let data3 = document.getElementById("data3").value;
    var obj = [data1, data2, data3];
    for(item of obj){
        document.getElementById("ex14-3").innerHTML += item + '<br>';
    }
}

//Ex14.4: While Loop ~For Loop
function roundWhile(){
    let n = document.getElementById("roundWhile").value;
    let i = 1;      //for(let i = 1; i <= n; i++)
    while(i <= n){  
        document.getElementById("ex14-4").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
        i++;
    }
}

//Ex14.5: While Loop
function checkWhile(){
    let n = document.getElementById("inputNumber").value;
    let i;     
    while((n<2)||(n>12)) 
    {
        document.getElementById("checkWhile").innerHTML = "Please Enter number 2-12";
        break;
    }
    if(n>= 2 && n<=12){
        let result = 1;
        for(i=1; i<=12; i++)
        {   
            document.getElementById("runFor").innerHTML += n + " x " + i + " = " + n*i + "<br>";
        }
    }
}

//Ex14.6: Do While Loop
function testDoWhile(){
    let i = document.getElementById("inputDoNumber").value;
    let text = "";

    do
    {
        text += "<br> The round number is " + i;
        i++;
    }while(i < 20); //Test i = 20

    document.getElementById("ex14-6").innerHTML = text;
}

//Ex14.7: Nested Loops
function testNestedLoops(){
    let loop1 = document.getElementById("loop1").value;
    let loop2 = document.getElementById("loop2").value;
    let text = "";
    let i, j;
    for (i = 0; i < loop1; i++) 
    {
        for (j = 0; j < loop2; j++) 
        {
            text += "The number is i = " + i + " and j = " + j + "<br>";
        }
    }
    document.getElementById("ex14-7").innerHTML = text;
    }

//Ex14.8: Break Statement
function testBreak(){
    let n = document.getElementById("inputBreakNumber").value;
    for(let i = 0; i < 10; i++){
        if(i == n){
            break;
        }
        document.getElementById("ex14-8").innerHTML += "The for number is "+ i + "<br>";
    }
}

//Ex14.9: Continue Statement
function testContinue(){
    let n = document.getElementById("inputContinueNumber").value;
    for(let i = 0; i < 10; i++){
        if(i == n){
            continue;
        }
        document.getElementById("ex14-9").innerHTML += "The for number is "+ i + "<br>";
    }
}