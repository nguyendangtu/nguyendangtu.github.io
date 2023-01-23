window.onload = pageLoad;

let speed = 250;
let arrayAnimation;
let interval;
let stop = false;

function pageLoad(){
    document.getElementById('start').onclick = startAnimation;
    document.getElementById('stop').onclick = stopAnimation;
    document.getElementById('animation').onchange = changeAnimation;
    document.getElementById('fontsize').onchange = changeFontSize;
    document.getElementById('turbo').onclick = adjustSpeed;
}


function startAnimation(){

    if(arrayAnimation == undefined || arrayAnimation.length == 0){
        alert("Animation is blank, please select Animation!");
        return;
    }

    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('animation').disabled = true;

    interval = setInterval(setAnimation, speed);
}

function stopAnimation(){
    document.getElementById("text-area").value = "";
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('animation').disabled = false;
    clearInterval(interval);
}

function setAnimation(){
    let animation = arrayAnimation.shift();
    document.getElementById("text-area").value = animation;
    arrayAnimation.push(animation);
}


function changeAnimation(){
    let animation = document.getElementById("animation").value;
    arrayAnimation = ANIMATIONS[animation].split("=====\n");
}

function changeFontSize(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function adjustSpeed(){
    let speed = document.getElementById("turbo").checked ? 50 : 250;
    clearInterval(interval);
    startAnimation();
}




