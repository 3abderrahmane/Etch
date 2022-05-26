let newDiv = document.createElement("div");
let squareDiv = document.getElementsByClassName("square");
let  newValue = document.getElementById("userValue");
let barValue = document.getElementById("barValue");
let valueDiv = document.getElementById("valueDiv");
let box = document.getElementById("container");
let clear = document.getElementById("clearIt");
let rainbowBalls = document.getElementById("rainbowBalls");
let rainbowSquares = document.getElementById("rainbowSquares");
let blackSquares = document.getElementById("blackSquares");
let valChange = 16;
let colorKey = 0;

barValue.addEventListener('input', function(){
  newValue.innerText = barValue.value;
  valueDiv.style.boxShadow = "0px 6px 0px 6px blue";
  valChange = newValue.innerText;
});

clear.addEventListener('click', function(){
     box.innerHTML="";
     box.style.backgroundColor = "rgb(247, 247, 252)";
     newValue.innerText = 16;
     barValue.value = 16;
     colorKey = 0;
});

rainbowBalls.addEventListener('click', function(){
     box.innerHTML="";
     box.style.backgroundColor = "rgb(247, 247, 252)";
     makeBalls(valChange);
     squareDiv.onmouseenter = mouseHover(squareDiv);
     colorKey = 2;
});

rainbowSquares.addEventListener('click', function(){
  box.innerHTML="";
  box.style.backgroundColor = "rgb(247, 247, 252)";
  makeSquares(valChange);
  squareDiv.onmouseenter = mouseHover(squareDiv);
  colorKey = 0;
});

blackSquares.addEventListener('click', function(){
  box.innerHTML="";
  box.style.backgroundColor = "rgb(247, 247, 252)";
  makeBlackSquares(valChange);
  squareDiv.onmouseenter = mouseHover(squareDiv);
  colorKey = 1;
});


function makeSquares(number){
   for(let i = 0; i < number; i++){  
      for(let j = 0; j < number; j++){
      let newDiv = document.createElement("div");
      let newWidth = 450 / number;
      let newHeight = 450 / number;
      newDiv.style.width = newWidth +"px";
      newDiv.style.height = newHeight +"px";
      //newDiv.style.height = newDiv.style.width;
      newElement(newDiv);
    }
  }
}

function makeBalls(number){
  for(let i = 0; i < number; i++){  
     for(let j = 0; j < number; j++){
     let newDiv = document.createElement("div");
     let newWidth = 500 / number;
     newDiv.style.width = newWidth +"px";
     newDiv.style.height = newDiv.style.width;
     newElement(newDiv);
     rainbowBalls.onclick = rainbow(newDiv);
   }
 }
}

function makeBlackSquares(number){
  for(let i = 0; i < number; i++){  
     for(let j = 0; j < number; j++){
     let newDiv = document.createElement("div");
     let newWidth = 500 / number;
     newDiv.style.width = newWidth +"px";
     newDiv.style.height = newDiv.style.width;
     newElement(newDiv);     
   }
 }
}

function newElement(newDiv){
    container.appendChild(newDiv).className = "square";
}

function mouseHover(hoverEffect){
    for(let i = 0; i < hoverEffect.length; i++){
        hoverEffect[i].onmouseenter = function(){
            setColor(hoverEffect[i]); 
            hoverEffect[i].classList.add("square-"+i);
            hoverEffect[i].classList.add("transform");
        }
    }
}

const setColor = (toColor) => {
    const ranColor = Math.floor(Math.random()*16777215).toString(16);
    toColor.style.backgroundColor = "#" + ranColor;
    if(colorKey == 1){
        waitChange(800, toColor);
    }if(colorKey == 2){
      box.style.backgroundColor = "black";
    }  
}
function waitChange(seconds, variant){
  setTimeout(function () {
      variant.style.backgroundColor = "black";
  }, seconds);
}

function rainbow(ball){
  ball.style.borderRadius = "50%";
}