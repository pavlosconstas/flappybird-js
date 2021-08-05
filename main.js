var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

document.addEventListener("keydown", birdMove)

birdX = 20
birdY = 300

var bird = new Image()
var background = new Image()
var topPipe = new Image()
var bottomPipe = new Image()

bird.src = "images/bird.png"
background.src = "images/topPipe.png"
topPipe.src = "images/topPipe.png"
bottomPipe.src = "images/bottomPipe.png"


function birdMove() {
    if (birdY > 0){ 
        birdY -= 20
    }
    console.log(birdY)
}

function draw() {
    ctx.drawImage(background,0, 0)
}

background.onload = function() {
    draw()
}