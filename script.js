
let speedControll = document.getElementById("speedControll");
let sizeControll = document.getElementById("sizeControll");
let text = document.getElementById("text");
let controller = document.getElementById("controller");
let container = document.getElementById("container");



let speed = speedControll.value;
let size = sizeControll.value;
let showControll = false;
let play = true;

let scroller = setInterval(scroll, speed);

let currentScroll = 0;



function scroll() {
    currentScroll = container.scrollTop;
    container.scroll({
      top: currentScroll+1
    });
  console.log(currentScroll, speed);
  }


  function speedChange() {
    if (scroller){
      clearInterval(scroller);
      console.log('clear');
    }
    speed = speedControll.value;
    scroller = setInterval(scroll, speed);
  }

  function sizeChange() {
    size = sizeControll.value;
    text.style.fontSize = size+'rem';
  }

  function controllKey(e) {
    if(e.altKey && e.shiftKey) {
      if(showControll) {
        controller.style.display='none';
        showControll = false;
      } else {
        controller.style.display='block';
        showControll = true;
      }
    }
  }

speedControll.addEventListener("input", speedChange);

sizeControll.addEventListener("input", sizeChange);

document.addEventListener("keydown", controllKey, false);