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
// document.body.style.backgroundImage = "./images/background.jpg";

const backgroundImage =document.createElement("img");
backgroundImage.src = "./images/background.jpg"
document.querySelector(".mainGrid").appendChild(backgroundImage)
backgroundImage.classList.add('background')

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
            whatKindElement.textContent = `(Pick 'Chocolate chip' or 'Birthday cookie')`
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
        }else{
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
        }
       

    // cookie popup

}); 



// cookie image pop up

// cookie counter




//COOKIE CHOICES PLAYAROUND
// const cookieChoiceElement = document.querySelector(".cookieChoice")

// // appendchild
            //     if(cookieChoiceElement === "Sugar cookie" || "SUGAR COOKIE" || "Sugar Cookie" || "sugar cookie") {

                        // counterDisplayElement.textContent = cookieUpdateElement;
            //        

            //     } else if(cookieChoiceElement === "Chocolate Chip") {
            //         console.log("chocolate chip works")

            //     } else {
            //         console.log("birthday cookie works");
            //     }

            // counterDisplayElement.textContent = cookieUpdateElement;