
let length = document.querySelectorAll(".drum").length;
for(let i = 0; i < length; i++){
    let buttona = "."
   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
 });
}




