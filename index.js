const button = document.getElementById('button');
const body = document.querySelector('body');

const randomColor = function() {
    min = 0;
    max = 256;
    return Math.floor(Math.random() * (max - min) + min);
};

const changeColor = function() {
    body.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
};

button.addEventListener('click', changeColor);

