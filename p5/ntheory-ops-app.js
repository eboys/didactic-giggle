//1. Define the onclick handler
var display = function() {
    //read http://blogs.uoregon.edu/cis111schedule/logic-ops/

    var x = Number($("#x").val());

    var btnIndex = $("button").index(this);

    if (btnIndex == 0) {

        var isDef = isDeficient(x)

        $("#tvalDisplay").text(isDef);

    } else if (btnIndex == 1) {

        var isPerf = isPerfect(x);

        $("#tvalDisplay").text(isPerf);

    } else if (btnIndex == 2) {

        var isAb = isAbundant(x);

        $("#tvalDisplay").text(isAb);

    } else if (btnIndex == 3) {
          
          var isPri = isPrime(x)
        
        $("#tvalDisplay").text(isPri);

    } else

        $("#tvalDisplay").html("error");

};

function isDeficient(x) {
    var fac = 0;
    for (i = 1; i <= x; i++) {
        if (x % i == 0) {
            fac += i;
        }
    }
    if (fac < (x * 2)) {
        return true;
    } else {
        return false;
    }
};

function isPerfect(x) {
    var fac = 0;
    for (i = 1; i <= x; i++) {
        if (x % i == 0) {
            fac += i;
        }
    }
    if (fac == (2 * x)) {
        return true;
    } else {
        return false;
    }
};

function isAbundant(x) {
    var fac = 0;
    for (i = 1; i <= x; i++) {
        if (x % i == 0) {
            fac += i;
        }
    }
    if (fac > (2 * x)) {
        return true;
    } else {
        return false;
    }
};


function isPrime(x) {
    var prime = true;
    for (var i = 2; i < x; i++) {
        if ((x % i) === 0) prime = false; 
      }
    return prime; 
  }

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