// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const winCookieElement = 'You win a cookie!'
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const cookieUpdateElement = `you currently have ${'counterElement'} cookies.`
// const counterElementOutput = cookieCounterElement


let counterElement = 0;


//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    cookieDisplayElement.textContent = winCookieElement;
        // const message = document.createElement("h1");
        // message.textContent = "you win a cookie!"
    //^ console.log('you win a cookie! Congratulations!');
    //v cookie counter
    counterElement = counterElement + 1;
        console.log(counterElement);
    // counterDisplayElement.textContent = `you currently have ${'counterElement'} cookies.`;
        console.dir(counterDisplayElement);
    counterDisplayElement.textContent = cookieUpdateElement;
     cookieDisplayElement.appendChild(message);
        console.log('does this work');
    

    // counterElementOutput.textContent = CounterElement;
    // counterElementOutput.textContent = `you currently have ${'cooCounterElement'} cookies.`;
    // cookieCounterElement.textContent = CounterElementOutput;
    // cooCounterElement.textContent = `you currently have ${'CounterElement'} cookies.`;
}) 





