/**
 * Eloquent JavaScript - Chapter 2
 */


//Looping a Triangle

for (let n = 1; n <= 7; n ++){
	console.log('#'.repeat(n));
}


//FizzBuzz

for (let n = 1; n <= 100; n ++){
	switch (0){
		case (n % 15):
			console.log('FizzBuzz');
			break;
		case (n % 5):
			console.log('Buzz');
			break;
		case (n % 3):
			console.log('Fizz');
			break;
		default:
			console.log(n);
			break;
	}
}


//Chess Board

let size = 9;
let mystring = '';
let c = 1;
let r = 1;


for (r = 1; r <= size; r++){
	if (r % 2 == 0){ 												//even row
		for (c = 1; c <= size; c++){
			mystring = mystring.concat(c % 2 == 0 ? '#' : ' ');
		}
	} else { 														//odd row
		for (c = 1; c <= size; c++){
			mystring = mystring.concat(c % 2 == 0 ? ' ' : '#');
		}	
	}
	mystring = mystring.concat('\n');
}

console.log(mystring);

