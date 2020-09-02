console.log("= = = Prepare to Launch! = = =");

const upArrow = 38; 
const downArrow = 40;

let position = 240;

// read about jquery Position
// need a default position (like in css with top) established in jquery


function moveRaccoon() {
    $("body").on("keydown", function(event) {
        
        if(event.originalEvent.keyCode === upArrow) {
            console.log("Hello! I am the UP arrow!")
            if(position > 0) {
                 $(".raccoon").css("top", `${position-=20}px`)
            }
            
        }

        if(event.originalEvent.keyCode === downArrow) {
            console.log("Hello! I am the DOWN arrow!")
            if(position < 300) {
                $(".raccoon").css("top", `${position+=20}px`)
            }
        }
    })
}

$(document).ready(moveRaccoon);


// create function to create an element, put it on page, and move it - from right side to left side of page 



// obstacle 12and3 and randomly generate
