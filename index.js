// function w(){
//     var audio1 = new Audio("sounds/tom-1.mp3");
//     audio1.play();
// }
// function a(){
//     var audio1 = new Audio("sounds/tom-2.mp3");
//     audio1.play();
// }
// function s(){
//     var audio1 = new Audio("sounds/tom-3.mp3");
//     audio1.play();
// }
// function d(){
//     var audio1 = new Audio("sounds/tom-4.mp3");
//     audio1.play();
// }
// function j(){
//     var audio1 = new Audio("sounds/snare.mp3");
//     audio1.play();
// }
// function k(){
//     var audio1 = new Audio("sounds/kick-bass.mp3");
//     audio1.play();
// }
// function l(){
//     var audio1 = new Audio("sounds/crash.mp3");
//     audio1.play();
// }
var numOfDrums = document.querySelectorAll(".drum").length; 
for(i =0; i<numOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}    
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
               audio1.play();
            break;

        case "a": 
            var audio2 = new Audio("sounds/tom-2.mp3"); 
                audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
                 audio4.play();
            break;
        case "j":
                var audio4 = new Audio("sounds/snare.mp3");
                    audio4.play();
                break;
        case "k":
            var audio5 = new Audio("sounds/kick-bass.mp3");
                audio5.play();
            break;

        case "l":
                var audio6 = new Audio("sounds/crash.mp3");
                    audio6.play();
                break;
    

        default: 
        console.log(buttonInnerHtml);
            break;
    }

}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("."+ currentKey ); 
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

$(document).keypress(function(event){
    $("h2").text(event.key);

});

