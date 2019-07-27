// Variables
const canvas = document.querySelector('#myCanvas'), // HTML CANVAS
      ctx = canvas.getContext('2d') // Abstracting the 2d props of the canvas

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

let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2

// Canvas functions
const draw = () => {
  console.log('Drawing')
  // Inorder to clear the previous circle, we clear any rectangle
  // inside the whole canvas because we set the boundaries to the full width 
  // and height of the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, Math.PI * 2, false)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
  // Changing the x and y coords
  x += dx
  y += dy 
}

// Runs the function for every 10 ms
setInterval(draw, 100)