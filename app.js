// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")

// const counterElementOutput = cookieCounterElement
let counterElement = 0;


//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    // let counterElement = 0;
    cookieDisplayElement.textContent = winCookieElement;
    //^ console.log('you win a cookie! Congratulations!')

    //v cookie counter
        counterElement = counterElement + 1
            console.log(counterElement);
    
    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    counterDisplayElement.textContent = cookieUpdateElement;
}) 




