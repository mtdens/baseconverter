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

const error_check = (number, base) => {
  /*
  * Checks user input to make sure it's between 0-9 or A-h or J-k.
  * Also checks to make sure the number is valid in the base, e.g. 43 base 5 is valid
  * Returns: a boolean value, true if valid, false if not valid
  */
  
  //If number is empty
  if(number === ""){
    return false;
  }
  
  // Checks number to see if in 0-9 or A-h or J-k
  number = number.toUpperCase();
  let error = number.search("[(iI|L-z)]+");

  //need to make sure bases higher than 10 check out
  let bases = "0123456789ABCDEFGHJK";

  if(error === -1){
    //Makes substring for proper base, e.g., base 4 - 0123
    bases = bases.substring(0, parseInt(base));
    
    //Loops through number checking each digit
    for(let i = 0; i < number.length; i++){
      if(bases.includes(number[i]) === false){
      	return false;
      }
    }
    //Number is between 0-9 or A-h or J-k and correct base
    return true;
  }
  return false;
}

const write_values = (old_number, old_base, new_number, new_base) => {

	//Writes User inputted number
	document.getElementById("old-n").textContent = String(old_number);

	//Writes old base
	document.getElementById("old-b").textContent = String(old_base);

	//Writes new base
	document.getElementById("new-b").textContent = String(new_base);

	//Writes new number in new base
	document.getElementById("new-n").textContent = String(new_number);	
}

const begin = () => {
	/*
	* When user clicks convert button begin function runs through program
	*/

	let values = []; //[old_number, old_base, new_base]

	//Calls function to get user number, old base and new base
	values = get_values();

	//Runs error_check to validate input
	//Returns true if valid, false otherwise
	let status = error_check(values[0], values[1]);

	//if input field is empty, it doesn't display anything
	if(values[0] === ''){
		document.getElementById("result").style.display = "none";
	}
	else if(status === true){
		//Calls function to convert user number to base 10
		var base_10_number = number_base_10(values[0], values[1]);

		//Calls function to convert base 10 number to new base
		var new_base_number = number_new_base(base_10_number, values[2]);

		//Calls function to write out results to html
		write_values(values[0], values[1], new_base_number, values[2]);

		//Clears input field
		document.getElementById("orig-number").value = '';

		//Changes display value so results are shown
		document.getElementById("results").style.display = "block";
	}
	else{
		document.getElementById("results").style.display = "none";
	}
}

document.getElementById("convert").addEventListener("click", begin);