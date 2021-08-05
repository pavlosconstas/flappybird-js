var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

document.addEventListener("keydown", birdMove)

birdX = 50
birdY = 300

var bird = new Image()
var background = new Image()
var topPipe = new Image()
var bottomPipe = new Image()

bird.src = "images/bird.png"
background.src = "images/background.png"
topPipe.src = "images/topPipe.png"
bottomPipe.src = "images/bottomPipe.png"

function gravity() {
    if (birdY < 755) {
        birdY += 1
    }
}

function birdMove() {
    if (birdY > 10){ 
        birdY -= 10
    }
    console.log(birdY)
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background,0, 0)
    ctx.drawImage(bird,birdX, birdY)
    ctx.drawImage(pipe, 50, -800)
}

setInterval(gravity, 10)
setInterval(draw, 1000/60)