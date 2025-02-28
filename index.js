
for(var x=0; x<3; x++){
    var selButton = document.querySelectorAll(".myButton")[x].addEventListener("click",function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    })
}

function audioPlay(text){
    switch(text){
        case "Play1":
            var audio = new Audio("Audio/a.mp3");
            audio.play();
            break
        case "Play2":
            var audio = new Audio("Audio/B.mp3");
            audio.play();
            break

        case "Play3":
            var audio = new Audio("Audio/C.mp3");
            audio.play();
            break
    }
}
function playAnimation(text){
    var sellectButton = document.querySelector("."+text);
    sellectButton.classList.add("anim");
    setTimeout(function(){
        sellectButton.classList.remove("anim");
    },3000)

}