
window.addEventListener('DOMContentLoaded', () => {
const treasure = document.querySelector('#Treasure');
const key = document.querySelector('#dodad');
const House = document.querySelector('#House');
const decoy = document.querySelector('#Decoy');
const door = document.querySelector('#Door')


var keyFound = false;

key.addEventListener('click', () => {
keyFound = true;
alert('You have found the key, now find the Lock');
treasure.setAttribute('visible', true);
decoy.setAttribute('visible', false);
});

treasure.addEventListener('click', () => {
if (keyFound) {
alert('You have unlocked the Door');
door.setAttribute('visible', false)
treasure.setAttribute('visible', false);
} else {
alert('There is nothing here');
}
});
});