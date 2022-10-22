const div= document.querySelector("#compteur");
const div2 = document.querySelector("#msgBox");
const btn1 = document.querySelector("#myBtn1");
var compteur = 0;

btn1.addEventListener("click", compter);


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