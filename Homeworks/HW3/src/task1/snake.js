/*  */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var leftBorder = 0;
var topBorder = 0;
var rightBorder = canvas.width;
var bottomBorder = canvas.height;

/* Initializes the map with the canvas height, width with 0 */
var map = new Array(canvas.width);

for (var i = 0; i < map.length; i++) {
    map[i] = new Array(canvas.height);
}

for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[0].length; j++) {
        map[i][j] = 0;
    }
}

for (var i = 0; i < map.length; i++) {
    map[i][topBorder] = 1;
    map[i][bottomBorder] = 1;
}

for (var j = 0; i < map[0].length; j++) {
    map[leftBorder][j] = 1;
    map[rightBorder][j] = 1;
}

/* The enumerators for the snake's current direction movement */
const directions = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
}

canMove = true; // The snake can move initially
let direction = directions.RIGHT // initial direction
var x, y, currentTime, runner;

/* Snake's position at x and y */
x = 1;  
y = canvas.height / 2;

function startStop() {
  var button = document.getElementById("startStop");
  if (button.value == "Start" && canMove == true) {
    button.value = "Stop";
    button.innerHTML = "Stop";
    timer = setInterval(runner, 30);

    function runner() {
      switch (direction) {
        case directions.UP:
          up();
          break;
        case directions.DOWN:
          down();
          break;
        case directions.LEFT:
          left();
          break;
        case directions.RIGHT:
          right();
          break;
      }
      if (map[x][y] == 1) {
        clearInterval(timer);
        button.value = "Start";
        button.innerHTML = "Start";
        canMove = false;
      }
      map[x][y] = 1;
    }

  } else {
    clearInterval(timer);
    button.value = "Start";
    button.innerHTML = "Start";
  }
}

function turnLeft() {
  switch (direction) {
    case directions.UP:
      direction = directions.LEFT;
      break;
    case directions.DOWN:
      direction = directions.RIGHT;
      break;
    case directions.LEFT:
      direction = directions.DOWN
      break;
    case directions.RIGHT:
      direction = directions.UP
      break;
  }
}

function turnRight() {
  switch (direction) {
    case directions.UP:
      direction = directions.RIGHT;
      break;
    case directions.DOWN:
      direction = directions.LEFT;
      break;
    case directions.LEFT:
      direction = directions.UP
      break;
    case directions.RIGHT:
      direction = directions.DOWN
      break;
  }
}

function up() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - 1);
  y--;
  ctx.stroke();
}

function down() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 1);
  y++;
  ctx.stroke();
}

function left() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 1, y);
  x--;
  ctx.stroke();
}

function right() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 1, y);
  x++;
  ctx.stroke();
}