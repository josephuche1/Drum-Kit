
let length = document.querySelectorAll(".drum").length;
for(let i = 0; i < length; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
     let buttonHTML = document.querySelectorAll(".drum")[i].innerHTML;
     
     makeSound(buttonHTML);
     buttonAnimation(buttonHTML);
 });
}

document.addEventListener("keydown", function(event){
   let buttonKey = event.key;
   
   makeSound(buttonKey);
   buttonAnimation(buttonKey);
})

function makeSound(key){

    let activeKey = key;
    switch(activeKey){
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            let kickBass =  new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        break;
        default: console.log("Event error");
    }
}

function buttonAnimation(activeKey){
   let currentKey = document.querySelector("."+activeKey);
   currentKey.classList.add("pressed");

   setTimeout(function(){
    currentKey.classList.remove("pressed");
   }, 100);
}
