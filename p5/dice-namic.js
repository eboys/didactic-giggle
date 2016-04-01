//See p. 140

//define a Dice object, properties and methods
var display = function(){

    var n = Number($("#n").val());

    var rollN = roll_number(n);

        $("#rollNumber").text(rollN);
};


var Dice = {
    sides: 6,

    rollDie: function() {
        return Math.floor(Math.random() * this.sides) + 1;
    },

    rollDice: function() {
        var diceTotal = 0;
        diceTotal += this.rollDie();
        diceTotal += this.rollDie();
        return diceTotal;
    },

    rollDoubles: function(n) {
      var die1 = 0;
      var die2 = 0;
      var num = 0;
    do {
        die1 = this.rollDie();
        die2 = this.rollDie();
        num ++;
        // stop looping if die1 == die2 && die1 == n
      } while (die1 != die2 && die1 != n);
       return num;
    },

    URL_prefix: "http://dave-reed.com/book3e/Images/",

    getURL: function(n) {
        //return the URL for an n-dot die
        return this.URL_prefix + "die" + n + ".gif";
    }
};

//top-level function
var roll_number = function(n) {
    //roll two dice until you hit n
    //return the number of rolls
    var die_1 = 0;
      var die_2 = 0;
      var num = 0;
    do {
        die_1 = Dice.rollDice();
        die_2 = Dice.rollDice();
        num ++;
        // stop looping if die1 == die2 && die1 == n
      } while (die_1 != die_2 && die_1 != n);
       return num;
       return Dice.getURL(n);
       return Dice.getURL(n);
};

/*var init = function() {
    $("#dice").attr("src";"http://dave-reed.com/book3e/Images/die1.gif");
    Dice.getURL;
};*/

$(document).ready(function() {

    $("button").on("click", display);
});
