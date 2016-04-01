
function isTriangle(a,b,c){
if (a + b < c || a + c < b || b + c < a){
	return false;
} else {
	return true;
}

}

function main(a,b,c){
var a = Number(prompt("Please type a value for side a"));
var b = Number(prompt("Please type a value for side b"));
var c = Number(prompt("Please type a value for side c"));
var possible = isTriangle(a,b,c)
possible;
console.log("Sides: " +a+", "+b+", "+c+ "\nTriangle possible? " + possible);
alert("Sides: " +a+", "+b+", "+c+ "\nTriangle possible? " + possible);
}
//call main
main();