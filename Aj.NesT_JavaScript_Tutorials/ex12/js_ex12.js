//JavaScript by Aj.NesT the Series 
//Ex12: JavaScript Maths
//Ex12.1 Math.PI and Math.pow()
var radius = 8;
document.getElementById("ex12-1").innerHTML = "radius = 8 <br> PI = " + Math.PI + "<br> Circle Area = " + Math.PI * Math.pow(radius,2); //PI*r*r
function circleArea() {
    var radius = document.getElementById('input').value;
    var result = Math.PI * Math.pow(radius,2);
    if (!isNaN(result)) {
        document.getElementById('result').value = result;
    }
}

//Ex12.2 Math.sqrt(), Math.round(), Math.ceil(), and Math.floor()
function mathFunctions() {
    var number = document.getElementById('number_input').value;
    var sqrt_result = Math.sqrt(number);
    if (!isNaN(sqrt_result)) {
        document.getElementById('sqrt_output').value = sqrt_result;
    }
    var round_result = Math.round(sqrt_result);
    if (!isNaN(round_result)) {
        document.getElementById('round_output').value = round_result;
    }
    var ceil_result = Math.ceil(sqrt_result);
    if (!isNaN(ceil_result)) {
        document.getElementById('ceil_output').value = ceil_result;
    }
    var floor_result = Math.floor(sqrt_result);
    if (!isNaN(floor_result)) {
        document.getElementById('floor_output').value = floor_result;
    }
}

//Ex12.3 Math.abs(), Math.sin(), Math.cos(), Math.min(), and Math.max()
document.getElementById("ex12-3-1").innerHTML = Math.abs(-8.8);
document.getElementById("ex12-3-2").innerHTML = Math.sin(90 * Math.PI / 180);
document.getElementById("ex12-3-3").innerHTML = Math.cos(30 * Math.PI / 180);
document.getElementById("ex12-3-4").innerHTML = Math.min(30, 60, 80, 190, -300, -40);
document.getElementById("ex12-3-5").innerHTML = Math.max(30, 60, 80, 190, -300, -40);

//Ex12.4 Math.abs(), Math.sin(), Math.cos(), Math.min(), and Math.max()
function getRandom1(){
    document.getElementById("ex12-4-1").innerHTML = Math.random();
}
function getRandom2(){
    document.getElementById("ex12-4-2").innerHTML = Math.floor(Math.random() * 101); //0 - 100 => Total 101 numbers
}
function getRandom3(){
    document.getElementById("ex12-4-3").innerHTML = Math.floor(Math.random() * 100) + 1; //1 - 100 --> (0 - 99) + 1 => Total 100 numbers
}
function getRandom4(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom5(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}