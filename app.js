const mySpecialButton = document.getElementById('my-special-button');
const mySpecialName = document.getElementById('my-special-name');
const mySpecialInput = document.getElementById('my-special-input');

mySpecialButton.addEventListener('click', () => {
    mySpecialName.textContent = mySpecialInput.value;
    mySpecialInput.value = '';
})

