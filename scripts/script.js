function popup() {
	var age = prompt('WARNING: Back of shirt is NSFW. Must be 18 or older to view. Please enter your age: ');
	if (age >= 18) {
		alert("Your body may be of age, but your mind still seems childish. No flip for you.");
	} else if (age < 18) {
		alert("Not old enough, it seems. Try again in "  + (18 - age) +  " years.");
	}
}