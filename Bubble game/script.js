let hit = 0;
let score = 0;

function makebubble() {
    let clutter = "";

for (let i = 1 ; i <= 135; i++) {
    
    let random = Math.floor(0 + Math.random() * (9 -0))
    clutter += `<div class="bubble">${random}</div>`

}

document.querySelector("#bpainal").innerHTML = clutter;
}


function runtime() {
    let timer = 60;
   let timeint =  setInterval(() => {

        if (timer>0) {

            timer--;
            document.querySelector("#timerval").textContent = timer;
            
        }
        else{
            clearInterval(timeint)
            document.querySelector("#bpainal").innerHTML = "<h1>Game Over</h1>"
        }
    }, 1000);
    
}


function getnewhit() {
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitint").textContent = hit;
}


function scroeincrese() {
    score += 10;
    document.querySelector("#scoreinc").textContent = score
        
}

document.querySelector("#bpainal").addEventListener("click",(dets) => {
  let checkclick = Number(dets.target.textContent);
//   console.log(checkclick);
    if (checkclick === hit) {
        scroeincrese()
        getnewhit();
        makebubble();
    }
}
)

getnewhit();
makebubble();
runtime();