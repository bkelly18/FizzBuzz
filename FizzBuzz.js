	var input = prompt ("Enter a number between 1 and 500");
	var randomNumber = parseInt(input);
	for (var plan=1; plan<=randomNumber; plan+=1) {
	if (plan%3===0 && plan%5===0) {
		answer = "<p>FizzBuzz</p>";	
	} else if (plan%3===0) {
		answer = "<p>Fizz</p>";
	} else if (plan%5===0) {
		answer = "<p>Buzz</p>";
	} else { 
		answer = '<p>' +plan +'</p>';
	}
		document.write(answer);
	}


