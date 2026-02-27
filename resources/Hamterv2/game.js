

"use strict"; // Do NOT remove this directive!

var x, y, cheeseEating, doorUnlocked, gx, gy, lv, died, positiontracking;

PS.audioLoad( "eat", {path : "audio/"});

//Hamster positions
x = 0;
y = 0;

gx = 0;//border width
gy = 0;//border height

lv = 1;//level (set to test different levels without going through the other levels)

died = false;

cheeseEating = false;
doorUnlocked = false;

positiontracking = false; //A debug command. Will show the position of the hamster if enabled. Make true to activate

PS.waitAFew = function() {
PS.BeginLevel();
}

PS.cheeseFound = function(hamx, hamy) {
	PS.statusText( "Yum Yum Cheese! (Press Enter to continue)" );
	PS.color( PS.ALL, PS.ALL, 224, 224, 0 );

	for (var i = 0; i < PS.random(15); i++){
	PS.color( PS.random(gx)-1, PS.random(gy)-1, 10, 10, 0);
	}

	PS.color( hamx, hamy, PS.COLOR_ORANGE );
	cheeseEating = true;
}


PS.BeginLevel = function() {
	cheeseEating = false;
	doorUnlocked = false

	switch(lv){
		case 0:
			PS.Win();
			break;
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
		case 6:
			PS.Level6();
			break;
		case 7:
			PS.Level7();
			break;
		case 8:
			PS.Level8();
			break;			
		default:
			PS.Win();
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

	}else if (PS.color( newX, newY ) != PS.COLOR_BLACK && PS.color( newX, newY ) != PS.COLOR_RED){
		if (PS.color( newX, newY ) == PS.COLOR_GRAY_LIGHT){
			doorUnlocked = true;
			PS.statusText( "Key Aquired!" );

		}


		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( newX, newY, PS.COLOR_ORANGE );
		x = newX;
		y = newY;

	}else if (PS.color (newX, newY) == PS.COLOR_RED){
		died = true;
		PS.BeginLevel()
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

	if (positiontracking == true){
		PS.statusText( x + ", " + y );
	}
}





//Level Sets

	/*Template for Levels

	PS.Level_ = function() {  //Level

		//Changes the text
		if (died == false){
		PS.statusText( "Level _" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}


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

		//Spike Blocks
		PS.color( _, _, PS.COLOR_RED );

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

	PS.Level1 = function() {  //Level 1

		//Changes the text
		PS.statusText( "Level 1: Craving Chedda" );

		
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


		PS.Level2 = function() { //Level 2

		//Changes the text
		PS.statusText( "Level 2: Another Brick in the Wall" );

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


	PS.Level3 = function() { //Level 3

		//Changes the text
		PS.statusText( "Level 3: The Key to Success" );

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
		PS.color( 6, 3, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 6, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}

	
		PS.Level4 = function() {  //Level 4
	
		//Changes the text
		PS.statusText( "Level 4: Side-to-Side" );

		//Changes the grid size
		gx = 7;
		gy = 3;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Maze Walls
		PS.color( 3, 1, PS.COLOR_BLACK );

		//Cheese Position
		PS.color( 5, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );

		PS.color( 0, 1, PS.COLOR_WHITE );
		PS.color( 6, 1, PS.COLOR_WHITE );
	}

		PS.Level5 = function() { //Level 5

		//Changes the text
		PS.statusText( "Level 5: Four Square" );

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

		PS.Level6 = function() {  //Level 6

		//Changes the text
		if (died == false){
		PS.statusText( "Level 6: Red Dead Redemption" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}
		//Changes the grid size
		gx = 15;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 7, PS.ALL, PS.COLOR_RED );
		PS.color( 7, 2, PS.COLOR_WHITE );

		//Cheese Position
		PS.color( 12, 2, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );

	}

	PS.Level7 = function() {  //Level 7

		//Changes the text
		if (died == false){
		PS.statusText( "Level 7: Secret Passage" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}
		//Changes the grid size
		gx = 15;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 7, PS.ALL, PS.COLOR_RED );

		//Cheese Position
		PS.color( 12, 2, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_RED );
		PS.color( 0, PS.ALL, PS.COLOR_RED );
		PS.color( PS.ALL, gy-1, PS.COLOR_RED );
		PS.color( gx-1, PS.ALL, PS.COLOR_RED );

				//Maze Walls
		PS.color( 0, 2, 150, 0, 0 );
		PS.color( 14, 2, 150, 0, 0 );
	}

	PS.Level8 = function() {  //Level 8

		//Changes the text
		if (died == false){
		PS.statusText( "Level 8: Pain." );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}


		//Changes the grid size
		gx = 20;
		gy = 20;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 2, 1, PS.COLOR_RED )		
		PS.color( 2, 2, PS.COLOR_RED );
		PS.color( 2, 3, PS.COLOR_RED );
		PS.color( 2, 4, PS.COLOR_RED );
		PS.color( 3, 4, PS.COLOR_RED );
		PS.color( 4, 4, PS.COLOR_RED );
		PS.color( 1, 6, PS.COLOR_RED );
		PS.color( 2, 6, PS.COLOR_RED );
		PS.color( 3, 6, PS.COLOR_RED );
		PS.color( 4, 2, PS.COLOR_RED );
		PS.color( 5, 6, PS.COLOR_RED );
		PS.color( 6, 1, PS.COLOR_RED );
		PS.color( 6, 3, PS.COLOR_RED );
		PS.color( 6, 4, PS.COLOR_RED );
		PS.color( 5, 7, PS.COLOR_RED );
		PS.color( 5, 8, PS.COLOR_RED );
		PS.color( 5, 7, PS.COLOR_RED );
		PS.color( 4, 8, PS.COLOR_RED );
		PS.color( 3, 8, PS.COLOR_RED );
		PS.color( 2, 8, PS.COLOR_RED );
		PS.color( 2, 9, PS.COLOR_RED );
		PS.color( 3, 9, PS.COLOR_RED );
		PS.color( 4, 9, PS.COLOR_RED );
		PS.color( 2, 12, PS.COLOR_RED );
		PS.color( 6, 9, PS.COLOR_RED );
		PS.color( 6, 10, PS.COLOR_RED );
		PS.color( 5, 12, PS.COLOR_RED );
		PS.color( 5, 13, PS.COLOR_RED );
		PS.color( 4, 13, PS.COLOR_RED );	
		PS.color( PS.ALL, 14, PS.COLOR_RED );
		PS.color( 7, 5, PS.COLOR_RED );
		PS.color( 7, 6, PS.COLOR_RED );
		PS.color( 7, 7, PS.COLOR_RED );
		PS.color( 7, 8, PS.COLOR_RED );
		PS.color( 17, 13, PS.COLOR_RED );
		PS.color( 15, 12, PS.COLOR_RED );
		PS.color( 13, 13, PS.COLOR_RED );
		PS.color( 11, PS.ALL, PS.COLOR_RED );
		PS.color( 7, 12, PS.COLOR_RED );
		PS.color( 9, 13, PS.COLOR_RED );
		PS.color( 9, 13, PS.COLOR_RED );
		PS.color( PS.ALL, 11, PS.COLOR_RED );
		PS.color( 8, 1, PS.COLOR_RED );
		PS.color( 8, 3, PS.COLOR_RED );
		PS.color( 9, 1, PS.COLOR_RED );
		PS.color( 9, 3, PS.COLOR_RED );
		PS.color( 10, 2, PS.COLOR_RED );
		PS.color( 8, 5, PS.COLOR_RED );
		PS.color( 9, 5, PS.COLOR_RED );
		PS.color( 9, 7, PS.COLOR_RED );
		PS.color( 9, 8, PS.COLOR_RED );
		PS.color( 9, 9, PS.COLOR_RED );
		PS.color( 8, 9, PS.COLOR_RED );
		PS.color( 13, 4, PS.COLOR_RED );
		PS.color( 13, 5, PS.COLOR_RED );
		PS.color( 13, 6, PS.COLOR_RED );
		PS.color( 13, 8, PS.COLOR_RED );
		PS.color( 12, 2, PS.COLOR_RED );
		PS.color( 13, 2, PS.COLOR_RED );
		PS.color( 14, 3, PS.COLOR_RED );
		PS.color( 15, 1, PS.COLOR_RED );
		PS.color( 15, 3, PS.COLOR_RED );
		PS.color( 14, 6, PS.COLOR_RED );
		PS.color( 15, 5, PS.COLOR_RED );
		PS.color( 15, 5, PS.COLOR_RED );
		PS.color( 13, 9, PS.COLOR_RED );
		PS.color( 14, 10, PS.COLOR_RED );
		PS.color( 16, 7, PS.COLOR_RED );
		PS.color( 15, 8, PS.COLOR_RED );
		PS.color( 15, 9, PS.COLOR_RED );
		PS.color( 17, 6, PS.COLOR_RED );
		PS.color( 17, 5, PS.COLOR_RED );
		PS.color( 17, 4, PS.COLOR_RED );
		PS.color( 17, 3, PS.COLOR_RED );
		PS.color( 17, 2, PS.COLOR_RED );
		PS.color( 17, 9, PS.COLOR_RED );
		PS.color( 9, 17, PS.COLOR_RED );
		PS.color( 9, 16, PS.COLOR_RED );
		PS.color( 8, 16, PS.COLOR_RED );
		PS.color( 7, 16, PS.COLOR_RED );
		PS.color( 5, 16, PS.COLOR_RED );
		PS.color( 5, 15, PS.COLOR_RED );
		PS.color( 4, 17, PS.COLOR_RED );
		PS.color( 4, 18, PS.COLOR_RED );
		PS.color( 5, 18, PS.COLOR_RED );
		PS.color( 6, 18, PS.COLOR_RED );
		PS.color( 7, 18, PS.COLOR_RED );
		PS.color( 4, 15, PS.COLOR_RED );
		PS.color( 3, 15, PS.COLOR_RED );
		PS.color( 2, 15, PS.COLOR_RED );
		PS.color( 12, 18, PS.COLOR_RED );
		PS.color( 13, 18, PS.COLOR_RED );
		PS.color( 14, 16, PS.COLOR_RED );
		PS.color( 13, 16, PS.COLOR_RED );
		PS.color( 15, 17, PS.COLOR_RED );
		PS.color( 15, 18, PS.COLOR_RED );
		PS.color( 17, 17, PS.COLOR_RED );
		PS.color( 17, 16, PS.COLOR_RED );
		PS.color( 2, 16, PS.COLOR_RED );

		//Door Position
		PS.color( 6, 2, PS.COLOR_GRAY);

		//Key
		PS.color( 6, 12, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 2, 17, PS.COLOR_YELLOW);
		PS.color( 10, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_RED );
		PS.color( 0, PS.ALL, PS.COLOR_RED );
		PS.color( PS.ALL, gy-1, PS.COLOR_RED );
		PS.color( gx-1, PS.ALL, PS.COLOR_RED );
		PS.color( 0, 13, 150, 0, 0 );
		PS.color( 11, 3, 150, 0, 0 );
		PS.color( 19, 13, PS.COLOR_WHITE );
		PS.color( 14, 0, PS.COLOR_WHITE );
		PS.color( 14, 19, PS.COLOR_WHITE );
		PS.color( 1, 11, PS.COLOR_WHITE );
		PS.color( 5, 11, PS.COLOR_WHITE );
		PS.color( 11, 3, 150, 0, 0 );
		PS.color( 11, 13, PS.COLOR_WHITE );
		PS.color( 11, 17, 150, 0, 0  );
		PS.color( 19, 6, 150, 0, 0  );
		PS.color( 0, 6, PS.COLOR_WHITE );
		PS.color( 19, 15, 150, 0, 0  );
		PS.color( 0, 15, 150, 0, 0  );
	}

	PS.Win = function() {  //Win Level

		//Changes the text
		PS.statusText( "You Won!" );

		//Changes the grid size
		gx = 5;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
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
	switch(lv){
		case 0:
			PS.Win();
			break;
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
		case 6:
			PS.Level6();
			break;
		case 7:
			PS.Level7();
			break;
		case 8:
			PS.Level8();
			break;			
		default:
			PS.Win();
			break;
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

	}else if (PS.color( newX, newY ) != PS.COLOR_BLACK && PS.color( newX, newY ) != PS.COLOR_RED){
		if (PS.color( newX, newY ) == PS.COLOR_GRAY_LIGHT){
			doorUnlocked = true;
			PS.statusText( "Key Aquired!" );

		}


		PS.color( oldX, oldY, PS.COLOR_WHITE );
		PS.color( newX, newY, PS.COLOR_ORANGE );
		x = newX;
		y = newY;

	}else if (PS.color (newX, newY) == PS.COLOR_RED){
		died = true;
		PS.BeginLevel()
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

	if (positiontracking == true){
		PS.statusText( x + ", " + y );
	}
}





//Level Sets

	/*Template for Levels

	PS.Level_ = function() {  //Level

		//Changes the text
		if (died == false){
		PS.statusText( "Level _" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}


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

		//Spike Blocks
		PS.color( _, _, PS.COLOR_RED );

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

	PS.Level1 = function() {  //Level 1

		//Changes the text
		PS.statusText( "Level 1: Craving Chedda" );

		
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


		PS.Level2 = function() { //Level 2

		//Changes the text
		PS.statusText( "Level 2: Another Brick in the Wall" );

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


	PS.Level3 = function() { //Level 3

		//Changes the text
		PS.statusText( "Level 3: The Key to Success" );

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
		PS.color( 6, 3, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 6, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
	}

	
		PS.Level4 = function() {  //Level 4
	
		//Changes the text
		PS.statusText( "Level 4: Side-to-Side" );

		//Changes the grid size
		gx = 7;
		gy = 3;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Maze Walls
		PS.color( 3, 1, PS.COLOR_BLACK );

		//Cheese Position
		PS.color( 5, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );

		PS.color( 0, 1, PS.COLOR_WHITE );
		PS.color( 6, 1, PS.COLOR_WHITE );
	}

		PS.Level5 = function() { //Level 5

		//Changes the text
		PS.statusText( "Level 5: Four Square" );

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

		PS.Level6 = function() {  //Level 6

		//Changes the text
		if (died == false){
		PS.statusText( "Level 6: Red Dead Redemption" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}
		//Changes the grid size
		gx = 15;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 7, PS.ALL, PS.COLOR_RED );
		PS.color( 7, 2, PS.COLOR_WHITE );

		//Cheese Position
		PS.color( 12, 2, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );

	}

	PS.Level7 = function() {  //Level 7

		//Changes the text
		if (died == false){
		PS.statusText( "Level 7: Secret Passage" );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}
		//Changes the grid size
		gx = 15;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 7, PS.ALL, PS.COLOR_RED );

		//Cheese Position
		PS.color( 12, 2, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_RED );
		PS.color( 0, PS.ALL, PS.COLOR_RED );
		PS.color( PS.ALL, gy-1, PS.COLOR_RED );
		PS.color( gx-1, PS.ALL, PS.COLOR_RED );

				//Maze Walls
		PS.color( 0, 2, 150, 0, 0 );
		PS.color( 14, 2, 150, 0, 0 );
	}

	PS.Level8 = function() {  //Level 8

		//Changes the text
		if (died == false){
		PS.statusText( "Level 8: Pain." );
		}else{
		PS.statusText( "Oof! You Died!" );
		died = false
			}


		//Changes the grid size
		gx = 20;
		gy = 20;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 1;
		y = 1;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Spike Blocks
		PS.color( 2, 1, PS.COLOR_RED )		
		PS.color( 2, 2, PS.COLOR_RED );
		PS.color( 2, 3, PS.COLOR_RED );
		PS.color( 2, 4, PS.COLOR_RED );
		PS.color( 3, 4, PS.COLOR_RED );
		PS.color( 4, 4, PS.COLOR_RED );
		PS.color( 1, 6, PS.COLOR_RED );
		PS.color( 2, 6, PS.COLOR_RED );
		PS.color( 3, 6, PS.COLOR_RED );
		PS.color( 4, 2, PS.COLOR_RED );
		PS.color( 5, 6, PS.COLOR_RED );
		PS.color( 6, 1, PS.COLOR_RED );
		PS.color( 6, 3, PS.COLOR_RED );
		PS.color( 6, 4, PS.COLOR_RED );
		PS.color( 5, 7, PS.COLOR_RED );
		PS.color( 5, 8, PS.COLOR_RED );
		PS.color( 5, 7, PS.COLOR_RED );
		PS.color( 4, 8, PS.COLOR_RED );
		PS.color( 3, 8, PS.COLOR_RED );
		PS.color( 2, 8, PS.COLOR_RED );
		PS.color( 2, 9, PS.COLOR_RED );
		PS.color( 3, 9, PS.COLOR_RED );
		PS.color( 4, 9, PS.COLOR_RED );
		PS.color( 2, 12, PS.COLOR_RED );
		PS.color( 6, 9, PS.COLOR_RED );
		PS.color( 6, 10, PS.COLOR_RED );
		PS.color( 5, 12, PS.COLOR_RED );
		PS.color( 5, 13, PS.COLOR_RED );
		PS.color( 4, 13, PS.COLOR_RED );	
		PS.color( PS.ALL, 14, PS.COLOR_RED );
		PS.color( 7, 5, PS.COLOR_RED );
		PS.color( 7, 6, PS.COLOR_RED );
		PS.color( 7, 7, PS.COLOR_RED );
		PS.color( 7, 8, PS.COLOR_RED );
		PS.color( 17, 13, PS.COLOR_RED );
		PS.color( 15, 12, PS.COLOR_RED );
		PS.color( 13, 13, PS.COLOR_RED );
		PS.color( 11, PS.ALL, PS.COLOR_RED );
		PS.color( 7, 12, PS.COLOR_RED );
		PS.color( 9, 13, PS.COLOR_RED );
		PS.color( 9, 13, PS.COLOR_RED );
		PS.color( PS.ALL, 11, PS.COLOR_RED );
		PS.color( 8, 1, PS.COLOR_RED );
		PS.color( 8, 3, PS.COLOR_RED );
		PS.color( 9, 1, PS.COLOR_RED );
		PS.color( 9, 3, PS.COLOR_RED );
		PS.color( 10, 2, PS.COLOR_RED );
		PS.color( 8, 5, PS.COLOR_RED );
		PS.color( 9, 5, PS.COLOR_RED );
		PS.color( 9, 7, PS.COLOR_RED );
		PS.color( 9, 8, PS.COLOR_RED );
		PS.color( 9, 9, PS.COLOR_RED );
		PS.color( 8, 9, PS.COLOR_RED );
		PS.color( 13, 4, PS.COLOR_RED );
		PS.color( 13, 5, PS.COLOR_RED );
		PS.color( 13, 6, PS.COLOR_RED );
		PS.color( 13, 8, PS.COLOR_RED );
		PS.color( 12, 2, PS.COLOR_RED );
		PS.color( 13, 2, PS.COLOR_RED );
		PS.color( 14, 3, PS.COLOR_RED );
		PS.color( 15, 1, PS.COLOR_RED );
		PS.color( 15, 3, PS.COLOR_RED );
		PS.color( 14, 6, PS.COLOR_RED );
		PS.color( 15, 5, PS.COLOR_RED );
		PS.color( 15, 5, PS.COLOR_RED );
		PS.color( 13, 9, PS.COLOR_RED );
		PS.color( 14, 10, PS.COLOR_RED );
		PS.color( 16, 7, PS.COLOR_RED );
		PS.color( 15, 8, PS.COLOR_RED );
		PS.color( 15, 9, PS.COLOR_RED );
		PS.color( 17, 6, PS.COLOR_RED );
		PS.color( 17, 5, PS.COLOR_RED );
		PS.color( 17, 4, PS.COLOR_RED );
		PS.color( 17, 3, PS.COLOR_RED );
		PS.color( 17, 2, PS.COLOR_RED );
		PS.color( 17, 9, PS.COLOR_RED );

		//Door Position
		PS.color( 6, 2, PS.COLOR_GRAY);

		//Key
		PS.color( 6, 12, PS.COLOR_GRAY_LIGHT);

		//Cheese Position
		PS.color( 2, 17, PS.COLOR_YELLOW);
		PS.color( 10, 1, PS.COLOR_YELLOW);

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_RED );
		PS.color( 0, PS.ALL, PS.COLOR_RED );
		PS.color( PS.ALL, gy-1, PS.COLOR_RED );
		PS.color( gx-1, PS.ALL, PS.COLOR_RED );
		PS.color( 0, 13, 150, 0, 0 );
		PS.color( 11, 3, 150, 0, 0 );
		PS.color( 19, 13, PS.COLOR_WHITE );
		PS.color( 14, 0, PS.COLOR_WHITE );
		PS.color( 14, 19, PS.COLOR_WHITE );
		PS.color( 1, 11, PS.COLOR_WHITE );
		PS.color( 5, 11, PS.COLOR_WHITE );
		PS.color( 11, 3, 150, 0, 0 );
		PS.color( 11, 13, PS.COLOR_WHITE );
		PS.color( 11, 17, PS.COLOR_WHITE );
	}

	PS.Win = function() {  //Win Level

		//Changes the text
		PS.statusText( "You Won!" );

		//Changes the grid size
		gx = 5;
		gy = 5;
		PS.gridSize(gx, gy);

		//Places the Hamter
		x = 2;
		y = 2;
		PS.color( x, y, PS.COLOR_ORANGE );

		//Borders
		PS.color( PS.ALL, 0, PS.COLOR_BLACK );
		PS.color( 0, PS.ALL, PS.COLOR_BLACK );
		PS.color( PS.ALL, gy-1, PS.COLOR_BLACK );
		PS.color( gx-1, PS.ALL, PS.COLOR_BLACK );
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



