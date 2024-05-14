let colors =colorsGenerator()
let colorSquare = document.querySelectorAll(".color_square");
let randomColor =pickedColor();
let guessColor = document.querySelector(".guess_color");
let response = document.querySelector(".response");
let header = document.querySelector(".header");
guessColor.textContent = randomColor;
for(let i =0; i<colors.length; i++) {
    colorSquare[i].style.backgroundColor = colors[i];
    colorSquare[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === randomColor) {
           response.textContent = "Correct"
           changeColor(clickedColor);
           header.style.backgroundColor = clickedColor
        }else{
            this.style.backgroundColor = "transparent"
            response.textContent = "Try again"
        }
    })
}

function pickedColor() {
    let randomNumber = Math.floor(Math.random()*5+1);
    return colors[randomNumber];
} 
function changeColor(color) {
    for(let i = 0; i<colors.length; i++) {
        colorSquare[i].style.backgroundColor = color
    }

}
function colorsGenerator() {
    var array = []
    for(let i = 0; i<6; i++) {
        array.push(selectColor())
    }
    return array
}


function selectColor() {
     let r = Math.floor(Math.random()*255+1)
     let g = Math.floor(Math.random()*255+1)
     let b = Math.floor(Math.random()*255+1)
     return "rgb(" + r + ", " + g + ", " + b + ")";
}
