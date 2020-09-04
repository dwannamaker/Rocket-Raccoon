console.log("= = = Prepare to Launch! = = =");

const upArrow = 38; 
const downArrow = 40;

let position = 240;
const $raccoon = $(".raccoon").first()
    console.log($raccoon);



// read about jquery Position
// need a default position (like in css with top) established in jquery
function checkKey(event) {

    if(event.originalEvent.keyCode === upArrow) {
    //    console.log("Hello! I am the UP arrow!")
    //    console.log($raccoon.position());
        if(position > 0) {
             $(".raccoon").css("top", `${position-=20}px`)
        }
        
    }

    if(event.originalEvent.keyCode === downArrow) {
    //    console.log("Hello! I am the DOWN arrow!")
    //    console.log($raccoon.position());
        if(position < 300) {
            $(".raccoon").css("top", `${position+=20}px`)
        }
    }
}

function moveRaccoon() {
    $("body").on("keydown", checkKey)
}

$(document).ready(moveRaccoon);


function getObsCoord() {
    const $car = $(".car").position();
    // const $tree = $("#tree").position();
    // const $drone = $("#drone").position();
    // const $balloonMonkey = $("#balloonMonkey").position();
    // const $flyingPig = $("#flyingPig").position();
    // const $airplane = $("#airplane").position();

}


function checkingCollision() {
    const racPosition = $raccoon.position();
    const $car = $(".car").first();
//        console.log($car);
//        console.log(racPosition, $car);
    let carTop = $car.position().top;
    let carLeft = $car.position().left;
    let carBottom = carTop + $car.height();
    let carRight = carLeft + $car.width();
    let racTop = $raccoon.position().top;
    let racLeft = $raccoon.position().left;
    let racBottom = racTop + $raccoon.height();
    let racRight = racLeft + $raccoon.width();
    if (racBottom >= carTop && racRight >= carLeft && racTop <= carBottom) {
        return true;
    }
        return false;
}

const interval = setInterval(() => {
    console.log("checking for collisions")
     if(checkingCollision()){
         console.log("CRASH");
    //    $(".container").freeze($(".container"));    
  //  alert ("CRASH - GAME OVER")
  //  document.location.reload();
    clearInterval(interval);
    clearInterval(movingCar);
    $("body").off("keydown", checkKey);
    



    
    }
}, 100)



// **Analysis**
// CRASH is being run whenever the obstacle crosses above raccoon and hits the Y axis, bottem clear for now. 
// => need to fix CRASH 
// => need to establish prompt to freeze game once CRASH occurs 
        // object.freeze()


// function gameOver() {

//     if (checkingCollision(true));
// }





// function to run and when 

//     if(racPosition.left === $car.left) {
//     console.log(racPosition.left, $car.left);

//         isCollided = true;
//         console.log(isCollided, "COLLIDED");
//     }
//     isCollided = true 
// }


// create function to create an element, put it on page, and move it - from right side to left side of page 


// obstacle 12and3 and randomly generate
// make sure obstacles don't generate on top of each other (timers?)
// background position (background)

// grab elements and check coordinates 

// get all coordinates functions, running all the time, checking item locations 

// research 2d collision detection in jquery (mdm 2d collision)
 
// var #raccoon = {x: ???, y: ???, width: 50, height: 50}
// var #obstacle = {x: ???, y: ???, width: 90, height: 50}

// if (#raccoon.x < #obstacle.x + #obstacle.width &&
//     #raccoon.x + #raccoon.width > #obstacle.x &&
//     #raccoon.y < #obstacle.y + #obstacle.height &&
//     #raccoon.y + #raccoon.height > #obstacle.y) {
//     // collision detected!
// }

// get bottom() { return this.y + this.height; },
// get left() { return this.x; },
// get right() { return this.x + this.width; },
// get top() { return this.y; },

// testCollision:function(rectangle) {

//   if (this.top > rectangle.bottom || this.right < rectangle.left || this.bottom < rectangle.top || this.left > rectangle.right) {

//     return false;

//   }

//   return true;

// }


// code that gets coordinates dynamically as game runs 


// CURRENT GOAL: randomize the spawm point of the car 
// 300 - 0?
// Math.random 
// $("#car").append("#car"(4([Math.floor = 300, Math.ceiling = 1 [Math.random])
// ))

//$("#car").bind('oanimationend animationend webkitAnimationEnd', function() { 
//   $("car").css("top", "30%")
//    setTimeout ($("car").css("animation", "car 5s linear"), 20)

// });



const movingCar = setInterval(() => {
    $(".car").eq(0).remove();
    console.log("testing to check random obstacle generation");
    $("<div>").addClass("car").css("top", Math.floor(Math.random() * 90) + "%").appendTo($(".container"));
    ;
},3000)


