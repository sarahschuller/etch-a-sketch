// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup the canvas for drawing

// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // destructured version of lines above

// Create random x & y starting points on the canvas

let x = Math.floor(Math.random() * width);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Drawing function

// Handler for the keys

// Clear/Shake function

// Listen for arrow keys