/*
* Dominic Gordon
* Dominic_Gordon@student.uml.edu
* HW8 - making scrabble
*
* This is the JS file for the entire scrabble game.
* each piece will be detailed when they are declared within this file.
*/

//just the data for all of the tiles, copied from what was given, images were added later.
var ScrabbleTiles = [];
ScrabbleTiles[0] = { value : 1,  numStart : 9,  numLeft : 9, "image": "graphics_data/tile_images/Scrabble_Tile_A.jpg" , letter: 'A'};
ScrabbleTiles[1] = { value : 3,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_B.jpg" , letter: 'B'};
ScrabbleTiles[2] = { value : 3,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_C.jpg" , letter: 'C'};
ScrabbleTiles[3] = { value : 2,  numStart : 4,  numLeft : 4, "image": "graphics_data/tile_images/Scrabble_Tile_D.jpg" , letter: 'D'};
ScrabbleTiles[4] = { value : 1,  numStart : 12, numLeft : 12, "image": "graphics_data/tile_images/Scrabble_Tile_E.jpg", letter: 'E'};
ScrabbleTiles[5] = { value : 4,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_F.jpg" , letter: 'F'};
ScrabbleTiles[6] = { value : 2,  numStart : 3,  numLeft : 3, "image": "graphics_data/tile_images/Scrabble_Tile_G.jpg" , letter: 'G'};
ScrabbleTiles[7] = { value : 4,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_H.jpg" , letter: 'H'};
ScrabbleTiles[8] = { value : 1,  numStart : 9,  numLeft : 9, "image": "graphics_data/tile_images/Scrabble_Tile_I.jpg" , letter: 'I'};
ScrabbleTiles[9] = { value : 8,  numStart : 1,  numLeft : 1, "image": "graphics_data/tile_images/Scrabble_Tile_J.jpg" , letter: 'J'};
ScrabbleTiles[10] = { value : 5,  numStart : 1,  numLeft : 1, "image": "graphics_data/tile_images/Scrabble_Tile_K.jpg",  letter: 'K'};
ScrabbleTiles[11] = { value : 1,  numStart : 4,  numLeft : 4, "image": "graphics_data/tile_images/Scrabble_Tile_L.jpg",  letter: 'L'};
ScrabbleTiles[12] = { value : 3,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_M.jpg",  letter: 'M'};
ScrabbleTiles[13] = { value : 1,  numStart : 6,  numLeft : 6, "image": "graphics_data/tile_images/Scrabble_Tile_N.jpg",  letter: 'N'};
ScrabbleTiles[14] = { value : 1,  numStart : 8,  numLeft : 8, "image": "graphics_data/tile_images/Scrabble_Tile_O.jpg",  letter: 'O'};
ScrabbleTiles[15] = { value : 3,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_P.jpg",  letter: 'P'};
ScrabbleTiles[16] = { value : 10, numStart : 1,  numLeft : 1, "image": "graphics_data/tile_images/Scrabble_Tile_Q.jpg",  letter: 'Q'};
ScrabbleTiles[17] = { value : 1,  numStart : 6,  numLeft : 6, "image": "graphics_data/tile_images/Scrabble_Tile_R.jpg",  letter: 'R'};
ScrabbleTiles[18] = { value : 1,  numStart : 4,  numLeft : 4, "image": "graphics_data/tile_images/Scrabble_Tile_S.jpg",  letter: 'S'};
ScrabbleTiles[19] = { value : 1,  numStart : 6,  numLeft : 6, "image": "graphics_data/tile_images/Scrabble_Tile_T.jpg",  letter: 'T'};
ScrabbleTiles[20] = { value : 1,  numStart : 4,  numLeft : 4, "image": "graphics_data/tile_images/Scrabble_Tile_U.jpg",  letter: 'U'};
ScrabbleTiles[21] = { value : 4,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_V.jpg",  letter: 'V'};
ScrabbleTiles[22] = { value : 4,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_W.jpg",  letter: 'W'};
ScrabbleTiles[23] = { value : 8,  numStart : 1,  numLeft : 1, "image": "graphics_data/tile_images/Scrabble_Tile_X.jpg",  letter: 'X'};
ScrabbleTiles[24] = { value : 4,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_Y.jpg",  letter: 'Y'};
ScrabbleTiles[25] = { value : 10, numStart : 1,  numLeft : 1, "image": "graphics_data/tile_images/Scrabble_Tile_Z.jpg",  letter: 'Z'};
ScrabbleTiles[26] = { value : 0,  numStart : 2,  numLeft : 2, "image": "graphics_data/tile_images/Scrabble_Tile_blank.jpg",  letter: ' '};
var totalTiles = 100;

//is the array that keeps track of the board, used multiple times during operation
var boardTiles = [];
boardTiles[0] = {"multiplier" : 1, "letterMult" : 1, "image" : "graphics_data/board_parts/base.png"};
boardTiles[1] = {"multiplier" : 1, "letterMult" : 1, "image" : "graphics_data/board_parts/base.png"};
boardTiles[2] = {"multiplier" : 1, "letterMult" : 1, "image" : "graphics_data/board_parts/base.png"};
boardTiles[3] = {"multiplier" : 2, "letterMult" : 1, "image" : "graphics_data/board_parts/double-word.png"};
boardTiles[4] = {"multiplier" : 1, "letterMult" : 1, "image" : "graphics_data/board_parts/base.png"};
boardTiles[5] = {"multiplier" : 1, "letterMult" : 2, "image" : "graphics_data/board_parts/double-letter.png"};

var tScore = 0;

$().ready(function(){
	//set everything up
	setupBoard();
	setupRack();
	//setup the droppable state so that the rack can accept letters that were on the board.
	$("#playerRack").droppable({
		tolerance: "intersect",
		accept: ".dragBack",
		drop: function(event, ui){
			var location = ui.draggable[0].getAttribute("location");
			//adds the letter back into the rack
			$("#playerRack").append("<img src=" + ScrabbleTiles[location].image + " value=" + ScrabbleTiles[location].value + " location=" + location +" height='75' class='drags'/>");
			//resets it's draggability
			$(".drags").draggable({
				revert: true
			});
			//find which node was the one that was dragged
			var board = ui.draggable[0].parentNode;
			for(var i = 0; i < board.children.length; i++){
				if(board.children[i] == ui.draggable[0]){
					//once found reset the image, value, location, and the letters
					board.children[i].src = boardTiles[i].image;
					board.children[i].setAttribute("value", "0");
					board.children[i].setAttribute("location", "99");
					board.children[i].setAttribute("isLetter", "false");
					$(board.children[i]).draggable({
						disabled: true
					});
					$(board.children[i]).droppable({
						tolerance: "intersect",
						accept: ".drags",
						disabled: false
					});
					//start checking for score checking, if the number of letters is less than 2
					//or they aren't in order from the left it doesn't calculate score
					var isValid = checkValidity();
					//console.log(isValid);
					
					if(!isValid){
						document.getElementById("wordScore").innerHTML = "word score: 0";
						document.getElementById("currentWord").innerHTML = "current word: ";
						return false;
					}
					calcScore();
				}
			}
		}
	});
});


function setupBoard(){
	//make sure we aren't generating more than we need
	document.getElementById("playSpace").innerHTML = "";
	for(var i = 0; i < boardTiles.length; i++){
		//drops is the droppable while dragback is the draggable, dragback is also disabled by default.
		$("#playSpace").append("<img src=" + boardTiles[i].image + " wordMult=" + boardTiles[i].multiplier + " letterMult=" + boardTiles[i].letterMult + " value='0' space='0' location='99' height='85' class='drops dragBack' isLetter='false'/>");
	}
	
	//the helper is what allows for the return to work without wierdness
	$(".dragBack").draggable({
		disabled: true,
		helper: "clone",
		revert: true,
		revertDuration: 0
	});
	
	//this set's up each square with what is needed to allow a draggable to drop into it.
	$(".drops").droppable({
		tolerance: "intersect",
		accept: ".drags",
		disabled: false,
		drop: function(event, ui){
			//set the source image, value, and location in the array, as well as declare a letter there
			this.src = ui.draggable[0].src;
			this.setAttribute("value", ui.draggable[0].getAttribute("value"));
			this.setAttribute("location", ui.draggable[0].getAttribute("location"));
			this.setAttribute("isLetter", "true");
			
			//start checking for score checking, if the number of letters is less than 2
			//or they aren't in order from the left it doesn't calculate score
			var isValid = checkValidity();
			//console.log(isValid);
			
			//remove the dragged element and reset the droppable 
			$(this).draggable({
				disabled: false
			});
			
			$(this).droppable({
				disabled: true
			});
			ui.draggable.remove();
			
			if(!isValid){
				document.getElementById("wordScore").innerHTML = "word score: 0";
				document.getElementById("currentWord").innerHTML = "current word: ";
				return false;
			}
			calcScore();
		}
	});
}

function setupRack(){
	//playerRack includes <br><br> which counts as two elements for some reason
	var tilesNeeded = (7 - document.getElementById("playerRack").childElementCount + 2);
	
	if(totalTiles >= tilesNeeded){
		//update total score
		var isValid = checkValidity();
		var score = 0;
		if(isValid)
				score = calcScore();
		tScore += score;
		setupBoard();
		
		//begin random selection
		for(var i = 0; i < tilesNeeded; i++){
			var temp = Math.floor(Math.random() * 27);
			//so long as the tile selected doesn't have any left try again.
			while(ScrabbleTiles[temp].numLeft < 1){
				temp = Math.round(Math.random() * 26);
			}
			$("#playerRack").append("<img src=" + ScrabbleTiles[temp].image + " value=" + ScrabbleTiles[temp].value + " location=" + temp +" height='75' class='drags'/>");
			ScrabbleTiles[temp].numLeft -= 1;
		}
		
		//setup all to be draggable, make sure the board is how it should be, and decrement the total tiles left.
		$(".drags").draggable({
			revert: true
		});
		totalTiles -= tilesNeeded;
		document.getElementById("wordScore").innerHTML = "word score: 0";
		document.getElementById("currentWord").innerHTML = "current word: ";
	}
	document.getElementById("remainingTiles").innerHTML = "num tiles left: " + totalTiles;
	document.getElementById("totalScore").innerHTML = "Total Score: " + tScore;
}

//all this does is reset all tiles back to full and resets the rack and board
function resetGame(){
	for(var i = 0; i < ScrabbleTiles.length; i++){
		ScrabbleTiles[i].numLeft = ScrabbleTiles[i].numStart;
	}
	totalTiles = 100;
	//player rack needs to be reset so that the tiles are actually re-drawn
	document.getElementById("playerRack").innerHTML = "<br><br>";
	setupRack();
	document.getElementById("currentWord").innerHTML = "current word: ";
	document.getElementById("totalScore").innerHTML = "Total Score: 0";
	tScore = 0;
}

function calcScore(){
	var test = document.getElementById("playSpace");
	var wordScoreMult = 1;
	var totalScore = 0;
	var currentWord = "";
	//calculates the score, all it does is add to totalScore,
	//then checks to see if lettermult is 2, in which it will add
	//the word points again. afterwards, it just multiplies wordScoreMult
	//by wordmult, which is either 1, or 2
	for(var i = 0; i < test.children.length; i++){
		totalScore += parseInt(test.children[i].getAttribute("value"));
		if(parseInt(test.children[i].getAttribute("lettermult")) == 2)
			totalScore += parseInt(test.children[i].getAttribute("value"));
		if(test.children[i].getAttribute("isLetter") == "true"){
			wordScoreMult *= test.children[i].getAttribute("wordmult");
		}
		if(test.children[i].getAttribute("isLetter") == "true")
			currentWord += ScrabbleTiles[parseInt(test.children[i].getAttribute("location"))].letter;
	}
	//afterwards multiply the total score by the word score mult
	totalScore = totalScore * wordScoreMult;
	document.getElementById("wordScore").innerHTML = "word score: " + totalScore;
	document.getElementById("currentWord").innerHTML = "current word: " + currentWord;
	return totalScore;
}


function checkValidity(){
	var lastLetter = 0;
	var totalLetters = 0;
	var children = document.getElementById("playSpace").children;
	//finds the number of letters and the last letter
	for(var i = 0; i < children.length; i++){
		if(children[i].getAttribute("isLetter") == "true"){
			lastLetter = i;
			totalLetters++;
		}
	}
	//if any letter before hte last letter is not a letter return false
	for(i = 0; i < lastLetter; i++)
		if(children[i].getAttribute("isLetter") == "false")
			return false;
	
	if(totalLetters < 2)
		return false;

	return true;
}

function shuffleRack(){
	//finds the letters on the board and adds them back into the bag
	var brd = document.getElementById("playSpace").children;
	for(var i = 0; i < brd.length; i++){
		if(brd[i].getAttribute("location") != "99"){
			ScrabbleTiles[parseInt(brd[i].getAttribute("location"))].numLeft++;
			totalTiles++;
		}
	}
	//reset the board
	setupBoard();
	
	//adds the letters left in the rack back into the bag
	rack = document.getElementById("playerRack").children;
	for(i = 2; i < rack.length; i++){
		ScrabbleTiles[parseInt(rack[i].getAttribute("location"))].numLeft++;
		totalTiles++;
	}
	
	//reset the rack
	rack[0].parentNode.innerHTML = "<br><br>";
	
	//generate the rack
	setupRack();
	return true;
}

function rackTest(){
	//all this does is make sure the rack doesn't change when the word isn't valid
	//the setupRack handles the number stuff
	var isValid = checkValidity();
	if(!isValid){
		console.log("wasn't valid, won't change rack");
		return false;
	}else
		setupRack();
	return true;
}