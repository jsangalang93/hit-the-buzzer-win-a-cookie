// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'HA-CHA! You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")


buttonElement.addEventListener('click', () => {
    cookieDisplayElement.textContent = winCookieElement
    console.log('you win a cookie! Congratulations!');
}) 




