/*
*	Dominic Gordon
*	Dominic_gordon@student.uml.edu
*
* COMP 4610 - GUI 1
* HW5 - Creating an Interactive Dynamic Table
*
* This JS file is designed to allow the creation of the dynamic table.
* The exact steps it takes is defined below in genTable().
*/

/*
*	genTable()
* 
*	starts the generation of the table, first by getting the values needed
* which are xS, xE, yS, and yE.
* If there were any errors in the previous attempt it resets those errors.
* Then it checks the validity of the values, and sends any error messages required.
* Finally, it actally begins generating the table.
*
* More details in the code itself.
*/
function genTable() {
	
	//first we grab the variables
	var xS = document.getElementById("xStart").value;
	var xE = document.getElementById("xEnd").value;
	var yS = document.getElementById("yStart").value;
	var yE = document.getElementById("yEnd").value;
	
	//resetting errors
	document.getElementById("xStartError").innerHTML = "";
	document.getElementById("xEndError").innerHTML = "";
	document.getElementById("yStartError").innerHTML = "";
	document.getElementById("yEndError").innerHTML = "";
	document.getElementById("xSwapError").innerHTML = "";
	document.getElementById("ySwapError").innerHTML = "";
	document.getElementById("xStartRound").innerHTML = "";
	document.getElementById("xEndRound").innerHTML = "";
	document.getElementById("yStartRound").innerHTML = "";
	document.getElementById("yEndRound").innerHTML = "";
	
	//table needs to be reset before any input is checked
	var table = document.getElementById("tableGen");
	table.innerHTML = "";
	
	//running errorCheck on each input to ensure input is within expected ranges
	var checkxS = errorCheck(xS, document.getElementById("xStartError"));
	var checkxE = errorCheck(xE, document.getElementById("xEndError"));
	var checkyS = errorCheck(yS, document.getElementById("yStartError"));
	var checkyE = errorCheck(yE, document.getElementById("yEndError"));
	
	//running checks for start being larger than end and if all inputs are valid
	var areAllNums = false;
	var swapped = false;
	
	//areAllNums really means is valid, I was just being an idiot when building it.
	if(checkxS && checkxE && checkyS && checkyE) {
		areAllNums = true;
	}
	
	//checks if X start is larger than X end
	if(Math.round(xS) > Math.round(xE) && checkxS && checkxE) {
			document.getElementById("xSwapError").innerHTML = "ERROR: START IS LARGER THAN END";
			swapped = true;
	}
	
	//checks if Y start is larget than Y end
	if(Math.round(yS) > Math.round(yE) && checkyS && checkyE) {
			document.getElementById("ySwapError").innerHTML = "ERROR: START IS LARGER THAN END";
			swapped = true;
	}
	
	//continue generation if they are all accepted numbers and start is smaller than end in both cases
	//it also
	if(areAllNums && !swapped) {
		if(!Number.isInteger(Number(xS))) {
			document.getElementById("xStartRound").innerHTML = "WARNING: THIS NUMBER WAS ROUNDED";
		}
		
		if(!Number.isInteger(Number(xE))) {
			document.getElementById("xEndRound").innerHTML = "WARNING: THIS NUMBER WAS ROUNDED";
		}
		
		if(!Number.isInteger(Number(yS))) {
			document.getElementById("yStartRound").innerHTML = "WARNING: THIS NUMBER WAS ROUNDED";
		}
	
		if(!Number.isInteger(Number(yE))) {
			document.getElementById("yEndRound").innerHTML = "WARNING: THIS NUMBER WAS ROUNDED";
		}
	
		createTable(Math.round(xS), Math.round(xE), Math.round(yS), Math.round(yE), table);
	}
}

/*
*	errorCheck
*
* toCheck is the input to check, it is false if it is empty, over 50 or under -50
*		or not a number
*
* errorText is the error message that is to display when the input is incorrectly entered
*		for that particular input.
*
*	I have decided that I wanted to have the error message change based on what the imput was.
*/
function errorCheck(toCheck, errorText) {
	//this is the check to determine if input is text or empty
	if(toCheck == "" || isNaN(toCheck)) {
		errorText.innerHTML = "INPUT ERROR: PLEASE PUT IN A NUMBER";
		return false;
	//this is the check to determine if the input is too large or small.
	} else if(Math.round(toCheck) > 50 || Math.round(toCheck) < -50) {
		errorText.innerHTML = "INPUT ERROR: PLEASE MAKE SURE YOUR INPUT IS BETWEEN -50 AND 50";
		return false;
	}
	return true;
}

/*
*	createTable()
* 
*	xS is the start of the range of the multiplier in the table
*
* xE is the end of the range of the multiplier in the table
*
* yS is the start of the range of the multiplicand in the table
*
* yE is the end of the range of the nultiplicand in the table
*
* table is the table itself, we use this to actually generate the table.
*/
function createTable(xS, xE, yS, yE, table) {
	/*
	* first we generate the first cell, which we use as a way
	* to help the user understand which direction is x and which is y
	*/
	var row = table.insertRow();
	var cell = row.insertCell();
	cell.innerHTML = "XY><br>v";
	cell.style.zIndex = 3;
	
	//next we insert all of the cells for the top row
	for(var i = yS; i <= yE; i++) {
		cell = row.insertCell();
		cell.innerHTML = i;
	}
	
	//afterwards we actually generate the multplication values
	for(i = xS; i <= xE; i++) {
		//we create a new row
		row = table.insertRow();
		//insert the first cell
		cell = row.insertCell();
		//set the html in that cell to the current number
		cell.innerHTML = i;
		//insert the multiplications for each
		for(var j = yS; j <= yE; j++) {
			cell = row.insertCell();
			cell.innerHTML = i*j;
		}
	}
}