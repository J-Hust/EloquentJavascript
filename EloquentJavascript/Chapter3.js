/**
 * Eloquent JavaScript - Chapter 3
 */


//Minimum

function min(a, b){
	if (a < b){return a;}
	else {return b;}
};



//Recursion

function isEven(x){
	if (Math.abs(x) == 0){return true;}
	else if (Math.abs(x) == 1){return false;}
	else return isEven(Math.abs(x) - 2);
};



//Bean Counting

function countBs(str){
	var letter_count = 0;
	for (n = 0; n < str.length; n++){
		if (str.charAt(n) == "B"){
			letter_count += 1;
		}	
	}
	return letter_count;
};