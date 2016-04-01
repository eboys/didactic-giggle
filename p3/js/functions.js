function isEven(n) {
if (n%2 === 0) {
	return true;
} else {
	return false;
}

};



function kindOfDay(dayOfWeek) {
if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
	return "Weekday";
} else if (dayOfWeek == "Saturday" || dayOfWeek =="Sunday") {
	return "Weekend";
} else {
   return "Not a day";
}

};



var list = "";
function count(number) {
	for (var i=1; i<=number; i++){
		list += i + ", ";
	}
	return list += i + ", ";
}




function countChange(q,d,ni,p) {
var change = (q*.25)+(d*.10)+(ni*.05)+(p*.01);
return "$" + change;
}

