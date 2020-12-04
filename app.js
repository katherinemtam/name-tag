const mySpecialButton = document.getElementById('my-special-button');
const mySpecialName = document.getElementById('my-special-name');
const mySpecialInput = document.getElementById('my-special-input');
const changeColorPink = document.getElementById('change-color-pink')
const changeColorGreen = document.getElementById('change-color-green')
const changeColorBlue = document.getElementById('change-color-blue')
const tagColor = document.getElementById('hello-id')

mySpecialButton.addEventListener('click', () => {
    mySpecialName.textContent = mySpecialInput.value;
    mySpecialInput.value = '';
})

changeColorPink.addEventListener('click', () => {
    tagColor.style.backgroundColor = "pink";
})

changeColorGreen.addEventListener('click', () => {
    tagColor.style.backgroundColor = "lightgreen";
})

changeColorBlue.addEventListener('click', () => {
    tagColor.style.backgroundColor = "lightblue";
})
