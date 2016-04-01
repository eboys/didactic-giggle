

function init(){
  var perimeterListener = 
  document.getElementById("perimeter");
  perimeterListener.addEventListener("click", getPerimeter);

  var areaListener =
  document.getElementById("area");
  areaListener.addEventListener("click", getArea);

  var legalListener = 
  document.getElementById("legalTriangle");
  legalListener.addEventListener("click", getLegal);
}

var triangle = {
	sides: [3,4,5],
	isTriangle: function(){
if (this.sides[0] + this.sides[1] < this.sides[2]){
	return false;
} else if(this.sides[0] + this.sides[2] < this.sides[1]) {
	return false;
} else if(this.sides[1] + this.sides[2] < this.sides[0]){
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

function getPerimeter(){
	var side1 = document.getElementById("side1").value; 
side1 = parseInt(side1);
triangle.sides[0] = side1;

var side2 = document.getElementById("side2").value;
side2 = parseInt(side2);
triangle.sides[1] = side2;

var side3 = document.getElementById("side3").value;
side3 = parseInt(side3);
triangle.sides[2] = side3;

var perimeter = triangle.perimeter();
var perimeterDiv = document.getElementById("perimeter");
perimeterDiv.innerHTML = perimeter;
return 0;
};

function getArea(){
	var side1 = document.getElementById("side1").value; 
side1 = parseInt(side1); //converts string to number
triangle.sides[0] = side1;

var side2 = document.getElementById("side2").value;
side2 = parseInt(side2);
triangle.sides[1] = side2;

var side3 = document.getElementById("side3").value;
side3 = parseInt(side3);
triangle.sides[2] = side3;

var area = triangle.area();
var areaDiv = document.getElementById("area");
areaDiv.innerHTML = area;
return 0;
}

function getLegal(){
	var side1 = document.getElementById("side1").value; 
side1 = parseInt(side1); 
triangle.sides[0] = side1;

var side2 = document.getElementById("side2").value;
side2 = parseInt(side2);
triangle.sides[1] = side2;

var side3 = document.getElementById("side3").value;
side3 = parseInt(side3);
triangle.sides[2] = side3;

var legal = triangle.isTriangle();
var legalDiv = document.getElementById("legalTriangle");
legalDiv.innerHTML = legal;
return 0;
}




