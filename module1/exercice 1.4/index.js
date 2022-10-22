const red= document.querySelector(".red");
const orange= document.querySelector(".orange");
const green= document.querySelector(".green");

const delaysBetweenLightChanges = 2000;

cycleThroughLamps();

function cycleThroughLamps() {
  window.setInterval(showFromRedToGreenToRedWithDelays, delaysBetweenLightChanges*4);
}

showFromRedToGreenToRedWithDelays();

function showFromRedToGreenToRedWithDelays() {
    switchColorRed();
    switchColoeOrange(delaysBetweenLightChanges*1);
    switchColorGreen(delaysBetweenLightChanges*2);    
    switchColoeOrange(delaysBetweenLightChanges*3);    
    switchColorRed(delaysBetweenLightChanges*4);
}

function switchColorRed(delaysBetweenLightChange) {
    window = setTimeout(() => {
        showRedLamp(); 
    }, delaysBetweenLightChange);
  }

  function switchColoeOrange(delaysBetweenLightChange) {
    window = setTimeout(() => {    
        showOrangeLamp();   
    }, delaysBetweenLightChange);
  }

  function switchColorGreen(delaysBetweenLightChange) {
    window = setTimeout(() => {
        showGreenLamp();   
    }, delaysBetweenLightChange);
  }

  function showRedLamp() {    
    red.style.backgroundColor = "red";
    orange.style.backgroundColor = "white";
  }

  function showOrangeLamp() {
    if(green.style.backgroundColor != "white"){    
    orange.style.backgroundColor = "orange";
    green.style.backgroundColor = "white";
    }
    if(red.style.backgroundColor != "white"){
        orange.style.backgroundColor = "orange";
        red.style.backgroundColor = "white";
    }
  }

  function showGreenLamp() {    
    green.style.backgroundColor = "green";
    orange.style.backgroundColor = "white";
  }



/*
while(true){
    timeoutID;
    i++;
}*/
    