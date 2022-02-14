

let giocatore = document.getElementById("giocatore")


let stelladoma = document.getElementById("stelladomanda")
let stellaregalo = document.getElementById("stellaregalo")
let stella2d = document.getElementById("stella2d")
let stella3re = document.getElementById("stella3re")

let domanda = document.getElementById("domanda")


let porta = document.getElementById("porta1")

let pstella1 = document.getElementById("pstella1")
let pstella2 = document.getElementById("pstella2")
let pstella3 = document.getElementById("pstella3")





let stella1 = document.getElementById("stella1")







let regalo = document.getElementById("regalo")

let pos = 0
 let pos1 = 0





function su() {
 if (pos === -490) {
   pos = pos
 }else{
   pos -=10
   giocatore.style.marginTop = pos+"px"

 }
 if (pos === -370 && pos1 === -220) {
   regalo.innerHTML =""
   stella3re.src = "stella.png"
   stella3re.style.height ="50px"
 }
 if (pos === -290 && pos1 === 200) {
  let prom = prompt("12+4x5-2")
  if (prom == 30) {
    domanda.innerHTML =""
    stella2d.src = "stella.png"
    stella2d.style.height ="50px"

  }else{
  window.location.pathname ="/index1.html"
  }


 }


if (pos === -490 && pos1 == -380) {
  stella1.innerHTML =""
 pstella1.src = "stella.png"
 
 

}
if (pos === -470 && pos1 === 50) {
  stelladoma.innerHTML =""
  pstella2.src = "stella.png"
porta.style.backgroundColor ="white"

  

}
if (pos === 0 && pos1 === -350) {
  stellaregalo.innerHTML = ""
  pstella3.src = "stella.png"
}
if (pos === 0 &&  pos1 === 350 ) {
  window.location.pathname ="/index3.html"

}










}




function giu() {
  if (pos === 10) {
    pos = pos
  }else{

    pos +=10
    giocatore.style.marginTop = pos+"px"
 
  }
  if (pos === -370 && pos1 === -220) {
    regalo.innerHTML =""
    stella3re.src = "stella.png"
    stella3re.style.height ="50px"
  }
  if (pos === -290 && pos1 === 200) {
   let prom = prompt("12+4x5-2")
   if (prom == 30) {
     domanda.innerHTML =""
     stella2d.src = "stella.png"
     stella2d.style.height ="50px"
 
   }else{
   window.location.pathname ="/index1.html"
   }
 
 
  }
 
 
 if (pos === -490 && pos1 == -380) {
   stella1.innerHTML =""
  pstella1.src = "stella.png"
  
  
 
 }
 if (pos === -470 && pos1 === 50) {
   stelladoma.innerHTML =""
   pstella2.src = "stella.png"
 porta.style.backgroundColor ="white"
 
   
 
 }
 if (pos === 0 && pos1 === -350) {
   stellaregalo.innerHTML = ""
   pstella3.src = "stella.png"
 }
 if (pos === 0 &&  pos1 === 350 ) {
   window.location.pathname ="/index3.html"
 
 }
  
 
 }

 

 
function destra() {
  if (pos1 === 370) {
    pos1 = pos1
  }else{
    pos1 +=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  if (pos === -370 && pos1 === -220) {
    regalo.innerHTML =""
    stella3re.src = "stella.png"
    stella3re.style.height ="50px"
  }
  if (pos === -290 && pos1 === 200) {
   let prom = prompt("12+4x5-2")
   if (prom == 30) {
     domanda.innerHTML =""
     stella2d.src = "stella.png"
     stella2d.style.height ="50px"
 
   }else{
   window.location.pathname ="/index1.html"
   }
 
 
  }
 
 
 if (pos === -490 && pos1 == -380) {
   stella1.innerHTML =""
  pstella1.src = "stella.png"
  
  
 
 }
 if (pos === -470 && pos1 === 50) {
   stelladoma.innerHTML =""
   pstella2.src = "stella.png"
 porta.style.backgroundColor ="white"
 
   
 
 }
 if (pos === 0 && pos1 === -350) {
   stellaregalo.innerHTML = ""
   pstella3.src = "stella.png"
 }
 if (pos === 0 &&  pos1 === 350 ) {
   window.location.pathname ="/index3.html"
 
 }
  
 
 }

 


 
function sinistra() {
  if (pos1 === -380) {
      pos1 = pos1
  }else{
   
    pos1 -=10
    giocatore.style.marginLeft = pos1+"px"
 
  }
  
  if (pos === -370 && pos1 === -220) {
    regalo.innerHTML =""
    stella3re.src = "stella.png"
    stella3re.style.height ="50px"
  }
  if (pos === -290 && pos1 === 200) {
   let prom = prompt("12+4x5-2")
   if (prom == 30) {
     domanda.innerHTML =""
     stella2d.src = "stella.png"
     stella2d.style.height ="50px"
 
   }else{
   window.location.pathname ="/index1.html"
   }
 
 
  }
 
 
 if (pos === -490 && pos1 == -380) {
   stella1.innerHTML =""
  pstella1.src = "stella.png"
  
  
 
 }
 if (pos === -470 && pos1 === 50) {
   stelladoma.innerHTML =""
   pstella2.src = "stella.png"
 porta.style.backgroundColor ="white"
 
   
 
 }
 if (pos === 0 && pos1 === -350) {
   stellaregalo.innerHTML = ""
   pstella3.src = "stella.png"
 }
 if (pos === 0 &&  pos1 === 350 ) {
   window.location.pathname ="/index3.html"
 
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


