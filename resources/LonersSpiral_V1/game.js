/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

var lonerImage, lonerSprite, spiralImage, spiralSprite, lifeCube, x, y, debugOn, canMove, menuIndex, sanityHP, enemyHealth, gameOver, healsLeft;
/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

debugOn = false;
canMove = false;
gameOver = false;
menuIndex = 0;
sanityHP = 100;
enemyHealth = 300;
healsLeft = 3;



PS.init = function( system, options ) {
	PS.gridSize( 32, 32 );
	PS.statusText("Sanity: "+sanityHP+"/100         "+ " Enemy Health: "+enemyHealth+"/300");

	PS.glyph( 1, 27, 70 );//F
	PS.glyphColor( 1, 27, PS.COLOR_WHITE );
	PS.glyph( 2, 27, 73 );//I
	PS.glyphColor( 2, 27, PS.COLOR_WHITE );
	PS.glyph( 3, 27, 71 );//G
	PS.glyphColor( 3, 27, PS.COLOR_WHITE );
	PS.glyph( 4, 27, 72 );//H
	PS.glyphColor( 4, 27, PS.COLOR_WHITE );
	PS.glyph( 5, 27, 84 );//T
	PS.glyphColor( 5, 27, PS.COLOR_WHITE );
	PS.glyph( 6, 27, 60 );//<
	PS.glyphColor( 6, 27, PS.COLOR_WHITE );
	PS.glyphAlpha( 6, 29, 1 );


	PS.glyph( 1, 29, 73 );//I
	PS.glyphColor( 1, 29, PS.COLOR_WHITE );
	PS.glyph( 2, 29, 84 );//T
	PS.glyphColor( 2, 29, PS.COLOR_WHITE );
	PS.glyph( 3, 29, 69 );//E
	PS.glyphColor( 3, 29, PS.COLOR_WHITE );
	PS.glyph( 4, 29, 77 );//M
	PS.glyphColor( 4, 29, PS.COLOR_WHITE );
	PS.glyph( 6, 29, 60 );//<
	PS.glyphColor( 6, 29, PS.COLOR_WHITE );
	PS.glyphAlpha( 6, 29, 0 );

		PS.glyph( 1, 31, 72 );//H
	PS.glyphColor( 1, 31, PS.COLOR_WHITE );
	PS.glyph( 2, 31, 69 );//E
	PS.glyphColor( 2, 31, PS.COLOR_WHITE );
	PS.glyph( 3, 31, 65 );//A
	PS.glyphColor( 3, 31, PS.COLOR_WHITE );
	PS.glyph( 4, 31, 76 );//L
	PS.glyphColor( 4, 31, PS.COLOR_WHITE );
	PS.glyph( 5, 31, 51 );//3
	PS.glyphColor( 5, 31, PS.COLOR_WHITE );
	PS.glyph( 6, 31, 60 );//<
	PS.glyphColor( 6, 31, PS.COLOR_WHITE );
	PS.glyphAlpha( 6, 31, 0 );

	x = 15;
	y = 15;

	PS.borderAlpha ( PS.ALL, PS.ALL, 0 )
	PS.border ( PS.ALL, PS.ALL, 0 )
	PS.color( PS.ALL, PS.ALL, PS.COLOR_BLACK);
	PS.gridColor( PS.COLOR_BLACK)
	PS.gridShadow ( true, PS.COLOR_BLACK );
	PS.statusColor(PS.COLOR_WHITE);


	//Loner Initiation
	PS.imageLoad( "assets/images/lonerSprites/L1.png", function (data) {
 	lonerImage = data; 

 	lonerSprite = PS.spriteImage( lonerImage );

 	PS.spriteMove( lonerSprite, 0, 15 );
	} );


	//Spiral Initiation
	PS.imageLoad( "assets/images/spiralSprites/S1.png", function (data) {
 	spiralImage = data; 

 	spiralSprite = PS.spriteImage( spiralImage );

 	PS.spriteMove( spiralSprite, 21, 15 );
	} );


	// //Lifecube initiation
	// lifeCube = PS.spriteSolid(1,1);
	// PS.spriteSolidColor(lifeCube, PS.COLOR_WHITE)
	// PS.spritePlane(lifeCube, 2)
	// PS.spriteMove( lifeCube, x, y );

	PS.enemyAttacks = function (){
	var didithit = PS.random(4);
		if (didithit > 1){
			sanityHP = sanityHP - PS.random(50);
			if (sanityHP < 1){
			gameOver = true;
			PS.gridSize(31, 31);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			PS.color(PS.ALL, PS.ALL, PS.COLOR_BLACK);
			PS.statusText("You spiral into darkness.");
			PS.borderAlpha ( PS.ALL, PS.ALL, 0 )
			PS.border ( PS.ALL, PS.ALL, 0 )
			PS.color( PS.ALL, PS.ALL, PS.COLOR_BLACK);
			PS.gridColor( PS.COLOR_BLACK)
			PS.gridShadow ( true, PS.COLOR_BLACK );
			PS.statusColor(PS.COLOR_WHITE);
			}else {
			PS.statusText("Sanity: "+sanityHP+"/100         "+ " Enemy Health: "+enemyHealth+"/300");
			}

		} else {
			PS.statusText("Sanity: "+sanityHP+"/100 (Miss!) "+ " Enemy Health: "+enemyHealth+"/300");
		}
	}

	

	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	// PS.statusText( "Game" );

	// Add any other initialization code you need here.
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

PS.menuFunction = function () {
	PS.glyphAlpha( 6, PS.ALL, 0 );
	switch (menuIndex) {
		case 0:
			PS.glyphAlpha( 6, 27, 225 );
			break;
		case 1:
			PS.glyphAlpha( 6, 29, 225 );
			break;
		case 2:
			PS.glyphAlpha(6,31,225);
			break;
	}
}

PS.keyDown = function( key, shift, ctrl, options ) {

	if (gameOver == false){
	if ((key == PS.KEY_ARROW_RIGHT || key == 100) && x<31 && canMove == true) {
		x = x+1;
		PS.spriteMove( lifeCube, x, y );
	}

		if ((key == PS.KEY_ARROW_LEFT || key == 97)&& x>0 && canMove == true) {
		x = x-1;
		PS.spriteMove( lifeCube, x, y );
	}

			if ((key == PS.KEY_ARROW_UP || key == 119)&& y>0 && canMove == true) {
		y = y-1;
		PS.spriteMove( lifeCube, x, y );
	} else if ((key == PS.KEY_ARROW_UP || key == 119)&& canMove == false && menuIndex > 0){
		menuIndex = menuIndex - 1;
		PS.menuFunction();
	}

			if ((key == PS.KEY_ARROW_DOWN || key == 115)&& y<31 && canMove == true) {
		y = y+1;
		PS.spriteMove( lifeCube, x, y );

	} else if ((key == PS.KEY_ARROW_DOWN || key == 115) && canMove == false && menuIndex < 2){
		menuIndex = menuIndex + 1;
		PS.menuFunction();
	}

	if (debugOn == true){
		PS.statusText("Cords: ("+x + ", " + y + ") Menu Index: " + menuIndex);
	}


	if (key == PS.KEY_ENTER  &&  canMove == false) {
		switch (menuIndex) {
			case 0:
			enemyHealth = enemyHealth - PS.random(50);
			PS.statusText("Sanity: "+sanityHP+"/100    "+ " Enemy Health: "+enemyHealth+"/300");
				break;
			case 1:
			sanityHP = sanityHP + PS.random(50);
			if (sanityHP > 100){
				sanityHP = 100;
			}
			PS.statusText("Sanity: "+sanityHP+"/100    "+ " Enemy Health: "+enemyHealth+"/300");
				break;
			case 2:
				if (healsLeft > 0){
				sanityHP = 100;
				PS.statusText("Sanity: "+sanityHP+"/100    "+ " Enemy Health: "+enemyHealth+"/300");
				healsLeft = healsLeft - 1;
				
				PS.glyph( 5, 31, healsLeft +48 );
				PS.glyphColor( 5, 31, PS.COLOR_WHITE );
				} else {
							PS.glyph( 1, 31, 72 );//H
							PS.glyphColor( 1, 31, PS.COLOR_RED );
							PS.glyph( 2, 31, 69 );//E
							PS.glyphColor( 2, 31, PS.COLOR_RED );
							PS.glyph( 3, 31, 65 );//A
							PS.glyphColor( 3, 31, PS.COLOR_RED );
							PS.glyph( 4, 31, 76 );//L
							PS.glyphColor( 4, 31, PS.COLOR_RED );
							PS.glyph( 6, 31, 60 );//<
							PS.glyphColor( 6, 31, PS.COLOR_RED );
				}
		}
	if (enemyHealth > 0){
	PS.enemyAttacks();
	}
	}

	if (enemyHealth < 1){
	PS.statusText("You Find Clarity. You win.");
	gameOver = true;
	PS.spriteShow(spiralSprite, false);
	PS.glyphAlpha(PS.ALL, PS.ALL, 0);
	};
}
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
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

