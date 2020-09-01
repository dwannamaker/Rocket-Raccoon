console.log("= = = Prepare to Launch! = = =");

const racDefPos = 240;

const upArrow = 38; 
const downArrow = 40;

let moveUp = 15;
let moveDown = 15;


// read about jquery Position
// need a default position (like in css with top) established in jquery


function moveRaccoon() {
    $("body").on("keydown", function(event) {
        
        if(event.originalEvent.keyCode === upArrow) {
            console.log("Hi! I am the UP arrow!")
            $(".raccoon").css("top", `${moveUp-=15}px`)
        }


        if(event.originalEvent.keyCode === downArrow) {
            console.log("Hi! I am the DOWN arrow!")
            $(".raccoon").css("top", `${moveDown+=15}px`)

        }
    
    
    })



}

$(document).ready(moveRaccoon);


