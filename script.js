const slideshow = document.getElementById('slideshow');
const images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}

setInterval(showNextImage, 5000);

let currentMessageIndex = 0;
const messages = document.querySelectorAll('.mensaje');

function showMessage(index) {
    messages.forEach((message, i) => {
        message.classList.toggle('active', i === index);
    });
}

function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        showMessage(currentMessageIndex);
    }
}

function prevMessage() {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        showMessage(currentMessageIndex);
    }
}

showMessage(currentMessageIndex);

const COUNT = 200;

const SIZES = [
    'raindrop--s',    
    'raindrop--s',
    'raindrop--s',
    'raindrop--s',
    'raindrop--t',
    'raindrop--t',
    'raindrop--t',
    'raindrop--t',
    'raindrop--t',
    'raindrop--u',
    'raindrop--v'    
];

const EMOJIS = [
    '🎉',
    '🎆',
    '🎊',
    '🏖️',
    '🌞',
    '🐚',
    '🌴',
    '🍹',
    '🎂',
    '🥳',
    '😘',
    '🥰',
    '😍',
    '💖',
    '💕',
    '💗',
    '❤️'
];

const rainContainer = document.querySelector('.rain-container');

const genRaindrop = (size, xStart, xEnd, yStart, emoji) => {
    const myEmoji = document.createElement('div');
    myEmoji.innerText = emoji;
    myEmoji.classList.add('raindrop', size);
    myEmoji.style.setProperty('--x-start', xStart + 'vw');
    myEmoji.style.setProperty('--x-end', xEnd + 'vw');
    myEmoji.style.setProperty('--y-start', yStart + 'vh');
    myEmoji.style.setProperty('--y-end', yStart + 200 + 'vh');

    return myEmoji;
}

for (let i = 0; i < COUNT; i++) {
    const size = randFromList(SIZES);
    const xStart = getRandom(0, 100);
    const xEnd = getRandom(xStart - 20, xStart + 20);
    const yStart = getRandom(-100, 0);
    const emoji = randFromList(EMOJIS);

    rainContainer.appendChild(genRaindrop(size, xStart, xEnd, yStart, emoji));
}

function randFromList(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}