const audio = document.getElementById('audio');
const osori = document.getElementById('audio2');
var gazou = document.getElementById('gazou');


function touch(){
    gazou.src = "blue.png"
    osori.volume = 0.25;
    osori.currentTime = 0;
    osori.play();
    setTimeout(() =>{
            gazou.src = "yellow.png";
        audio.volume = 0.25;
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
        gazou.src = "bt.png";
        }, 2500);
     },1000)
}
   
