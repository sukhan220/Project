const dino = document.getElementById("dino");
const cactus= document.getElementById("object");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 500);
    }

}
let isAlive= setInterval(() => {
    //get postion of dino
    let dinoPostion= parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    // get postion of cactus
    let cactusPostion = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


    //Detect collision
    if(dinoPostion<=40 && cactusPostion >=40 && cactusPostion<=60){
        alert("gameOver");
    }
    
},10);

document.addEventListener('keydown', (event) => {
    jump();
})