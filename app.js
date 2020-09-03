console.log("= = = Prepare to Launch! = = =");

const upArrow = 38; 
const downArrow = 40;

let position = 240;
const $raccoon = $("#raccoon")
    console.log($raccoon);



// read about jquery Position
// need a default position (like in css with top) established in jquery


function moveRaccoon() {
    $("body").on("keydown", function(event) {

        if(event.originalEvent.keyCode === upArrow) {
            console.log("Hello! I am the UP arrow!")
            if(position > 0) {
                 $("#raccoon").css("top", `${position-=20}px`)
            }
            
        }

        if(event.originalEvent.keyCode === downArrow) {
            console.log("Hello! I am the DOWN arrow!")
            if(position < 300) {
                $("#raccoon").css("top", `${position+=20}px`)
            }
        }
    })
}

$(document).ready(moveRaccoon);


function getObsCoord() {
    const $car = $("#car").position();
    const $tree = $("#tree").position();
    const $drone = $("#drone").position();
    const $balloonMonkey = $("#balloonMonkey").position();
    const $flyingPig = $("#flyingPig").position();
    const $airplane = $("#airplane").position();

}

let isCollided = false;
while (!isCollided) {
    const racPosition = $raccoon.position();
    const $car = $("#car").position();
        console.log(racPosition, $car);
    if(racPosition.left === $car.left) {

        isCollided = true;
    }
    isCollided = true 
}



// create function to create an element, put it on page, and move it - from right side to left side of page 


// obstacle 12and3 and randomly generate
// make sure obstacles don't generate on top of each other (timers?)
// background position (background)

// grab elements and check coordinates 

// get all coordinates functions, running all the time, checking item locations 

// research 2d collision detection in jquery (mdm 2d collision)

// 