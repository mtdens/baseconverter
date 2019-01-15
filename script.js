const get_values = () => {
	/*
	* Gets the User inputted number and what base the number is in
	* Also gets the new base to change the user inputted number to
	* Returns: an array with three strings [str, str, str]
	*/

    //Get Base 1 - Convert From
	let orig_base = document.getElementById("orig-base").value;	
    
    //Get Base 2 - Convert To
    let new_base = document.getElementById("new-base").value;	

    //Get User Inputted Number
	let num = document.getElementById("orig-number").value;

	return [num, orig_base, new_base];
}

const number_base_10 = (number, base) => {
	/*
	* Takes user inputted number and the base and converts it to base 10
	* Returns: number in base 10
	*/

	let bases_higher_than_10 = {
		A: 10,
		B: 11,
		C: 12,
		D: 13,
		E: 14,
		F: 15,
		G: 16,
		H: 17,
		J: 18,
		K: 19,
	};

	let base_10 = 0;
	number = String(number).toUpperCase();

	for(let i = 0; i < number.length ; i++){
		if(number[i] in bases_higher_than_10){
			base_10 += bases_higher_than_10[number[i]]*base**(number.length-(i+1));
		}
		else{
			base_10 += parseInt(number[i])*base**(number.length-(i+1));
		}
	}
	return base_10; 
}

const number_new_base =(number, base) => {
	/*
	* Takes a number in base 10 and converts to a new base
	* Returns: a string in a different base
	*/

	let bases_higher_than_10 = {
		10: 'A',
		11: 'B',
		12: 'C',
		13: 'D',
		14: 'E',
		15: 'F',
		16: 'G',
		17: 'H',
		18: 'J',
		19: 'K',
	};

	let digit = '';

	while(number !== 0){

		remainder = String(number % base);
		if(remainder in bases_higher_than_10){
			digit += bases_higher_than_10[remainder];
		}
		else{
			digit += remainder;
		}

		number = Math.floor(number/base);
	}

	digit = digit.split('').reverse().join('');

	return digit;
}