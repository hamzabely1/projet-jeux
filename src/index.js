
let giocatore = document.getElementById("giocatore")







let pos = 0
 let pos1 = 0





function su() {
 if (pos === -490) {
   pos = pos
 }else{
   pos -=10
   giocatore.style.marginTop = pos+"px"

 }
if (pos === -480 && pos1 === -10) {
  window.location.pathname ="/index2.html"
}

}




function giu() {
  if (pos === 10) {
    pos = pos
  }else{

    pos +=10
    giocatore.style.marginTop = pos+"px"
 
  }
  if (pos === -480 && pos1 === -10) {
    window.location.pathname ="/index2.html"
  }
  
 
 }

 

 
function destra() {
  if (pos1 === 370) {
    pos1 = pos1
  }else{
    pos1 +=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -480 && pos1 === -10) {
    window.location.pathname ="/index2.html"
  }
  
 
 }

 


 
function sinistra() {
  if (pos1 === -380) {
      pos1 = pos1
  }else{
   
    pos1 -=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -480 && pos1 === -10) {
    window.location.pathname ="/index2.html"
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