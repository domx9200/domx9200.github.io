/*
*	Dominic Gordon
*	Dominic_gordon@student.uml.edu
*
* COMP 4610 - GUI 1
* HW7 - Using Jquery UI
*
* This JS file is designed to allow the creation of the dynamic table.
* Further updates to this js file has caused it to become quite large.
* If handles the creation of tabs, sliders and their updating, as well as
* still maintains error checking.
*
*/

$().ready(function(){
	//for the variable xStart
	$("#xStartSlider").slider({
		min: -50,
		max: 50,
		slide: function(event, ui) {
			$("#xStart").val(ui.value);
		},
		change: function(event, ui) {
			updateTable();
		}
	});
	
	//for the variable xEnd
	$("#xEndSlider").slider({
		min: -50,
		max: 50,
		slide: function(event, ui) {
			$("#xEnd").val(ui.value);
		},
		change: function(event, ui) {
			updateTable();
		}
	});
	
	//for the variable yStart
	$("#yStartSlider").slider({
		min: -50,
		max: 50,
		slide: function(event, ui) {
			$("#yStart").val(ui.value);
		},
		change: function(event, ui) {
			updateTable();
		}
	});
	
	//for the variable yEnd
	$("#yEndSlider").slider({
		min: -50,
		max: 50,
		slide: function(event, ui) {
			$("#yEnd").val(ui.value);
		},
		change: function(event, ui) {
			updateTable();
		}
	});
});

(function($) {
	//same validation method as HW6, No updates needed
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
	
	//initialize tabbed interface for use later
	$("#tabs").tabs();
	
	//some changes have been made here
	$("#generate").click(function(){
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
			//now if the table succefully generates the button "save table" is now clickable
			document.getElementById("saveTable").removeAttribute("disabled");
		} else {
			//otherwise disable it so that it cannot be called when there isn't a valid table
			document.getElementById("saveTable").setAttribute("disabled", "disabled");
		}
	});
	
	//the function to create a tab for a given table
	$("#saveTable").click(function(){
		//I set a hard limit of 10 tabs, I don't want the amount of tabs to be an issue down the line
		if($("#tabs ul li").length < 10) {
			//only run if the table is valid
			if($("#genForm").valid()) {
				//get the amount of tabs, should start as 0, so tab 1
				var num_tabs = $("#tabs ul li").length + 1;
				//if it's the first tab I want to make sure the tabbed interface is visible
				//this is because I don't like the way it looks with a random white bar
				if(num_tabs == 1) {
					document.getElementById("tabs").style.visibility = "visible";
				}
				//create the first tab
				$("#tabs ul").append("<li><a id='tab-" + num_tabs + "' href='#tabs-" + num_tabs + "'>#" + num_tabs + "</a></li>");
				
				var temp = document.getElementById("tableGen").parentNode.cloneNode(true);
				temp.children[0].id = "table-" + num_tabs;
				
				//if the tabs are visible they take up the right half of the screen
				//whereas the table takes up the left half. I don't want that to carry
				//over to the tabs because then it would be really small looking.
				temp.classList.remove("col-lg-6");
				document.getElementById("tableGen").parentNode.classList.add("col-lg-6");			
				document.getElementById("tableGen").parentNode.classList.remove("col-lg-12");

				//begin generation of the content that the tab will display
				$("#tabs").append("<div id='tabs-" + num_tabs + "'></div>");
				document.getElementById("tabs-" + num_tabs).append(temp);
				
				//for some reason the only way I could get the button to properly
				//display was to do this really ugly way. But it works so whatever.
				var test = document.createElement("button");
				test.innerHTML = "Delete Table";
				test.classList.add("btn", "btn-dark", "del-table", "col-lg-12");
				test.id = "table-" + num_tabs + "-delete-button";
				document.getElementById("tabs-" + num_tabs).append(test);

				//same with the checkbox
				var check = document.createElement("input");
				check.setAttribute("type", "checkbox");
				check.classList.add("form-check-input", "del-check");
				document.getElementById("tabs-" + num_tabs).append(check);
				
				//makes sure the tabs look right, and sets the active to the newly created tab
				$("#tabs").tabs("refresh");
				$("#tabs").tabs({active: (num_tabs - 1)});
			}
		} else {
			//self made error checking because I couldn't be bothered to figure out how I would even use
			//Jquery validation on it. I only need it for this one thing anyways.
			document.getElementById("tab-lim-error").innerHTML = "You have reached the limit of tabs, please remove some before adding more";
			document.getElementById("saveTable").setAttribute("disabled", "disabled");
		}
	});
	
	//I have each button have the class del-table, so this is the function
	//that gets called when the button is clicked.
	$(document).on('click', '.del-table', function(event) {
		event.preventDefault();
		var tabs = event.target.parentNode.parentNode;
		var div = event.target.parentNode;
		var i = 1;
		var found = false;
		
		//it looks to find which button was pressed here
		while(!found) {
			if(div.id == ("tabs-" + i + "")) {
				found = true;
			} else {
				i++;
			}
		}
		
		//Here I actually remove the element from both the list and the div containing the info
		var toDel = tabs.children[0].children[i - 1];
		div.remove();
		toDel.remove();
		
		//If there are more tabs, rebuild the tabs
		if($("#tabs ul li").length > 0) {
			
			var num_tabs = $("#tabs ul li").length;
			var tableArray = [];
			
			//this just gets all of the remaining tables for use in the rebuildTabs function
			//it also removes every tab because again, it just wasn't going to work for me unless 
			//I did something really ugly
			for(var j = 0; j < num_tabs; j++) {
				tableArray.push(tabs.children[1].firstChild.cloneNode(true));
				tabs.children[1].remove();
				tabs.children[0].children[0].remove();
			}
			rebuildTabs(tableArray, num_tabs);
		} else {
			//if 0 reset visibility back to before tabs became visible
			document.getElementById("tabs").style.visibility = "hidden";
			document.getElementById("tableGen").parentNode.classList.add("col-lg-12");
			document.getElementById("tableGen").parentNode.classList.remove("col-lg-6");
			
		}
		//no matter what reset the error and make sure saveTable is no longer disabled
		document.getElementById("tab-lim-error").innerHTML = "";
		document.getElementById("saveTable").removeAttribute("disabled");
	});
	
	//when a checkbox gets selected all this funcion does is
	//enable the delete selected button when at least one box
	//is checked, and disable it otherwise
	$(document).on("click", ".del-check", function(event){
		var ul = event.target.parentNode.parentNode;
		var num_tabs = $("#tabs ul li").length;
		var checkedTotal = 0;
		for(var i = 0; i < num_tabs; i++) {
			if(ul.children[1 + i].children[2].checked == true) {
				checkedTotal++;
			}
		}
		if(checkedTotal > 0) {
			document.getElementById("del-tables").removeAttribute("disabled");
		} else {
			document.getElementById("del-tables").setAttribute("disabled", "disabled");
		}
	});
	
	//the delete function for deleting more than one at a time
	$("#del-tables").click(function(){
		var tableArray = [];
		var num_tabs_before = $("#tabs ul li").length;
		var num_tabs_after = num_tabs_before;
		var tabs = document.getElementById("tabs");
		
		//finds which need to be removed and which need to be saved.
		//in reality, all it's doing is saving the table of unchecked boxes
		//while keeping track of the tabs that will be left.
		for(var i = 0; i < num_tabs_before; i++) {
			if(tabs.children[1 + i].children[2].checked == true) {
				num_tabs_after--;
			} else {
				tableArray.push(tabs.children[1 + i].firstChild.cloneNode(true));
			}
		}
		
		//remove all tabs
		for(var i = 0; i < num_tabs_before; i++) {
			tabs.children[1].remove();
			tabs.children[0].children[0].remove();
		}
		rebuildTabs(tableArray, num_tabs_after);
		document.getElementById("del-tables").setAttribute("disabled", "disabled");
		
		//reset view back to the original one if brought back to zero
		if($("#tabs ul li").length == 0) {
			document.getElementById("tabs").style.visibility = "hidden";
			document.getElementById("tableGen").parentNode.classList.add("col-lg-12");
			document.getElementById("tableGen").parentNode.classList.remove("col-lg-6");
		}
		document.getElementById("tab-lim-error").innerHTML = "";
		document.getElementById("saveTable").removeAttribute("disabled");
	});
	
	//the coupling to make it a two-way-binding, true for all below
	$("#xStart").change(function() {
		$("#xStartSlider").slider("value", $(this).val());
	});
	
	$("#xEnd").change(function() {
		$("#xEndSlider").slider("value", $(this).val());
	});
	
	$("#yStart").change(function() {
		$("#yStartSlider").slider("value", $(this).val());
	});
	
	$("#yEnd").change(function() {
		$("#yEndSlider").slider("value", $(this).val());
	});
})(jQuery);

//takes the number of tabs there should be as well as the list of tables saved
function rebuildTabs(arrayTable, num_tabs) {
	//generates each tab on a loop, generation is no different to saveTable,
	//only that it does so with already existing tables
	//if you want more explanation just look at the function saveTable.
	for(var i = 0; i < num_tabs; i++) {
		$("#tabs ul").append("<li><a id='tab-" + (i + 1) + "' href='#tabs-" + (i + 1) + "'>#" + (i + 1) + "</a></li>");
		arrayTable[i].children[0].id = "table-" + (i + 1);
		$("#tabs").append("<div id='tabs-" + (i + 1) + "'></div>");
		document.getElementById("tabs-" + (i + 1)).append(arrayTable[i]);
		
		var test = document.createElement("button");
		test.innerHTML = "Delete Table";
		test.classList.add("btn", "btn-dark", "del-table", "col-lg-12");
		test.id = "table-" + (i + 1) + "-delete-button";
		document.getElementById("tabs-" + (i + 1)).append(test);
		
		
		var check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.classList.add("form-check-input", "del-check");
		document.getElementById("tabs-" + (i + 1)).append(check);
		
		$("#tabs").tabs("refresh");
	}
}

function updateTable() {
	if(document.getElementById("tableGen").innerHTML == "") {
		return;
	}
	//i couldn't get jquery to play nice without me completely rewriting my code, so I just decided
	//to copy it into this function.
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
		document.getElementById("saveTable").removeAttribute("disabled");
	} else {
		document.getElementById("saveTable").setAttribute("disabled", "disabled");
	}
};












