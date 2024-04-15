// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton")
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const backgroundElement = document.querySelector(".background")
const CookiePop = document.querySelector(".cookieGrid")
const eatElement = document.getElementById("eatCookie")
const mainGridElement = document.querySelector(".mainGrid")

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
image.classList.add("plateResize")




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
            ding.volume = 1
            ding.play()
}



eatElement.addEventListener('click', () => {
    
    if (counterElement <= 10 && counterElement >= 1){
        counterElement = counterElement - 1
        const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    cookieDisplayElement.textContent = `mmmmm Hope you enjoyed!`
            counterDisplayElement.textContent = cookieUpdateElement;

            const appendCookiesElement = document.querySelector(".appendCookies")
            appendCookiesElement.removeChild(appendCookiesElement.firstElementChild);
            diabetesElement.textContent = '';
            munch.volume = 1
            munch.play()
    }
    // console.log("this is the cookie button", counterElement);
});

//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 9){

                const buttonElement = document.getElementById("bigButton")

                counterElement = counterElement + 1
            const cookieUpdateElement = `you currently have ${counterElement} cookies.`
            // buttonElement.remove();
            
                console.log("this is the counter", counterElement)
                cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
                    document.getElementById('bigButton').style.display= 'none';
                ding.volume = 1
                ding.play()
                // const CookieChoiceElement = document.querySelector(".cookieChoice")
                const cookieChoiceButtonSug = document.createElement("button")
                cookieChoiceButtonSug.textContent = `Sugar Cookie`
                document.querySelector(".cookieChoice1").appendChild(cookieChoiceButtonSug)
                counterDisplayElement.textContent = cookieUpdateElement;

                const cookieChoiceButtonChoc = document.createElement("button")
                cookieChoiceButtonChoc.textContent = `Chocolate Chip Cookie`
                document.querySelector(".cookieChoice2").appendChild(cookieChoiceButtonChoc)

 


                cookieChoiceButtonSug.addEventListener('click', () => {
                    
                    cookieDisplayElement.textContent = `Sugar Cookie it is!`
                    
                    azucar.volume = 1
                    azucar.play()
                    // mainGridElement.appendChild(buttonElement)
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    const sugImage = document.createElement("img");
                    sugImage.src = "./images/Sugar Resize.png";
                    document.querySelector(".appendCookies").appendChild(sugImage)
                    sugImage.classList.add(".cookieResize")
                    document.getElementById('bigButton').style.display= 'inline-block';
                    // ^https://codingtipsandtricks.com/blog/how-to-hide-and-show-dom-elements-using-javascript/

                    
 
                });

                cookieChoiceButtonChoc.addEventListener('click', () => {
                    // mainGridElement.appendChild(buttonElement)
                    // const appendCookiesElement = document.querySelector(".appendCookies")
                    const chocoImage = document.createElement("img");
                    chocoImage.src = "./images/Chocolate Resize.png";
                    document.querySelector(".appendCookies").appendChild(chocoImage)
                    chocoImage.classList.add(".cookieResize")

                    cookieDisplayElement.textContent = `Chocolate Chip Cookie it is!`
                    

                    choco.volume = 1
                    choco.play()
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    document.getElementById('bigButton').style.display= 'inline-block';

                    
                  

                });   


            // counterDisplayElement.textContent = cookieUpdateElement;
            // ding.volume = 1
            // ding.play()
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'

        }

}); 


