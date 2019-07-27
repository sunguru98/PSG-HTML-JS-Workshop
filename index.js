// Variables
const canvas = document.querySelector('#myCanvas'), // HTML CANVAS
      ctx = canvas.getContext('2d') // Abstracting the 2d props of the canvas

// Circle coords
let circleX = canvas.width / 2,
    circleY = canvas.height - 30,
    circleDx = 2,
    circleDy = -2

// Paddle coords
let paddleHeight = 10,
    paddleWidth = 75
    // for centering
    paddleX = (canvas.width - paddleWidth) / 2,
    paddleY = (canvas.height - paddleHeight),
    padddleDx = -2
    paddleDy = 2

// Paddle direction vars
let rightPressed = false,
    leftPressed = false


// Canvas functions
const drawCircle = () => {
  // Inorder to clear the previous circle, we clear any rectangle
  // inside the whole canvas because we set the boundaries to the full width 
  // and height of the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.arc(circleX, circleY, 10, 0, Math.PI * 2, false)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
  // Changing the circleX and circleY coords
  circleX += circleDx
  circleY += circleDy
}

const drawPaddle = () => {
  ctx.beginPath()
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

const draw = () => {
  // Drawing the circle
  drawCircle()
  // Drawing the paddle
  drawPaddle()
  // Collision detection of the ball
  // If the sum of circleX and differential x is greater than the difference between the canvas width and the radius of the circle
  // Change the direction of x
  // Similarly if the sum of circleY and differential y is greater than the difference between the canvas height and the radius of the circle
  // Change the direction of y
  circleDx = (circleX + circleDx  > canvas.width - 10 || circleX + circleDx < 10) ? -circleDx : circleDx
  circleDy = (circleY + circleDy  > canvas.height - 10 || circleY + circleDy < 10) ? -circleDy : circleDy
  if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 7
  else if (leftPressed && paddleX > 0) paddleX -= 7
}

// Runs the function for every 10 ms
setInterval(draw, 10)

const keyDownHandler = e => {
  if (e.keyCode == 39) rightPressed = true
  else if (e.keyCode === 37) leftPressed = true
}

const keyUpHandler = e => {
  if (e.keyCode == 39) rightPressed = false
  else if (e.keyCode === 37) leftPressed = false
}

// All listeners
document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

// ----------------------------------------------------------------------------------
// Basics of canvas shape drawings
// Start drawing
// ctx.beginPath() 
// Definition of the rect coordinates and dimensions
// -------------------------------------------------
// .rect(x-axis, y-axis, width, height)
// ctx.rect(20, 40, 50, 50)
// // color of the rectangle
// ctx.fillStyle = '#FF0000' 
// // Fill with the above styles
// ctx.fill() 
// // Stop drawing
// ctx.closePath()

// // Start drawing
// ctx.beginPath()
// // Create a circle
// // (x-axis, y-axis, radius, startAngle, endAngle, isAntiClockWise)
// ctx.arc(240, 160, 20, 0, Math.PI*2, false)
// ctx.fillStyle = "green"
// ctx.fill()
// ctx.closePath()

// ctx.beginPath()
// ctx.rect(160, 10, 100, 40)
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"
// ctx.stroke()
// ctx.closePath()