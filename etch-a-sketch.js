// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup the canvas for drawing

// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // destructured version of lines above

// Create random x & y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Drawing function

function draw({ key }) {
    console.log(key);

    // Start the path
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Move X & Y values depending on user input
    switch (key) {
        case 'Arrowup':
            y -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Handler for the keys

function handleKey(e){
   
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
    
}

// Clear/Shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);