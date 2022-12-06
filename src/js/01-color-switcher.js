const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let bgcTimer = null;

startEl.addEventListener('click', onChangeColor);
stopEl.addEventListener('click', offChangeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onChangeColor() {
    startEl.setAttribute('disabled', 'true');
    stopEl.removeAttribute('disabled');
    
    bgcTimer = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
}

function offChangeColor() {
    stopEl.setAttribute('disabled', 'true');
    startEl.removeAttribute('disabled');
    clearInterval(bgcTimer);
    
}


