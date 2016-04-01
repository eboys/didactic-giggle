var question = "What is Superman's real name?"
var answer = prompt(question);
var answer = answer.toLowerCase(answer);
alert("You answered " + answer);
if(answer == "clark kent"){
	alert("That's the correct answer");
} else {
	alert("The correct anwer was Clark Kent");
}