

"use strict"; // Do NOT remove this directive!

var x, y, cheeseEating, doorUnlocked, gx, gy, lv;

PS.audioLoad( "eat", {path : "audio/"});

//Hamster positions
x = 0;
y = 0;

gx = 0;//border width
gy = 0;//border height

lv = 1;//level (set to test different levels without going through the other levels)

cheeseEating = false;
doorUnlocked = false;

PS.waitAFew = function() {
PS.BeginLevel();
}

PS.cheeseFound = function(hamx, hamy) {
	PS.statusText( "You got the Cheese! Hamter likes Cheese!" );
	PS.color( PS.ALL, PS.ALL, 224, 224, 0 );

	for (var i = 0; i < PS.random(15); i++){
	PS.color( PS.random(gx)-1, PS.random(gy)-1, 10, 10, 0);
	}

	PS.color( hamx, hamy, PS.COLOR_ORANGE );
	cheeseEating = true;
}


PS.BeginLevel = function() {
	cheeseEating = false;

	switch(lv){
		case 1:
			PS.Level1();
			break;
		case 2:
			PS.Level2();
			break;
		case 3:
			PS.Level3();
			break;
		case 4:
			PS.Level4();
			break;
		case 5:
			PS.Level5();
			break;
	}
}

//Movement Handling and colision handling
PS.move = function(oldX, oldY, newX, newY) {
	if((gx-1) >= newX && newX >=0 && (gy-1) >= newY && newY >=0){
			if(cheeseEating == true && PS.color(newX, newY) != PS.COLOR_WHITE){
		PS.audioPlay( "eat", {path : "audio/"});
	}

		if (PS.color( newX, newY ) == PS.COLOR_YELLOW){
			this.cheeseFound(newX,newY);
			PS.audioPlay( "eat", {path : "audio/"});
			lv++;
		}

		if (PS.color( newX, newY ) == PS.COLOR_GRAY){
			if (doorUnlocked == true){
				PS.color( oldX, oldY, PS.COLOR_WHITE );
				PS.color( newX, newY, PS.COLOR_ORANGE );
				x = newX;
				y = newY;
				PS.statusText( "The key broke on use!" );
				doorUnlocked = false;

			}else{
				PS.statusText( "The door requires a key!" );
			}

		}else if (PS.color( newX, newY ) != PS.COLOR_BLACK){
			if (PS.color( newX, newY ) == PS.COLOR_GRAY_LIGHT){
				doorUnlocked = true;
				PS.statusText( "Key Aquired!" );
			}
		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( newX, newY, PS.COLOR_ORANGE );
		x = newX;
		y = newY;
		}
	} 
	
	else if (newX < 0){
		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( gx-1, newY, PS.COLOR_ORANGE );
		x = gx-1;
		y = newY;
	} 

	else if (newY < 0){
		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( newX, gy-1, PS.COLOR_ORANGE );
		x = newX;
		y = gy-1;
	}

		else if (newX > gx-1){
		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( 0, newY, PS.COLOR_ORANGE );
		x = 0;
		y = newY;
	} 

	else if (newY > gy-1){
		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( newX, 0, PS.COLOR_ORANGE );
		x = newX;
		y = 0;
	}
}





//Level Sets

	/*Template for Levels

	PS.Level_ = function() {
		//Changes the text
		PS.statusText( "Level _" );

		//Changes the grid size
		gx = _;
		gy = _;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = _;
		y = _;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Maze Walls
		PS.color( _, _, PS.COLOR_BLACK );

		//Door Position
		PS.color( _, _, PS.COLOR_GRAY);

		//Key
		PS.color( _, _, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( _, _, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}
		*/

	PS.Level1 = function() {

		//Changes the text
		PS.statusText( "Level 1" );

		
		//Changes the grid size
		gx = 7;
		gy = 3;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Cheese Position
		PS.color( 5, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}


		PS.Level2 = function() {

		//Changes the text
		PS.statusText( "Level 2" );

		//Changes the grid size
		gx = 7;
		gy = 7;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 5;
		PS.color( x, y, PS.COLOR_ORANGE );

		
		//Maze Walls
		PS.color( 3, 0, PS.COLOR_BLACK );
		PS.color( 3, 1, PS.COLOR_BLACK );
		PS.color( 3, 2, PS.COLOR_BLACK );
		PS.color( 3, 4, PS.COLOR_BLACK );
		PS.color( 3, 5, PS.COLOR_BLACK );
		PS.color( 3, 6, PS.COLOR_BLACK );

		//Cheese Position
		PS.color( 5, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}


	PS.Level3 = function() {
		//Changes the text
		PS.statusText( "Level 3" );

		//Changes the grid size
		gx = 8;
		gy = 8;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Maze Walls
		PS.color( 5, 5, PS.COLOR_BLACK );
		PS.color( 5, 4, PS.COLOR_BLACK );
		PS.color( 5, 3, PS.COLOR_BLACK );
		PS.color( 5, 2, PS.COLOR_BLACK );
		PS.color( 3, 5, PS.COLOR_BLACK );
		PS.color( 3, 4, PS.COLOR_BLACK );
		PS.color( 3, 3, PS.COLOR_BLACK );
		PS.color( 3, 2, PS.COLOR_BLACK );
		PS.color( 3, 1, PS.COLOR_BLACK );
		PS.color( 5, 5, PS.COLOR_BLACK );
		PS.color( 6, 2, PS.COLOR_BLACK );


		//Door Position
		PS.color( 4, 5, PS.COLOR_GRAY);

		//Key
		PS.color( 6, 5, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 6, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}


		PS.Level4 = function() {
		//Changes the text
		PS.statusText( "Level 4" );

		//Changes the grid size
		gx = 20;
		gy = 20;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Maze Walls
		PS.color( 10, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, 4, PS.COLOR_BLACK );

		//Door Position
		PS.color( 10, 2, PS.COLOR_GRAY);

		//Key
		PS.color( 13, 9, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 17, 2, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );

		PS.color( 5, 0, PS.COLOR_WHITE );
		PS.color( 5, 19, PS.COLOR_WHITE );
		PS.color( 0, 9, PS.COLOR_WHITE );
		PS.color( 19, 9, PS.COLOR_WHITE );
	}



/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	PS.BeginLevel();

};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {



	if (key == PS.KEY_ARROW_RIGHT ) {
		PS.move(x, y, x+1, y);
		}

	if (key == PS.KEY_ARROW_LEFT) {
		PS.move(x, y, x-1, y);
		}


	if (key == PS.KEY_ARROW_UP ) {
		PS.move(x, y, x, y-1);
		}
	


	if (key == PS.KEY_ARROW_DOWN) {
		PS.move(x, y, x, y+1);
		}
		

	if (key == PS.KEY_ENTER && cheeseEating == true) {
		PS.BeginLevel();
		cheeseEating = false;
	}

		if (key == PS.KEY_R && cheeseEating == false) {
		PS.BeginLevel();
		cheeseEating = false;
	}
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

