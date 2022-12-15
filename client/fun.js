

var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    character.classList.add("animate");
    setTimeout(function(){character.classList.remove("animate");},500);
}


function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        alert(); 
    }
}

setInterval(checkDead, 10);
