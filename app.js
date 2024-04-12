// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'Ha-Cha! You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const ding = new Audio("../sounds/MouseClick.wav")
const backgroundElement = document.querySelector(".background")

const CookiePop = document.querySelector(".cookieGrid")
const diabetesElement = document.getElementById("tooMany")
const eatElement = document.getElementById("eatCookie")

let counterElement = 0;


const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
}


// image for cookie plate
// document.querySelector(cookieGrid).appendChild("https://pluspng.com/img-png/elegant-plate-p-4000.png")

//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    // cookie counter
    counterElement = counterElement + 1

    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 10 || counterElement === 10){
            cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
        }
       

    // cookie popup

}); 

eatElement.addEventListener('click', () => {
    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    if (counterElement < 10 && counterElement >= 0){
    counterElement = counterElement - 1
    cookieDisplayElement.textContent = `mmmmmm Hope you enjoyed!`
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
    }
    
});

// cookie image pop up

// cookie counter



