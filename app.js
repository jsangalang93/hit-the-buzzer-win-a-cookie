// V buttonElement is your element on JS query slecting bigButton class in css

// const buttonElement = document.getElementById("bigButton")
// const cookieDisplayElement = document.getElementById("cookieDisplay")
// const counterDisplayElement = document.querySelector(".counter")
// const backgroundElement = document.querySelector(".background")
// const CookiePop = document.querySelector(".cookieGrid")
// const eatElement = document.getElementById("eatCookie")
// const mainGridElement = document.querySelector(".mainGrid")
// const startMusicElement = document.querySelector(".play")
// const pauseMusicElement = document.querySelector(".pause")
// // what kind of cookie do you want
// const whatKindElement = document.querySelector(".whatKind")

// // CONST TO DISPLAY TOO MANY COOKIES PROMPT
// const diabetesElement = document.getElementById("tooMany")

const buttonElement = $("bigButton")
const cookieDisplayElement = $("cookieDisplay")
const counterDisplayElement = $(".counter")
const backgroundElement = $(".background")
const CookiePop = $(".cookieGrid")
const eatElement = $("eatCookie")
const mainGridElement = $(".mainGrid")
const startMusicElement = $(".play")
const pauseMusicElement = $(".pause")
// what kind of cookie do you want
const whatKindElement = $(".whatKind")

// CONST TO DISPLAY TOO MANY COOKIES PROMPT
const diabetesElement = $("tooMany")

//AUDIO CONSTANTS
const ding = new Audio("sounds/bell.mp3")
const munch = new Audio("sounds/munch.mp3")
const choco =new Audio("sounds/chocolate.mp3")
const azucar = new Audio("sounds/azucar.mp3")
const wow = new Audio("sounds/wow.mp3")
const nono = new Audio("sounds/nono.mp3")
const backgroundMusic = new Audio("sounds/background music.mp3")

// const muteAll = document.querySelector (".mute")

// muteAll.setAttribute('click', () => {
//     set

// })


//PLATE PHOTO 
$('<img>', {
    src: 'images/elegant-plate-p-4000.png',
    class: 'plateResize'

}).appendTo('.cookiePlate')
// const image = document.createElement("img");
// image.src = "images/elegant-plate-p-4000.png";
// document.querySelector(".cookiePlate").appendChild(image)
// image.classList.add("plateResize")




//BACKGROUND IMAGE
$('<img>', {
    src: 'images/background.jpg',
    class: 'background'

}).appendTo('.mainGrid')
// const backgroundImage = document.createElement("img");
// backgroundImage.src = "images/background.jpg"
// document.querySelector(".mainGrid").appendChild(backgroundImage)

//adding class to background element, styling
backgroundImage.classList.add('background')

let counterElement = 0;

// variable function to refer to
const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    // cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.textContent = cookieUpdateElement;
            ding.volume = 1
            ding.play()
}


// EAT A COOKIE BUTTON
$('#eatElement').on('click', function() {
    
    if (counterElement <= 10 && counterElement >= 1){
        counterElement = counterElement - 1
        const cookieUpdateElement = `you currently have ${counterElement} cookies.`;
        $('cookieDisplayElement').text(`mmmmm Hope you enjoyed!`)
        $('counterDisplayElement').text(cookieUpdateElement);

        const appendCookiesElement = $(".appendCookies");
        appendCookiesElement.children().first().remove();
        $('diabetesElement').text('');
        munch.volume = 1
        munch.play()
    }
    // console.log("this is the cookie button", counterElement);
});

//MAIN EVENT
// buttonElement.addEventListener('click', () => {
$('#buttonElement').on('click', function() {
    
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 9){

            const buttonElement = $("bigButton")
                counterElement = counterElement + 1
            const cookieUpdateElement = `you currently have ${counterElement} cookies.`
            // buttonElement.remove();
            
                // console.log("this is the counter", counterElement)
            cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
                // button disappear
            $('bigButton').style.display= 'none';
                // audio play 
                ding.volume = 1
                ding.play()

                // appends sugar cookie button
                const cookieChoiceButtonSug = document.createElement("cookieButton1")
                cookieChoiceButtonSug.textContent = `Sugar Cookie`
                document.querySelector(".cookieChoice1").appendChild(cookieChoiceButtonSug)

                counterDisplayElement.textContent = cookieUpdateElement;

                //appends chocolate cookie button
                const cookieChoiceButtonChoc = document.createElement("cookieButton2")
                cookieChoiceButtonChoc.textContent = `Chocolate Chip Cookie`
                document.querySelector(".cookieChoice2").appendChild(cookieChoiceButtonChoc)

                // appends peanut butter button
                const cookieChoiceButtonPNut = document.createElement("cookieButton3")
                cookieChoiceButtonPNut.textContent = `Peanut Butter`
                document.querySelector(".cookieChoice3").appendChild(cookieChoiceButtonPNut)


 

                // addEventListener for Sugar Cookie
                cookieChoiceButtonSug.addEventListener('click', () => {
                    
                    cookieDisplayElement.textContent = `Sugar Cookie it is!`
                    
                    azucar.volume = 1
                    azucar.play()
                    
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();

                    // sugar cookie picture append
                    const sugImage = document.createElement("img");
                    sugImage.src = "./images/Sugar Resize.png";
                    document.querySelector(".appendCookies").appendChild(sugImage)
                    sugImage.classList.add(".cookieResize")

                    // centers and makes button reappear
                    document.getElementById('bigButton').style.display= 'inline-block';
                    // ^https://codingtipsandtricks.com/blog/how-to-hide-and-show-dom-elements-using-javascript/

                });

                cookieChoiceButtonChoc.addEventListener('click', () => {
                    
                    const chocoImage = document.createElement("img");
                    chocoImage.src = "./images/Chocolate Resize.png";
                    document.querySelector(".appendCookies").appendChild(chocoImage)
                    chocoImage.classList.add(".cookieResize")

                    cookieDisplayElement.textContent = `Chocolate Chip Cookie it is!`
                    
                    choco.volume = 1
                    choco.play()
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();
                    document.getElementById('bigButton').style.display= 'inline-block';

                });   

                cookieChoiceButtonPNut.addEventListener('click', () => {
                    // mainGridElement.appendChild(buttonElement)
                    // const appendCookiesElement = document.querySelector(".appendCookies")
                    const PNutImage = document.createElement("img");
                    PNutImage.src = "./images/Peanut Resize.png";
                    document.querySelector(".appendCookies").appendChild(PNutImage)
                    PNutImage.classList.add(".cookieResize")

                    cookieDisplayElement.textContent = `Peanuts in a Cookie it is, I guess.`
                    

                    wow.volume = 1
                    wow.play()
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();
                    document.getElementById('bigButton').style.display= 'inline-block';

                    
                  

                });   

        }else{
            nono.volume = 1
            nono.play()
            buttonElement.removeEventListener('click', buttonElement)
            diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
            

        }

}); 

startMusicElement.addEventListener('click', () => {
    backgroundMusic.volume = 1
    backgroundMusic.play()
    
})

pauseMusicElement.addEventListener('click', () => {
    backgroundMusic.pause()
})


