//1. Define the onclick handler
var display = function() {
    //read http://blogs.uoregon.edu/cis111schedule/logic-ops/

    //caveat: type string means "0" is truthy
    var x = Number($("#x").val());
    var y = Number($("#y").val());
    var z = Number($("#z").val());


    var btnIndex = $("button").index(this);



    if (btnIndex == 0) {
        
        var isTri = isTriangle(x, y, z);
        
        $("#tvalDisplay").text(isTri);
    
    } else if (btnIndex == 1) {
        
        var isArea = area(x, y, z);
        
        $("#tvalDisplay").text(isArea);
    
    } else if (btnIndex == 2) {
        
        var tType = triangleType(x, y, z);
        
        $("#tvalDisplay").text(tType);
    
    } else if (btnIndex == 3) {
        
        var ratio = is345Triangle(x, y, z);
        
        $("#tvalDisplay").text(ratio);
    
    } else
        
        $("#tvalDisplay").html("error");


};

function isTriangle(x, y, z) {
    if (x + y < z) {
        return false;
    } else if (x + z < y) {
        return false;
    } else if (y + z < x) {
        return false;
    } else {
        return true;
    }

};

function area(x, y, z) {
  var result = (x + y + z)/2;
  var triarea = Math.sqrt(result*((result-x)*(result-y)*(result-z)));
  return triarea;
};

function triangleType(x, y, z) {
  if (x === y && y ===z) {
    return "Equilateral";
  } else if (x === y || x === z || y === c){
    return "Isoceles";
  } else {
    return "Scalene";
  }
};

function is345Triangle(x, y, z) {
  if ((x * x) + (y * y) == (z * z)) {
    return true;
  } else {
      return false;
  }
};
//2. register the handlers after the page is loaded
$(document).ready(function() {
    //console.log("ready");

    $("button").on("click", display);

    /* This way of doing it is OK, too:
    var b1 = $("#b1");
    b1.on("click", display);
    $("#b2").on("click", display);
    $("button").eq(2).on("click", display);
    $("button").eq(3).on("click", display);
    */
});