/*
 I used the P5.js library to create this very simple cat game; the character design is my own,
 although some of the code game came from the Introduction to Programming I course, namely the usage of the
 scroll position in order to keep the character contained within a certain range.

 However, the idea of keeping the score to 500 and resetting the game based on that is entirely
 my own idea. I coded this site on the online editor of the pj5 site (https://editor.p5js.org/).

   [14] P5Js, P5js, 2020. Online].Available: https://p5js.org/libraries/.[Accessed: 10-September-2020]
   [15] Introduction to Programming I, ITIP1, 2020. Online].
   Available: https://www.coursera.org/learn/uol-introduction-to-programming-1/home/welcome.
   [Accessed: 10-September-2020]

*/

//position variables
let floor_pos_y;
let is_left;
let is_right;
let scroll_position = 0;

//game score
let game_score;

//cat coordinates
let cat_x;
let cat_y;

//arrays
let mice;
let eyes;

//setup function
function setup() {
  createCanvas(400, 400);

  //position/boolean variables
  is_left = false;
  is_right = false;

  //cat character coordinates
  cat_x = 50;
  cat_y = 320;

  //mouse coordinates
  mouse_y = 325;

  /*
	 game score set to 0 so that player
	 can start the game with a carte blanche
	*/
  game_score = 0;

  /*
	 Initialise mice objects within the mouse array.
	 The x position is different for each mouse while the y position remains static
	 due to the mice staying on the ground.
	*/
  mice = [{
      x_pos: 150,
      y_pos: mouse_y
    },
    {
      x_pos: 250,
      y_pos: mouse_y
    },
    {
      x_pos: 340,
      y_pos: mouse_y
    }

  ];

  /*
		Initialise eyes for the wider mice eyes array.
		The x position for each eye on the left side is incremented by
		five, so that the eyes display properly for each side.
		The y position for each eye remains static.
	*/
  eyes = [{
      x_pos: 150,
      y_pos: mouse_y
    },
    {
      x_pos: 150 + 5,
      y_pos: mouse_y
    },
    {
      x_pos: 250,
      y_pos: mouse_y
    },
    {
      x_pos: 250 + 5,
      y_pos: mouse_y
    },
    {
      x_pos: 340,
      y_pos: mouse_y
    },
    {
      x_pos: 340 + 5,
      y_pos: mouse_y
    }

  ];
}

//Draw function
function draw() {

  //sky
  background("#a2d5f2");
  noStroke();

  //display cloud
  fill("ghostwhite");

  ellipse(100, 40, 80, 25);
  ellipse(110, 40, 150, 65);
  ellipse(120, 50, 180, 55);
  ellipse(150, 50, 180, 55);

  //ground
  fill("#bfdcae");
  rect(0, 350, width, 50);

  //Draw the cat's face
  fill("#faf3dd");
  ellipse(cat_x, cat_y, 50, 50);

  //Draw the cat's eyes
  stroke("#e11d74");
  strokeWeight(5);
  point(cat_x - 10, cat_y - 2);
  point(cat_x + 10, cat_y - 2);

  //Draw the cat's whiskers
  stroke("#440047");
  strokeWeight(2);

  beginShape(LINES);
  vertex(cat_x - 25, cat_y + 8);
  vertex(cat_x - 10, cat_y + 8);
  endShape();

  beginShape(LINES);
  vertex(cat_x - 25, cat_y + 15);
  vertex(cat_x - 10, cat_y + 15);
  endShape();

  beginShape(LINES);
  vertex(cat_x + 25, cat_y + 8);
  vertex(cat_x + 10, cat_y + 8);
  endShape();

  beginShape(LINES);
  vertex(cat_x + 25, cat_y + 15);
  vertex(cat_x + 10, cat_y + 15);
  endShape();

  //Draw the mice
  for (let i = 0; i < mice.length; i++) {

    //mouse body
    fill("#d6e0f0");
    ellipse(mice[i].x_pos, mice[i].y_pos, 20, 20);
    mouseFound(mice[i]);


  }

  //draw the mice' eyes
  for (let j = 0; j < eyes.length; j++) {
    stroke("#8d93ab");
    strokeWeight(2);
    point(eyes[j].x_pos, eyes[j].y_pos);
    mouseFound(eyes[j]);


  }

  //Display game score
  fill(0, 0, 0);
  noStroke();

  textSize(10);
  textFont('Helvetica');
  text("Score: " + game_score, 300, 20);

  //Make sure that the ground stays green
  fill("#bfdcae");

  //Move the character, ensuring that the
  //character stays within the canvas
  if (is_left) {
    if (cat_x > width * 0.2) {
      cat_x -= 10;
    } else {
      scroll_position += 10;
    }
  }

  if (is_right) {
    if (cat_x < width * 0.8) {
      cat_x += 10;
    } else {
      scroll_position -= 10;
    }
  }
}

//Key pressed function
function keyPressed() {

  //if this key is pressed, then the cat moves
  //to the left
  if (key == 'A' || keyCode == 37) {
    is_left = true;
  }

  //if this key is pressed, then the cat moves
  //to the right
  if (key == 'D' || keyCode == 39) {
    is_right = true;
  }
}

function keyReleased() {
  if (key == 'A' || keyCode == 37) {
    is_left = false;
  }

  if (key == 'D' || keyCode == 39) {
    is_right = false;
  }
}

//Found mouse function
function mouseFound(mouse) {

  let distance;

  //calculate distance based on the mouse and cat position(s)
  distance =
    int(dist(mouse.x_pos, mouse.y_pos, cat_x, cat_y));

  //if distance is equal to twenty
  //then incrememt the game score by one
  if (distance == 20) {
    game_score += 1;
  }

  //reset the game score to 0 once
  //the player hits 500
  if (game_score == 500) {
    game_score = 0;
    setup();
  }
}