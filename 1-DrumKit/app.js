

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop the function from executing on unassigned key
  audio.currentTime = 0; //rewind to start so button cn be pressed in succession
  audio.play();
  key.classList.add("playing");
}

//After keys are played, removes the CSS rules applied to the keys
function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}

//Remove the rules
const keys = document.querySelectorAll(".key");
keys.forEach(key=> key.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playSound);

/*  TRYING TO FIGURE OUT HOW TO MAKE CLICKING ON BUTTONS WORK 

const clicks = document.querySelectorAll('.drums');

clicks.forEach((button) => {
  button.addEventListener('click', (e)=>{
    const key = document.querySelector(`td[data-key="${e.}"]`);

    console.log(e.drums);
  });
});

*/
