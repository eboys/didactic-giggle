/*var a = 5;
var b = 6;
var c = 7;
var s = (a+b+c)/2;
var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);
alert(area);*/

//var a = Number(prompt("Please type a value for side a"));
//var b = Number(prompt("Please type a value for side b"));
//var c = Number(prompt("Please type a value for side c"));
//var s = (a+b+c)/2;
/*var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);
alert(area);*/

function areaOfTriangle(a,b,c){
var s = (a+b+c)/2;
return (Math.sqrt(s*((s-a)*(s-b)*(s-c))));
}
//areaOfTriangle(3,4,5)

function main(a,b,c){
var a = Number(prompt("Please type a value for side a"));
var b = Number(prompt("Please type a value for side b"));
var c = Number(prompt("Please type a value for side c"));
var ar = areaOfTriangle(a,b,c);
var area = ar.toFixed(2);
area;
console.log("Area of Triangle: " + area + "\nSides: " +a+", "+b+", "+c+",");
alert("Area of Triangle: " + area + "\nSides: " +a+", "+b+", "+c+",");
}
//call main
main();