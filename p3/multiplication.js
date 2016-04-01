
function multiply(input) {
	var output = "";
	for(var i=1; i<10; i++){
		if(input > 0){
	output += i + "*" + input + "=" + (i*input) + "\n"+"<br/>";
	}
}
return output;
}


function main(){
	var n = Number(document.getElementById("input").value);
	var r = multiply(n);
	document.getElementById("out").innerHTML = r;
}

var button1 = document.getElementById("enter");
button1.onclick = main;
