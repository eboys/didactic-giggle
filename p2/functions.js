var temperature;
var humidity;
function perfectSummerDay(temperature, humidity){
	if (temperature > 90 && humidity <10){
		return true;
	} else {
		return false;
	}
};

perfectSummerDay(91, 7);

function toggle(on_off_switch){
	if (on_off_switch == false){
 		return true;
	} else if (on_off_switch == true){
 		return false;
	}
};