//for key click
var numOfBut = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfBut; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() 
{
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);

}
//for key press
document.addEventListener("keydown",keySound);


function keySound(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case "D":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "I":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "V":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "Y":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case "G":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        default:
            alert("Wrong Key Pressed!")
            break;
    }
}
function buttonAnimation(event)
{
var activeButton=document.querySelector("."+event);
activeButton.classList.add("pressed");

setTimeout(function()
{
    activeButton.classList.remove("pressed");

},100);
}
