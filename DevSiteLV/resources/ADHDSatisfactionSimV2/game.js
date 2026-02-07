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

var rVar = 0; //set to event value to test events
var songMT = "";
var clickable = true;
var active = true;

var MTloader = function ( result ) {
 songMT = result.channel; // save ID

};

PS.TimedActivation = function (){active = true; PS.timerStop}
PS.audioLoad( "fx_click" ); //loads the click sound
PS.audioLoad("Cool_Mixtape", {path : "audio/", loop : true, onLoad : MTloader});

var randomcolor = function(x, y, data, options ) {
	 		var r, g, b;
		r = PS.random(256) - 1; // random red 0-255
 		g = PS.random(256) - 1; // random green
 		b = PS.random(256) - 1; // random blue
 		PS.color( x, y, r, g, b ); // set bead color
};



PS.init = function( system, options ) {
	

	PS.gridSize( 1, 1 );
	randomcolor(0,0)
	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Click to Satisfy Your ADHD" );

	// Add any other initialization code you need here.
};





var chanceValue = 30; //change value inside brackets to change the chance of getting events



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
if (active == true){
	//Event1 -- banana
if (rVar == 1){
		randomcolor(x,y)
	rVar = 101;
	PS.statusText( "STOP EVERYTHING! GET THE BANANA BLOCK!");
	PS.audioPlayChannel(songMT);

	//Banana
	PS.color( 0, 0, 248, 216, 8 );
	PS.gridSize( 15, 17 );

	PS.color( 10, 1, 11, 11, 59 );
	PS.color( 9, 1, 11, 11, 59 );

	PS.color( 9, 2, 11, 11, 59 );
	PS.color( 10, 2, 11, 11, 59 );
	PS.color( 11, 2, 11, 11, 59 );

	PS.color( 9, 3, 11, 11, 59 );
	PS.color( 12, 3, 11, 11, 59 );

	PS.color( 9, 4, 11, 11, 59 );
	PS.color( 13, 4, 11, 11, 59 );

	PS.color( 9, 5, 11, 11, 59 );
	PS.color( 13, 5, 11, 11, 59 );


	PS.color( 9, 6, 11, 11, 59 );
	PS.color( 14, 6, 11, 11, 59 );

	PS.color( 8, 7, 11, 11, 59 );
	PS.color( 14, 7, 11, 11, 59 );

	PS.color( 7, 8, 11, 11, 59 );
	PS.color( 14, 8, 11, 11, 59 );

	PS.color( 6, 9, 11, 11, 59 );
	PS.color( 14, 9, 11, 11, 59 );

	PS.color( 4, 10, 11, 11, 59 );
	PS.color( 5, 10, 11, 11, 59 );
	PS.color( 13, 10, 11, 11, 59 );

	PS.color( 0, 11, 11, 11, 59 );
	PS.color( 1, 11, 11, 11, 59 );
	PS.color( 2, 11, 11, 11, 59 );
	PS.color( 3, 11, 11, 11, 59 );
	PS.color( 13, 11, 11, 11, 59 );

	PS.color( 0, 12, 11, 11, 59 );
	PS.color( 12, 12, 11, 11, 59 );

	PS.color( 0, 13, 11, 11, 59 );
	PS.color( 11, 13, 11, 11, 59 );

	PS.color( 1, 14, 11, 11, 59 );
	PS.color( 2, 14, 11, 11, 59 );
	PS.color( 10, 14, 11, 11, 59 );
	PS.color( 11, 14, 11, 11, 59 );

	PS.color( 3, 15, 11, 11, 59 );
	PS.color( 4, 15, 11, 11, 59 );
	PS.color( 5, 15, 11, 11, 59 );
	PS.color( 6, 15, 11, 11, 59 );
	PS.color( 7, 15, 11, 11, 59 );
	PS.color( 8, 15, 11, 11, 59 );
	PS.color( 9, 15, 11, 11, 59 );

	//I wrote way too much for the banana design lmao


} else if (rVar == 101){ //resets the banana after clicking again
	PS.gridSize( 1, 1 );
	PS.color( 0, 0, 248, 216, 8 );
	rVar = PS.random(chanceValue);
	PS.statusText( "Potassium.");
	PS.audioStop(songMT);
	PS.audioPlay( "snd_item", {path : "audio/"});
}

	//Event2 -- fard
else if(rVar == 2)
{
	PS.color( 0, 0, 66, 37, 7 );
	PS.statusText( "Scuse' me");
	PS.audioPlay( "Fard", {path : "audio/"});
	rVar = PS.random(chanceValue);
} 

	//Event3 -- splat
else if(rVar == 3)
{
	PS.color( 0, 0, 64, 95, 128 );
	PS.statusText( ":)");
	PS.audioPlay( "Splat", {path : "audio/"});
	rVar = PS.random(chanceValue);
} 

	//Event 4 -- buzzer
else if(rVar == 4)
{
	PS.color( 0, 0, 225, 0, 0 );
	PS.statusText( "EVENT_ERROR");
	PS.audioPlay( "buzzer", {path : "audio/"});
	rVar = PS.random(chanceValue);
} 

	//Event 5 -- cube pusher
else if(rVar == 5)//move1
{
	PS.statusText( "Move the cube!");
	clickable = false;
	PS.gridSize( 5, 1 );
	PS.color( 0, 0, 225, 0, 0 );
	rVar = 1050;
} 
else if(rVar == 1050 && x == 0)//move2
{
	PS.color( 0, 0, 225, 225, 225 );
	PS.color( 1, 0, 225, 0, 0 )
	rVar = 1051;
	PS.audioPlay( "Squeak", {path : "audio/"});
} 
else if(rVar == 1051 && x == 1)//move3
{
	PS.color( 1, 0, 225, 225, 225 );
	PS.color( 2, 0, 225, 0, 0 );
	rVar = 1052;
	PS.audioPlay( "Squeak", {path : "audio/"});
} 
else if(rVar == 1052 && x == 2)//move4
{
	PS.color( 2, 0, 225, 225, 225 );
	PS.color( 3, 0, 225, 0, 0 );
	rVar = 1053;
	PS.audioPlay( "Squeak", {path : "audio/"});
} 
else if(rVar == 1053 && x == 3)//move5
{
	PS.color( 3, 0, 225, 225, 225 );
	PS.color( 4, 0, 225, 0, 0 );
	rVar = 1054;
	PS.audioPlay( "Squeak", {path : "audio/"});
	PS.audioPlay( "victory", {path : "audio/"});
	PS.statusText( "You did it!");
} 
else if(rVar == 1054)//finish
{
	PS.statusText( "Cube is happy!");
	PS.gridSize( 1, 1 );
	PS.color( 0, 0, 225, 0, 0 );
	PS.audioPlay( "fx_click");
	rVar = PS.random(chanceValue);
	clickable = true;
} 
	//Event 6 -- :)
else if(rVar == 6)
{
	PS.gridSize( 10, 10 );
	PS.color( PS.ALL, PS.ALL, PS.COLOR_BLACK );
	PS.gridColor(PS.COLOR_BLACK);
	PS.statusText("");
	rVar = 0;
	
	PS.radius ( 2, 2, 50 );
	PS.color( 2, 2, PS.COLOR_RED );

	PS.radius ( 7, 2, 50 )
	PS.color( 7, 2, PS.COLOR_RED );

	PS.color( 2, 6, PS.COLOR_RED );
	PS.color( 3, 7, PS.COLOR_RED );
	PS.color( 4, 7, PS.COLOR_RED );
	PS.color( 5, 7, PS.COLOR_RED );
	PS.color( 6, 7, PS.COLOR_RED );
	PS.color( 7, 6, PS.COLOR_RED );
	PS.borderAlpha(PS.ALL, PS.ALL, 225);

	active = false;
	PS.timerStart(300, this.TimedActivation);
} 
//Event7 (unfinished)
// else if(rVar == 7)
// {
// 	var gn1 = PS.random(10)
// 	var rn1 = PS.random(10)
// 	var gn2 = PS.random(10)
// 	var rn2 = PS.random(10)

// 	PS.gridRefresh();
// 	PS.gridSize( 10, 10 );
// 	PS.color( PS.ALL, PS.ALL, 0, 0, 0);
// 	PS.color( gn1, gn2, 0, 225, 0 );
// 	PS.color( rn1, rn2, 225, 0, 0 );
// 	PS.statusText( "Pick the green cube!");
// 	PS.audioPlay( "Fard", {path : "audio/"});
// 	rVar = 7.1;
// 	clickable == false
// } 

// else if (PS.color == (gn1, gn2, 0, 225, 0) && rVar == 7.1 && clickable == false){
// 	PS.gridRefresh();
// 	PS.gridSize( 1, 1 );
// 	PS.audioPlay("fx_click");
// 	PS.color(0,0,PS.GREEN);
// 	rVar = 0;
// 	PS.statusText( "You clicked the right one!");
// 	clickable = true
// } 

// else if (PS.color == (gn1, gn2, 225, 0, 0) && rVar == 7.1 && clickable == false){
// PS.audioPlay("buzzer");
// PS.statusText( "WRONG");
// PS.shutdown
// }

//Event8 -- balloon
// else if(rVar == 8)
// {
// 	PS.color( 0, 0, 66, 37, 7 );
// 	PS.statusText( "Scuse' me");
// 	PS.audioPlay( "Fard", {path : "audio/"});
// 	rVar = PS.random(chanceValue);
// } 

	//Event9 -- the Green Event
else if(rVar == 9)
{
	PS.color( 0, 0, 0, 225, 0 );
	PS.statusText( "Wow! The Green Event!");
	PS.audioPlay( "greenevent", {path : "audio/"});
	PS.gridColor(PS.COLOR_GREEN);
	active = false;
	PS.timerStart(1900, this.TimedActivation);
	rVar = 0;
	
	
} 
	//Default Event
else if (clickable == true){
	PS.gridRefresh();
	PS.gridSize( 1, 1 );
	PS.audioPlay("fx_click");
	randomcolor(0,0);
	rVar = PS.random(chanceValue);
	PS.statusText( "Satisfaction.");


};
}
}

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

