/*
*	Dominic Gordon
*	Dominic_gordon@student.uml.edu
*
* COMP 4610 - GUI 1
* HW6 - Creating an Interactive Dynamic Table
*
* This JS file is designed to allow the creation of the dynamic table.
* all of the error handling is done by jQuery as per the validate function below.
*
* Because of this I ended up removing createTable in it's entirety
* it is all in one function now, there is no need for more.
*/

$().ready(function(){
   
    $( "#genForm" ).validate({
        rules: {
            xStart: {
                required: true,
                number: true
            },
            xEnd: {
                required: true,
                number: true
            },
            yStart: {
                required: true,
                number: true
            },
            yEnd: {
                required: true,
                number: true
            }
        },
        messages: {
            xStart: {
                required: "Please enter a number between -50 and 50"
            },
            xEnd: {
                required: "Please enter a number between -50 and 50"         
            },
            yStart: {
                required: "Please enter a number between -50 and 50"
            },
            yEnd: {
                required: "Please enter a number between -50 and 50"
            }
        }
    });
});

/*
*	genTable()
* 
* This function is the setup part of generating the table
* it does a final check before attempting to generate the table
* so that if the user happened to not put anything in one of the
* fields at all it still would throw an error and not generate.
* I also felt it was a good idea to just remove all other functions completely
* and just have the table creation function be here as well.
*/
function genTable() {
	var table = document.getElementById("tableGen");
	table.innerHTML = "";
	if($("#genForm").valid()) {
		//gathering the values
		var xLow = Math.round(document.getElementById("xStart").value);
		var xHigh = Math.round(document.getElementById("xEnd").value);
		var yLow = Math.round(document.getElementById("yStart").value);
		var yHigh = Math.round(document.getElementById("yEnd").value);
		/*
		* generating the first cell, which we use as a way
		* to help the user understand which direction is x and which is y
		*/
		var row = table.insertRow();
		var cell = row.insertCell();
		cell.innerHTML = "XY><br>v";
		cell.style.zIndex = 3;

		//next we determine if any of the inputs need to be swapped and swap them
		var temp = 0;
		if(xLow > xHigh) {
			temp = xLow;
			xLow = xHigh;
			xHigh = temp;
		}

		if(yLow > yHigh) {
			temp = yLow;
			yLow = yHigh;
			yHigh = temp;
		}

		//next we insert all of the cells for the top row
		for(var i = yLow; i <= yHigh; i++) {
			cell = row.insertCell();
			cell.innerHTML = i;
		}

		//afterwards we actually generate the multplication values
		for(i = xLow; i <= xHigh; i++) {
			//we create a new row
			row = table.insertRow();
			//insert the first cell
			cell = row.insertCell();
			//set the html in that cell to the current number
			cell.innerHTML = i;
			//insert the multiplications for each
			for(var j = yLow; j <= yHigh; j++) {
				cell = row.insertCell();
				cell.innerHTML = i*j;
			}
		}
	}
}