// const div = document.querySelector('div');
// let topPos = 0;
// let leftPos = 0;
// const speed = 5;

// const keyIntervals = {
//     top: 0,
//     right: 0,
//     left: 0,
//     down: 0
// };

// function startMoving(key) {
//     console.log(key)
//     if (key == 'ArrowUp') {
//         topPos -= speed;
//     }
//     if (key == 'ArrowDown') {
//         topPos += speed;
//     }
//     if (key == 'ArrowLeft') {
//         leftPos -= speed;
//     }
//     if (key == 'ArrowRight') {
//         leftPos += speed;
//     }
//     console.log(leftPos, topPos);
//     div.style.top = `${topPos}px`;
//     div.style.left = `${leftPos}px`;
// }

// document.addEventListener("keydown", (e) => {
//     if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
//         startMoving(e.key);
//     }
// })

const div = document.getElementById('player');
let topPos = 0;
let leftPos = 0;
// const speed = 5;

// Teclas pressionadas
const keysPressed = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Atualiza posições baseado nas teclas pressionadas
function update() {
    if (keysPressed.ArrowUp) topPos -= speed;
    if (keysPressed.ArrowDown) topPos += speed;
    if (keysPressed.ArrowLeft) leftPos -= speed;
    if (keysPressed.ArrowRight) leftPos += speed;

    div.style.top = `${topPos}px`;
    div.style.left = `${leftPos}px`;

    requestAnimationFrame(update); // chama o loop novamente
}

// Marca tecla como pressionada
document.addEventListener('keydown', (e) => {
    if (e.key in keysPressed) {
        e.preventDefault(); // evita scroll
        keysPressed[e.key] = true;
    }
});

// Marca tecla como solta
document.addEventListener('keyup', (e) => {
    if (e.key in keysPressed) {
        keysPressed[e.key] = false;
    }
});

// Começa o loop
requestAnimationFrame(update);

const solid = document.getElementById('solid');
let solidTop = 0;
let solidLeft = 0;
const speed = 1;

function moveSolid() {
    solidTop += speed;
    // solidLeft += speed;

    solid.style.top = `${solidTop}px`;
    solid.style.left = `${solidLeft}px`;

    console.log(solidTop)
    console.log(solid.style.top);
    requestAnimationFrame(moveSolid)
}

requestAnimationFrame(moveSolid)
