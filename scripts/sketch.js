/*
 I used the P5.js library to create this very simple cat game; the character design is my own,
 although some of the code game from the Introduction to Programming I course, namely the usage of the
 scroll position in order to keep the character contained within a certain range.

   [14] P5Js, P5js, 2020. Online].Available: https://p5js.org/libraries/.[Accessed: 10-September-2020]
   [15] Introduction to Programming I, ITIP1, 2020. Online].
   Available: https://www.coursera.org/learn/uol-introduction-to-programming-1/home/welcome.
   [Accessed: 10-September-2020]

*/

//global variables
var floor_pos_y;
var is_left;
var is_right;
var scroll_position = 0;

//cat coordinates
var cat_x;
var cat_y;

function setup() {
  createCanvas(400, 400);

  //position variables
  is_left = false;
  is_right = false;

  //cat character coordinates
  cat_x = 50;
  cat_y = 320;
}

function draw() {

  //sky
  background("#a2d5f2");
  noStroke();

  //clouds
  fill("ghostwhite");

  ellipse(100, 40, 80, 25);
  ellipse(110, 40, 150, 65);
  ellipse(120, 50, 180, 55);
  ellipse(150, 50, 180, 55);

  //ground
  fill("#bfdcae");
  rect(0, 350, width, 50);

  //face
  fill("#faf3dd");
  ellipse(cat_x, cat_y, 50, 50);

  //eyes
  stroke("#e11d74");
  strokeWeight(5);
  point(cat_x - 10, cat_y - 2);
  point(cat_x + 10, cat_y - 2);

  //whiskers
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

  //make sure that the ground stays green
  fill("#bfdcae");

  //move the character, ensuring that the
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

function keyPressed() {

  if (key == 'A' || keyCode == 37) {
    is_left = true;
  }

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