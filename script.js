var character = document.getElementById("character");
var interval;


function moveLeft(){
    //moving the ball left
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
}

function moveRight(){
    //moving the ball left
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left - 2 + "px";
}

document.addEventListener("keydown", event => {
    //make the ball move when user presses the key
    if (event.key==="ArrowLeft"){
        interval = setInterval(moveLeft,1)
    }
    if (event.key==="ArrowRight"){
        interval = setInterval(moveRight,1)
    }
});
document.addEventListener("keyup", event => {
    //stop listening when the user no longer holding the key
    clearInterval(interval);


});