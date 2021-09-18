var character = document.getElementById("character");
var interval;
var both = 0; // prevent user from pressing both keys
var game = document.getElementById("game");
var counter = 0;





function moveLeft(){
    //moving the ball left
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left > 0){
        //prevent user going out of game range
        character.style.left = left - 2 + "px";
} 
}

function moveRight(){
    //moving the ball left
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left <380){
    character.style.left = left + 2 + "px";
}
}

document.addEventListener("keydown", event => {
    if (both ==0){
        both++;
    //make the ball move when user presses the key
    if (event.key==="ArrowLeft"){
        interval = setInterval(moveLeft,1)
    }
    if (event.key==="ArrowRight"){
        interval = setInterval(moveRight,1)
    }
}
});
document.addEventListener("keyup", event => {
    //stop listening when the user no longer holding the key
    clearInterval(interval);
    both=0;


});

setInterval(function(){
var blockLast = document.getElementById("block"+(counter-1));
var holeLast = document.getElementById("hole"+(counter-1));
if ( counter > 0){
    var blockLastTop =
    parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
    var holeLastTop =
    parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));

}
//elements for the game
var block = document.createElement('div');
var hole = document.createElement('div');
block.setAttribute("class", "block");
hole.setAttribute("class", "hole");
block.setAttribute("id", "block"+counter);//to access with JS
hole.setAttribute("id", "hole"+counter);
var random = Math.floor(Math.random() * 360);
hole.style.left = random + "px";
game.appendChild(block);
game.appendChild(hole);
counter++;

},1);

