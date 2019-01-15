/* ========================================================================================
Objects
==========================================================================================*/
var rover = {
  direction: 'N', //default direction will be North
  x: 0,
  y: 0,
  travelLog: [    //2d array that will be ammended every time coordinates of rover change
    [0,0]         //Each array within the array holds the x-y coordinates
  ]               //Initializes at [0,0]
};

var obstacles = {
  pyramid: [3,4],
  cave: [2,0],
  lake: [5,7],
  manbearpig: [9,9]
}

var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['cave', 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 'pyramid', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'lake', 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 'manbearpig']
];

/* ========================================================================================
Custom Print Functions
==========================================================================================*/

function printRover() {     //Output Rover's current direction and coordinates
  console.log(rover);
}

function pushTravelLog() {
  rover.travelLog.push([rover.x, rover.y]);  //Log current x/y coordinates into travelLog
}                                            //each time the rover moves

function printTravelLog(){          //Output the travelLog
  console.log(rover.travelLog);  
}

/* ========================================================================================
User Messages
==========================================================================================*/

function invalidCommandMessage() {
  console.log("is not a valid command. Valid commands are 'f' (move forward), 'b' (move backward), 'r' (turn right), and 'l' (turn left).");
}

function boundaryMessage() {
  console.log("You've reached a boundary! You shall not pass!");
}

function lakeMessage() {
  console.log("There's a lake of blue paint up ahead. You almost blue yourself!");
}

function manBearPigMessage() {
  console.log("You found ManBearPig! Time to get cereal about Galactic Warming.")
}

function pyramidMessage() {
  console.log("Woah, a pyramid! I wonder how this got here?");
}

function caveMessage() {
  console.log("You found the 'Cave of the Winds'. Legend has it a monster lives inside. DO NOT ENTER!");
}

/* ========================================================================================
Movement Functions
==========================================================================================*/

function turnLeft() {                  //function will check current direction
  console.log("turnLeft was called!"); //rover is facing, turn left, and log coordinates

  switch (rover.direction) {
    case 'N':
      rover.direction  = 'W';
      break;

    case 'S':
      rover.direction  = 'E';
      break;

    case 'E':
      rover.direction  = 'N';
      break;

    case 'W':
      rover.direction  = 'S';
      break;
  }
}

function turnRight() {                   //function will check current direction
  console.log("turnRight was called!");  //rover is facing, turn right, and log coordinates
  
  switch (rover.direction) {
    case 'N':
      rover.direction  = 'E';
      break;

    case 'S':
      rover.direction  = 'W';
      break;

    case 'E':
      rover.direction  ='S';
      break;

    case 'W':
      rover.direction  = 'N';
      break;
  }
}

/*---------------------------------Original function before implementing boundaries

function moveForward() {                  //function will check current direction
  console.log("moveForward was called");  //rover is facing and move forward one space

  switch (rover.direction) {
    case 'N':
      rover.y -= 1;
      break;
    
    case 'S':
      rover.y += 1;
      break;

    case 'E':
      rover.x += 1;
      break;

    case 'W':
      rover.x -= 1;
      break;
  }
  pushTravelLog();
}

--------------------------------------- Working moveForward function with boundaries
function moveForward() {                  //function will check current direction
  console.log("moveForward was called!");  //rover is facing and move forward one space

  switch (rover.direction) {
    case 'N':
      if (rover.y > 0){             //if statement is implementing boundaries that will keep
        rover.y -= 1;               //rover on the grid (x & y values between 0-9)
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'S':
      if (rover.y < 9){
        rover.y += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'E':
      if (rover.x < 9){
        rover.x += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'W':
      if (rover.x > 0){
        rover.x -= 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;
  }
}
---------------------------------------------*/
function moveForward() {                  //function will check current direction
  console.log("moveForward was called!");  //rover is facing and move forward one space

  switch (rover.direction) {
    case 'N':
      if (rover.y > 0){             //if statement is implementing boundaries that will keep
        rover.y -= 1;               //rover on the grid (x & y values between 0-9)
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'S':
      if (rover.y < 9){
        rover.y += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'E':
      if (rover.x < 9){
        rover.x += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'W':
      if (rover.x > 0){
        rover.x -= 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;
  }
}

function moveBackward() {                  //function will check current direction
  console.log("moveBackward was called!");  //rover is facing and move backward one space

  switch (rover.direction) {
    case 'N':
      if (rover.y < 9){
        rover.y += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'S':
      if (rover.y > 0){             //if statement is implementing boundaries that will keep
        rover.y -= 1;               //rover on the grid (x & y values between 0-9)
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'E':
      if (rover.x > 0){
        rover.x -= 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;

    case 'W':
      if (rover.x < 9){
        rover.x += 1;
        pushTravelLog();
      } else {
        boundaryMessage();
      }
      break;
  }
}

/* ========================================================================================
Quick Commands Function
==========================================================================================*/

function commands(str) {                      //function will receive a string as imput,
  for (var i = 0; i < str.length; i += 1){    //loop through string,and execute each command
    switch (str.charAt(i)) {
      case 'f':
        moveForward();
        break;
      
      case 'b':
        moveBackward();
        break;  

      case 'r':
        turnRight();
        break;
  
      case 'l':
        turnLeft();
        break;
      
      default:                                //Invalid input message
        console.log("'" + str.charAt(i) + "' " + "is not a valid command. Valid commands are 'f' (move forward), 'b' (move backward), 'r' (turn right), and 'l' (turn left).");

      /*----------------Message not ouptutting correctly!
      default:                                //Invalid input message
        console.log("'" + str.charAt(i) + "' " + invalidCommandMessage());
      */
    }
  }
  printTravelLog();
}
