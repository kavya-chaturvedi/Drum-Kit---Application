
//----- DETECTING BUTTON PRESS----------//

var numberOfButtons = document.querySelectorAll(".drum").length;
//----- For Capturing the click of all te buttons and adding sound to it ---//
   for(var i =0; i<numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click" , handleClick);

     }

      function handleClick() {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);


        }

//------DETECTING KEYBOARD BUTTON PRESS----//

document.addEventListener("keypress" , function(event){
     makeSound(event.key);
     buttonAnimation(event.key);
 })




function makeSound(key) {

  switch (key) {
     case "w":
        var crashSound = new Audio('sounds/crash.mp3');
           crashSound.play();
               break;

      case "a" :
         var kickBassSound = new Audio('sounds/kick-bass.mp3');
              kickBassSound.play();
                break;
      case"s":
         var snareSound = new Audio('sounds/snare.mp3');
              snareSound.play();
                break;

      case"d":
         var tom2Sound = new Audio('sounds/tom-2.mp3');
              tom2Sound.play();
                break;
      case"j":
         var tom1Sound = new Audio('sounds/tom-1.mp3');
              tom1Sound.play();
                break;
      case"k":
         var tom3Sound = new Audio('sounds/tom-3.mp3');
               tom3Sound.play();
                break;

      case"l":
          var tom4Sound = new Audio('sounds/tom-4.mp3');
                tom4Sound.play();
                break;
    default:

  }


}

function buttonAnimation (currentKey) {

      var currentActiveKey = document.querySelector("." + currentKey);

      currentActiveKey.classList.add("pressed");

      setTimeout(function() {
        currentActiveKey.classList.remove("pressed");

      }, 100);
}
