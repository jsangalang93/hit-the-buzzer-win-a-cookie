// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'You win a cookie!'
    

buttonElement.addE

buttonElement.addEventListener('click', () => {
    winCookieElement.textContent = buttonElement
    console.log('you win a cookie! Congratulations!');
}) 
