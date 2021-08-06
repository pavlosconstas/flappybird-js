var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

document.addEventListener("keyup", birdMove)
document.addEventListener("click", birdMove)


birdX = 50
birdY = 300
pipeX = 200 

var bird = new Image()
var background = new Image()
var topPipe = new Image()
var bottomPipe = new Image()

bird.src = "images/bird.png"
background.src = "images/background.png"
topPipe.src = "images/topPipe.png"
bottomPipe.src = "images/bottomPipe.png"

function ImagesTouching(x1, y1, img1, x2, y2, img2) {
    if (x1 >= x2+img2.width || x1+img1.width <= x2) return false;   // too far to the side
    if (y1 >= y2+img2.height || y1+img1.height <= y2) return false; // too far above/below
    return true;                                                    // otherwise, overlap   
    }

function gravity() {
    if (birdY < 755) {
        birdY += 1
    }
}

// Again, a really messy way of doing this, and can lead to inefficiencies, 
// however, it makes the bird animation smoother, and I didn't want to bother.

function birdMove() {
    if (birdY > 10){ 
        var refreshIntervalId = setInterval(move, 1);
        setTimeout(clearInterval, 300, refreshIntervalId)
    }
}

function move() {
    birdY -= 2
}

function movePipe() {
    pipeX--
}

// This is a lazy way of doing this, another way would be to make an array of pipes.
function spawnPipe() {
    pipeX = 300
    pipeY = Math.floor(Math.random() * 700) + 100
    pipe2Y = 1000 - pipeY
    pipe1Y = 0 - pipeY
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background,0, 0)
    ctx.drawImage(bird,birdX, birdY)
    ctx.drawImage(topPipe, pipeX, pipe1Y)
    ctx.drawImage(bottomPipe, pipeX, pipe2Y)    
    if (ImagesTouching(birdX, birdY, bird, pipeX, pipe1Y, topPipe) || ImagesTouching(birdX, birdY, bird, pipeX, pipe2Y, bottomPipe) == true) {
        clearInterval(drawing)
        lose()
    }

}

function lose() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("YOU LOSE!!", canvas.width/2, canvas.height/2); 
}

spawnPipe()
setInterval(gravity, 3)
drawing = setInterval(draw, 1000/60)
setInterval(movePipe, 10)
setInterval(spawnPipe, 5400)