const div= document.querySelector("#compteur");
const div2 = document.querySelector("#msgBox1");
const btn1 = document.querySelector("#myBtn1");
const btn2 = document.querySelector("#myBtn2");
const clockHolder = document.querySelector("span");
const divs = document.querySelectorAll(".message");
var compteur = 0;
var myIntervalId;

btn1.addEventListener("click", compter);
btn1.addEventListener("click", startClock);
btn2.addEventListener("click",stopOrResumeClock);



function compter(){
    compteur = compteur + 1;
    div.innerText = compteur;
    if(compteur > 4 && compteur < 10){
        div2.innerText = " Bravo,bel échauffement ! ";
    }
    if(compteur > 9){        
        div2.innerText = " Vous êtes passé maitre en l'art du clic ! ";
    }

    if(compteur > 1000){        
        div2.innerText = " Attention l'abus de click est dangereux pour la santé ! ";
    }
}

function printCurrentTime() {
    const now = new Date();
    const time = now.toLocaleString();
    clockHolder.innerText = time;
  }

function startClock() {
  if(myIntervalId == undefined){
    myIntervalId = setInterval(printCurrentTime, 1000);
  }
  }

function stopOrResumeClock() {
    if (myIntervalId) {
      clearInterval(myIntervalId);
      clockHolder.innerText = "\n";
      myIntervalId = undefined;
      compteur = 0;
      div.innerText = "\n";
      div2.innerText = "\n";
    };
  }

divs.forEach((dive) => {
  dive.addEventListener("mouseover", () => {
    dive.innerText = "Classement";
  });
  
  dive.addEventListener("mouseout", (e) => {
    dive.innerText = "\n";
  });
});