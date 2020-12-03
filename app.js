const mySpecialButton = document.getElementById('my-special-button');
const mySpecialName = document.getElementById('my-special-name');
const mySpecialInput = document.getElementById('my-special-input');

mySpecialButton.addEventListener('click', () => {
    mySpecialName.textContent = mySpecialInput.value;
    mySpecialInput.value = '';
})

const changeColorPink = document.getElementById('change-color-pink')
changeColorPink.addEventListener('click', () => {
    document.body.style.backgroundColor = "pink";
})

const changeColorGreen = document.getElementById('change-color-green')
changeColorGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = "lightgreen";
})

const changeColorBlue = document.getElementById('change-color-blue')
changeColorBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = "lightblue";
})
