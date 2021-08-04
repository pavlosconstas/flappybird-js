var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

document.addEventListener("keydown", birdMove)

birdX = 20
birdY = 300

function birdMove() {
    birdY += 20
    console.log(birdY)
}