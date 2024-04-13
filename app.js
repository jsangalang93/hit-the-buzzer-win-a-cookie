// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const backgroundElement = document.querySelector(".background")
const CookiePop = document.querySelector(".cookieGrid")
const eatElement = document.getElementById("eatCookie")

// what kind of cookie do you want
const whatKindElement = document.querySelector(".whatKind")

// const cookiePlateElement = document.querySelector(".cookiePlate")
// OUTPUT CONSTANTS

// CONST TO DISPLAY TOO MANY COOKIES PROMPT
const diabetesElement = document.getElementById("tooMany")

// MEDIA CONSTANTS
const ding = new Audio("../sounds/bell.mp3")
const munch = new Audio("../sounds/munch.mp3")

//PLATE PHOTO 
const image = document.createElement("img");
image.src = "./images/elegant-plate-p-4000.png";
document.querySelector(".cookiePlate").appendChild(image)

// //BACKGROUND IMAGE
const backgroundImage =document.createElement("img");
backgroundImage.src = "./images/background.jpg"
document.querySelector(".mainGrid").appendChild(backgroundImage)
//adding class to backgorund element, styling
backgroundImage.classList.add('background')


let counterElement = 0;

const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
}
eatElement.addEventListener('click', () => {
    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    if (counterElement <= 11 && counterElement >= 0){
    counterElement = counterElement - 1
    cookieDisplayElement.textContent = `mmmmm Hope you enjoyed!`
            counterDisplayElement.textContent = cookieUpdateElement;
            munch.volume = 1
            munch.play()
    }
    
});

//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    // cookie counter
    counterElement = counterElement + 1

    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 10 || counterElement === 10){
            cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
            // whatKindElement.textContent = `(Pick 'Chocolate chip' or 'Birthday cookie')`
                const CookieChoiceElement = document.querySelector(".cookieChoice")
                // const button1 = 
                // const button2 =
                const cookieChoiceAppendSug = document.createElement("button")
                cookieChoiceAppendSug.textContent = `Sugar Cookie`
                document.getElementById("cookieChoice1").appendChild(cookieChoiceAppendSug)
                counterDisplayElement.textContent = cookieUpdateElement;

                const cookieChoiceAppendChoc = document.createElement("button")
                cookieChoiceAppendChoc.textContent = `Chocolate Chip Cookie`
                document.getElementById("cookieChoice2").appendChild(cookieChoiceAppendChoc)

                cookieChoiceAppendSug.addEventListener('click', () => {

                    cookieDisplayElement.textContent = `Sugar Cookie it is!`
                    const whatKindElement = document.querySelector(".whatKind")
                    // whatKindElement.(whatKindElement.firstChild);
                    // whatKindElement.clearChildren(whatKindElement);
                    
                });

                cookieChoiceAppendChoc.addEventListener('click', () => {
                    cookieDisplayElement.textContent = `Chocolate Chip Cookie it is!`
                    
                    const whatKindElement = document.querySelector(".whatKind")
                    cookieChoiceAppendChoc.removeAttribute('disabled');
                    cookieChoiceAppendSug.removeAttribute('disabled');
                    

                })


                    
                

            // counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
        }

}); 
