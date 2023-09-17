var numberOfStoryButtons = document.querySelectorAll(".story").length;

for (var i = 0; i <numberOfStoryButtons; i++) {

    document.querySelectorAll(".story")[i].addEventListener("click", function() {

        var buttons = this.innerText;
        buttonAnimation(buttons);
        playSound(buttons);
    });
}
    document.addEventListener("keydown", function(e){
        playSound(e.key)
    });
        
        function playSound(key){
        switch (key) {

            case "t":
                var thunder = new Audio ("Audio/thunder.mp3")
                thunder.play();
                break;

            case "r":
                var rain = new Audio ("Audio/rain.mp3")
                rain.play();
                break;

            case "w":
                var wind = new Audio ("Audio/wind.mp3")
                wind.play();
                break;

            case "c":
                var cry = new Audio ("Audio/cry.mp3")
                cry.play();
                break;

                case "l":
                var landslide = new Audio ("Audio/landslide.mp3")
                landslide.play();
                break;

                case "e":
                var endstorm = new Audio ("Audio/endstorm.mp3")
                endstorm.play();
                break;
            default:
               
        }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);
   }
