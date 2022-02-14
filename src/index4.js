
let giocatore = document.getElementById("giocatore")


let punti = document.getElementById("punti")
let vita = document.getElementById("vita")
let mos = document.getElementById("mos")

let impun = document.getElementById("impun")

let pos = 0
 let pos1 = 0


class jeux {
  constructor(vi){
this.vi = vi
  }
}
let carre = new jeux (150)
vita.innerHTML = carre.vi




punti
function su() {
 if (pos === -500) {
   pos = pos
 }else{
   pos -=50
   giocatore.style.marginTop = pos+"px"

 }
if (pos === -250 && pos1 === 0) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "0px"

  pos = 0
  pos1 = 0
}
if(carre.vi == 150) {
  impun.src = "vita3.png"
  vita.innerHTML = carre.vi


}
if (pos === -250 && pos1 === -50) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "0px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -100) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-50px"
  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -150) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-80px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -200) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-150px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -250) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-180px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -300) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-200px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -350) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-250px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -400) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "-320px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === 50) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "0px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === 100) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "50px"
  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 ===150) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "80px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === 200) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "150px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === 250) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "180px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === 300) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "200px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -350) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "300px"

  pos = 0
  pos1 = 0
}
if (pos === -250 && pos1 === -400) {
  carre.vi -=50
  giocatore.style.marginTop ="0px"
  giocatore.style.marginLeft ="0px"
  mos.style.marginLeft  = "320px"

  pos = 0
  pos1 = 0
}



if (carre.vi == 100) {
  impun.src = "vita2.png"
  vita.innerHTML = carre.vi

}
if(carre.vi == 50){
  
impun.src = "vita1.png"
vita.innerHTML = carre.vi


}
if (carre.vi == 0) {
window.location.pathname ="/index1.html"

}




























if (pos === -450 && pos1 === -350) {
  window.location.pathname ="/index5.html"
}









}

function giu() {
  if (pos === 0) {
    pos = pos
  }else{

    pos +=50
    giocatore.style.marginTop = pos+"px"
 
  }
  
  if (pos === -450 && pos1 === -350) {
    window.location.pathname ="/index5.html"
  }
  
 }

 

 
function destra() {
  if (pos1 === 400) {
    pos1 = pos1
  }else{
    pos1 +=50
    giocatore.style.marginLeft = pos1+"px"
 
  }
  
  if (pos === -450 && pos1 === -350) {
    window.location.pathname ="/index5.html"
  }
  
 
 }

 


 
function sinistra() {
  if (pos1 === -400) {
      pos1 = pos1
  }else{
   
    pos1 -=50
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -450 && pos1 === -350) {
    window.location.pathname ="/index5.html"
  }
  
  
 
 }
 





































 document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 38) {
    su()

  }
 
});
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 40) {
    giu()
  }
  
});
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 39) {
    destra()
  }
 
});
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 37) {
    sinistra()
  }

});