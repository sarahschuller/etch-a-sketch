// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup the canvas for drawing

// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // destructured version of lines above

// Create random x & y starting points on the canvas

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * width);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Drawing function

function draw(options) {

}

// Handler for the keys

function handleKey(e){
   
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
        console.log(e.key);
        console.log('Handling Keys');
    }
    
}

// Clear/Shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);