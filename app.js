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
const choco =new Audio("../sounds/chocolate.mp3")
const azucar = new Audio("../sounds/azucar.mp3")

//PLATE PHOTO 
const image = document.createElement("img");
image.src = "./images/elegant-plate-p-4000.png";
document.querySelector(".cookiePlate").appendChild(image)

// //BACKGROUND IMAGE
const backgroundImage = document.createElement("img");
backgroundImage.src = "./images/background.jpg"
document.querySelector(".mainGrid").appendChild(backgroundImage)
//adding class to background element, styling
backgroundImage.classList.add('background')


let counterElement = 0;

const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    // cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            // ding.volume = 1
            // ding.play()
}
eatElement.addEventListener('click', () => {
    // const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    
    if (counterElement <= 10 && counterElement >= 1){
        counterElement = counterElement - 1
        const cookieUpdateElement = `you currently have ${counterElement} cookies.`

    cookieDisplayElement.textContent = `mmmmm Hope you enjoyed!`
            counterDisplayElement.textContent = cookieUpdateElement;

            const appendCookiesElement = document.querySelector(".appendCookies")
            appendCookiesElement.removeChild(appendCookiesElement.firstElementChild);
            diabetesElement.textContent = '';
            // munch.volume = 1
            // munch.play()
    }
    console.log("this is the cookie button", counterElement);
});

//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    // cookie counter
    

    
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 9){
            
        counterElement = counterElement + 1
        const cookieUpdateElement = `you currently have ${counterElement} cookies.`
        console.log("this is the counter", counterElement)
            cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
            // ding.volume = 1
            // ding.play()
                const CookieChoiceElement = document.querySelector(".cookieChoice")
                // const button1 = 
                // const button2 =
                const cookieChoiceAppendSug = document.createElement("button")
                cookieChoiceAppendSug.textContent = `Sugar Cookie`
                document.querySelector(".cookieChoice1").appendChild(cookieChoiceAppendSug)
                counterDisplayElement.textContent = cookieUpdateElement;

                const cookieChoiceAppendChoc = document.createElement("button")
                cookieChoiceAppendChoc.textContent = `Chocolate Chip Cookie`
                document.querySelector(".cookieChoice2").appendChild(cookieChoiceAppendChoc)

                cookieChoiceAppendSug.addEventListener('click', () => {
                    
                    cookieDisplayElement.textContent = `Sugar Cookie it is!`
                    // azucar.volume = 1
                    // azucar.play()
                    cookieChoiceAppendChoc.remove();
                    cookieChoiceAppendSug.remove();
                    
                    const chocoImage = document.createElement("img");
                    chocoImage.src = "./images/Sugar Resize.png";
                    document.querySelector(".appendCookies").appendChild(chocoImage)
                    chocoImage.classList.add(".cookieResize")


                    
                });

                cookieChoiceAppendChoc.addEventListener('click', () => {
                    // const appendCookiesElement = document.querySelector(".appendCookies")
                    const chocoImage = document.createElement("img");
                    chocoImage.src = "./images/Chocolate Resize.png";
                    document.querySelector(".appendCookies").appendChild(chocoImage)
                    chocoImage.classList.add(".cookieResize")


                    cookieDisplayElement.textContent = `Chocolate Chip Cookie it is!`
                    // choco.volume = 1
                    // choco.play()
                    cookieChoiceAppendChoc.remove();
                    cookieChoiceAppendSug.remove();

                  

                });   

            // counterDisplayElement.textContent = cookieUpdateElement;
            // ding.volume = 1
            // ding.play()
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'

        }

}); 
