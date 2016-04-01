function waterState(temp){
	if(temp <= 32){
		return "solid";
	} else if(temp > 32 && temp < 212){
		return "liquid";
	} else if(temp >= 212 && temp <= 21140){
		return "gas";
	} else {
		return "plasma";
	}
};

function main(temp){
var temp = Number(prompt("Please type a Fahrenheit temperature"));
var temperature = waterState(temp);
temperature;
console.log("Temperature: " + temp + " degrees F \nWater State: " + temperature);
alert("Temperature: " + temp + " degrees F \nWater State: " + temperature);
}
//call main
main();