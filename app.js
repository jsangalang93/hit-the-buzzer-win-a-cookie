// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'Ha-Cha! You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const ding = new Audio("../MouseClick.wav")
const backgroundElement = document.querySelector(".background")
const CookiePop = document.querySelector(".cookieGrid")

let counterElement = 0;


//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    cookieDisplayElement.textContent = winCookieElement;

    // sound byte for button
    ding.volume = 1
    ding.play()
    
    // cookie counter
    counterElement = counterElement + 1
        // console.log(counterElement);
    
    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    counterDisplayElement.textContent = cookieUpdateElement;

    // cookie popup




}) 

// cookie image pop up



// sound byte for button
    
    // ding.volume = .05
    // ding.play()

// cookie counter



