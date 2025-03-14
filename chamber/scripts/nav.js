const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const display = document.querySelector('#cards')

const gridButton = document.querySelector('#grid');

gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
})

const listButton = document.querySelector('#list');

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
})