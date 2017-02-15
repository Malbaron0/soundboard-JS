var audio; //Global, keeps old source of audio. Pause older audio and play new one so there is no overlap

document.addEventListener('keydown', function(e) {
    if (audio != null) {
        audio.pause();
    }
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //Back ticks allowing embedded expressions
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) {
        return null;
    }
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0; //rewind
});

//Listen to transitionend event on each of the keys and remove the transtion class
var keys = document.querySelectorAll('.key');
keys.forEach(function(key){
  key.addEventListener('transitionend', function(e){
    if (e.propertyName !== 'transform'){
       return;
    }
     this.classList.remove('playing');
  });
});
