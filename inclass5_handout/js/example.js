// ADD NEW ITEM TO END OF LIST
function addToEnd() {
	var ul = document.getElementById("one").parentNode;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("cream"));
	li.setAttribute("id", "five");
	ul.appendChild(li);
}
// ADD NEW ITEM START OF LIST
function addToStart() {
	var ul = document.getElementById("one").parentNode;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("Kale"));
	li.setAttribute("id", "zero");
	ul.insertBefore(li, document.getElementById("one"));
}

// ADD A CLASS OF COOL TO ALL LIST ITEMS
function addCool() {
	document.getElementById("zero").classList.add("cool");
	document.getElementById("one").classList.add("cool");
	document.getElementById("two").classList.add("cool");
	document.getElementById("three").classList.add("cool");
	document.getElementById("four").classList.add("cool");
	document.getElementById("five").classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
function addCart() {
	var header = document.getElementsByTagName("h2")[0];
	var ul = document.getElementById("one").parentNode;
  var numItems = ul.getElementsByTagName("li").length;
	header.innerHTML = header.innerHTML + "<span>" + numItems + "</span>";
}

//call the functions
window.onload = addToEnd();
window.onload = addToStart();
window.onload = addCool();
window.onload = addCart();