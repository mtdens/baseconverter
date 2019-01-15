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