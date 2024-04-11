// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'HA-CHA! You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")
const cooCounterElement = document.getElementById("counter")
// const counterElementOutput = cookieCounterElement


let counterElement = 0;


//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    cookieDisplayElement.textContent = winCookieElement;
    //^ console.log('you win a cookie! Congratulations!');
    //v cookie counter
    counterElement = counterElement + 1;
    console.log(counterElement);
    // counterElementOutput.textContent = cookieCounterElement;
    // counterElementOutput.textContent = `you currently have ${'cooCounterElement'} cookies.`;
    // cookieCounterElement.textContent = CounterElementOutput;
    // cooCounterElement.textContent = `you currently have ${'CounterElement'} cookies.`;
}) 


cooCounterElement.textContent = `you currently have ${'CounterElement'} cookies.`;



