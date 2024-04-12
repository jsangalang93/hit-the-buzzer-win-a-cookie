// V buttonElement is your element on JS query slecting bigButton class in css

const buttonElement = document.getElementById("bigButton");
const cookieDisplayElement = document.getElementById("cookieDisplay")
const counterDisplayElement = document.querySelector(".counter")
const backgroundElement = document.querySelector(".background")
const CookiePop = document.querySelector(".cookieGrid")
const eatElement = document.getElementById("eatCookie")
//COOKIE CHOICES PLAYAROUND
const cookieChoiceElement = document.querySelector(".cookieChoice")
// OUTPUT CONSTANTS


// CONST TO DISPLAY TOO MANY COOKIES PROMPT
const diabetesElement = document.getElementById("tooMany")



// MEDIA CONSTANTS
const ding = new Audio("../sounds/bell.mp3")
const munch = new Audio("../sounds/munch.mp3")

// const plateImage = document.createElement("img")
// img.src = "../images/elegant-plate-p-4000.png";
// const cookieImagePlateElement = document.querySelector(".cookiePlate").appendChild(plateImage);




// document.createElement("img")

let counterElement = 0;


const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
}


//output, you win a cookie 
buttonElement.addEventListener('click', () => {
    // cookie counter
    counterElement = counterElement + 1

    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 10 || counterElement === 10){
            ding.volume = 1;
            ding.play();
            cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
            // // appendchild three buttons, sugar, chocolate, bday
            //     if(cookieChoiceElement === "Sugar Cookie") {
            //         console.log(choclate chip)

            //     } else if(cookieChoiceElement === "Chocolate Chip") {
            //         console.log("chocolate chip works")

            //     } else {
            //         console.log("birthday cookie works");
            //     }

            // counterDisplayElement.textContent = cookieUpdateElement;
            
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
        }
       

    // cookie popup

}); 

eatElement.addEventListener('click', () => {
    const cookieUpdateElement = `you currently have ${counterElement} cookies.`
    if (counterElement <= 10 && counterElement >= 0){
    counterElement = counterElement - 1
    cookieDisplayElement.textContent = `mmmmmm Hope you enjoyed!`
            counterDisplayElement.textContent = cookieUpdateElement;
            munch.volume = 1
            munch.play()
    }
    
});

// cookie image pop up

// cookie counter

// if()


