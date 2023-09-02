// 01. Message Crush Sound
const hoverSound = document.getElementById('hoverSound');
const messageCrushSound = document.getElementById('message-crush');

messageCrushSound.addEventListener('mouseenter', () => {
    hoverSound.play();
});

// 02. Roulette Sound
const rouletteSound = document.getElementById('rouletteSound');
const randomizeSound = document.getElementById('randomize');

randomizeSound.addEventListener('mouseenter', () => {
    rouletteSound.play();
});