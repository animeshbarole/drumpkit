

var x = document.querySelectorAll(".drum").length;
for(var i = 0;i<x;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

      var  inhtml= this.innerHTML;
      makesound(inhtml);


  });
}


document.addEventListener("keypress" ,function(event)
{
    makesound(event.key);
});

function makesound(key)
{
  switch (key) {
    case "w":
    var tom4 = new Audio("sounds/tom-4.mp3")
    tom4.play();
    break;

    case "a":
    var tom3 = new Audio("sounds/tom-3.mp3")
    tom3.play();
    break;

    case "s":
    var tom2 = new Audio("sounds/tom-2.mp3")
    tom2.play();
    break;

    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3")
    tom1.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3")
    snare.play();
    break;

    case "k":
    var kickbass = new Audio("sounds/kick-bass.mp3")
    kickbass.play();
    break;

    case "l":
    var crash = new Audio("sounds/crash.mp3")
    crash.play();
    break;

    case "e":
    var ap = new Audio("sounds/e.mp3")
    ap.play();
    break;

    default:console.log(inhtml);

  }
}
