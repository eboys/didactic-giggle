var car = {
	make: "Jeep",
	model: "Cherokee",
	year: 2005,
	speed: 55,
	description: function(){
		return this.year +" "+ this.make +" "+ this.model;
	},
	isSpeedOk: function(speedlimit){
		if(speedlimit < 65 && speedlimit>45){
			return true;
		}else
		return false;
	}
};

var triangle = {
	sides: [3,4,5],
	isTriangle: function(){
if ((this.sides[0] + this.sides[1]) < this.sides[2] || (this.sides[0] + this.sides[2]) < this.sides[1] || (this.sides[1] + this.sides[2]) < this.sides[0]){
	return false;
} else {
	return true;
}

},
perimeter: function(){
	var result = (this.sides[0] + this.sides[1] + this.sides[2])/2;
	return result;
},
area: function(){
	var result = (this.sides[0] + this.sides[1] + this.sides[2])/2;
	var triarea = Math.sqrt(result*((result-this.sides[0])*(result-this.sides[1])*(result-this.sides[2])));
	return triarea;
}
};


var person = {
firstName: "George",
lastName: "Washington",
birthday: new Date(1732,1,22),
fullName: function(){
	var name = this.firstName + " " + this.lastName;
	return name;
},
age: function(todaysDate){
var birth = this.birthday;
var today = new Date(todaysDate);
var howOld = today.getFullYear() - birth.getFullYear();
return howOld;
},
facebookPage: "https://www.facebook.com/pages/George-Washington/109537425730783?fref=ts",
isValidPage: function(){
	var valid = new RegExp(this.facebookPage);
	if (valid === "https://www.facebook.com/pages/George-Washington/109537425730783?fref=ts"){
		return true;
	} else{
		return false;
	}
}
};



