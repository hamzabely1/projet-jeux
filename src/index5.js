
let giocatore = document.getElementById("giocatore")


let body = document.getElementById("body")

let fe = document.createElement("img")


let pos = 0
 let pos1 = 0





function su() {
 if (pos === -490) {
   pos = pos
 }else{
   pos -=10
   giocatore.style.marginTop = pos+"px"

 }
if (pos === -240 && pos1 === 0) {
  body.innerHTML =""
  body.style.background ="black"
  body.appendChild(fe)
  fe.src ="fe.gif"
  fe.style.height ="600px"
  fe.style.width="1200px"
}

}




function giu() {
  if (pos === 10) {
    pos = pos
  }else{

    pos +=10
    giocatore.style.marginTop = pos+"px"
 
  }
  
  if (pos === -240 && pos1 === 0) {
    body.innerHTML =""
    body.appendChild(fe)
    fe.src ="fe.gif"
    fe.style.height ="600px"
    fe.style.width="1200px"
  }
 
 }

 

 
function destra() {
  if (pos1 === 370) {
    pos1 = pos1
  }else{
    pos1 +=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -240 && pos1 === 0) {
    body.innerHTML =""
    body.appendChild(fe)
    fe.src ="fe.gif"
    fe.style.height ="600px"
    fe.style.width="1200px"
  }
 
 }

 


 
function sinistra() {
  if (pos1 === -380) {
      pos1 = pos1
  }else{
   
    pos1 -=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -240 && pos1 === 0) {
    body.innerHTML =""
    body.appendChild(fe)
    fe.src ="fe.gif"
    fe.style.height ="600px"
    fe.style.width="1200px"
  }
  
 
 }
 



















setTimeout(hamza,20000)

function hamza() {
  window.location.pathname ="/index.html"
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