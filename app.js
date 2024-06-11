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
$(document).ready(function() {
const buttonElement = $("#bigButton")
const cookieDisplayElement = $("#cookieDisplay")
const counterDisplayElement = $(".counter")
const backgroundElement = $(".background")
const CookiePop = $(".cookieGrid")
const eatElement = $("#eatCookie")
const mainGridElement = $(".mainGrid")
const startMusicElement = $(".play")
const pauseMusicElement = $(".pause")
// what kind of cookie do you want
const whatKindElement = $(".whatKind")
const appendCookiesElement = $(".appendCookies")
const cookieButton1 = $("#cookieButton1")

// CONST TO DISPLAY TOO MANY COOKIES PROMPT
const diabetesElement = $("#tooMany")

//AUDIO CONSTANTS
const ding = new Audio("sounds/bell.mp3")
const munch = new Audio("sounds/munch.mp3")
const choco =new Audio("sounds/chocolate.mp3")
const azucar = new Audio("sounds/azucar.mp3")
const wow = new Audio("sounds/wow.mp3")
const nono = new Audio("sounds/nono.mp3")
const backgroundMusic = new Audio("sounds/background music.mp3")

// const muteAll = document.querySelector (".mute")


//PLATE PHOTO 
$('<img>', {
    src: 'images/elegant-plate-p-4000.png',
    class: 'plateResize'

}).appendTo('.cookiePlate');
// const image = document.createElement("img");
// image.src = "images/elegant-plate-p-4000.png";
// document.querySelector(".cookiePlate").appendChild(image)
// image.classList.add("plateResize")




//BACKGROUND IMAGE
const backgroundImage = $("img");
$('<img>', {
    src: 'images/background.jpg',
    class: 'background'

}).appendTo('.mainGrid')
// const backgroundImage = document.createElement("img");
// backgroundImage.src = "images/background.jpg"
// document.querySelector(".mainGrid").appendChild(backgroundImage)

//adding class to background element, styling
$(backgroundImage).add('background')

let counterElement = 0;

// variable function to refer to
// const functionButton = () => {
//     let counterElement = 0;
//     counterElement = counterElement + 1
//     // cookieDisplayElement.textContent = winCookieElement;
//             counterDisplayElement.textContent = cookieUpdateElement;
//             ding.volume = 1
//             ding.play()
// }
const functionButton = () => {
    let counterElement = 0;
    counterElement = counterElement + 1
    // cookieDisplayElement.textContent = winCookieElement;
            counterDisplayElement.text(cookieUpdateElement);
            ding.volume = 1
            ding.play()
}

// EAT A COOKIE BUTTON
// $('#eatElement').on('click', function() {
    
//     if (counterElement <= 10 && counterElement >= 1){
//         counterElement = counterElement - 1
//         const cookieUpdateElement = `you currently have ${counterElement} cookies.`;
//         $('cookieDisplayElement').text(`mmmmm Hope you enjoyed!`)
//         $('counterDisplayElement').text(cookieUpdateElement);

//         const appendCookiesElement = $(".appendCookies");
//         appendCookiesElement.children().first().remove();
//         $('diabetesElement').text('');
//         munch.volume = 1
//         munch.play()
//     }
//     // console.log("this is the cookie button", counterElement);
// });

$(eatElement).on('click', function() {
    
    if (counterElement <= 10 && counterElement >= 1){
        counterElement -= 1;
        const cookieUpdateElement = `you currently have ${counterElement} cookies.`;
        $('#cookieDisplayElement').text(`mmmmm Hope you enjoyed!`);
        $('#counterDisplayElement').text(cookieUpdateElement);

        // const appendCookiesElement = $(".appendCookies");
        $(appendCookiesElement).children().first().remove();
        $(diabetesElement).text('');
         
                munch.volume = 1
                munch.play()
    }
    // console.log("this is the cookie button", counterElement);
});

//MAIN EVENT
// buttonElement.addEventListener('click', () => {
$(buttonElement).on('click', function() {
    
    // counterDisplayElement.textContent = cookieUpdateElement;
        if(counterElement < 9){
            // const buttonElement = $("#bigButton")
                counterElement = counterElement + 1
            const cookieUpdateElement = `you currently have ${counterElement} cookies.`
            // buttonElement.remove();
            
                // console.log("this is the counter", counterElement)
            // cookieDisplayElement.textContent = `Ha-Cha! You win a cookie! What kind of cookie would you like?`
            cookieDisplayElement.text(`Ha-Cha! You win a cookie! What kind of cookie would you like?`)
                // button disappear
            bigButton.style.display= 'none';
                // audio play 
                ding.volume = 1
                ding.play()

                // appends sugar cookie button
                // const cookieChoiceButtonSug = cookieButton1;
                // cookieChoiceButtonSug.text(`Sugar Cookie`);
                // $(".cookieChoice1").append(cookieChoiceButtonSug);

                // counterDisplayElement.text(cookieUpdateElement);

                const cookieChoiceButtonSug = $("<button></button>", {
                    text: "Sugar Cookie",
                    id: "cookieButton1"
                  });
                  $(".cookieChoice1").append(cookieChoiceButtonSug);
                  
                  counterDisplayElement.text(cookieUpdateElement);

                //appends chocolate cookie button
                // const cookieChoiceButtonChoc = document.createElement("cookieButton2")
                // cookieChoiceButtonChoc.textContent = `Chocolate Chip Cookie`
                // document.querySelector(".cookieChoice2").appendChild(cookieChoiceButtonChoc)

                const cookieChoiceButtonChoc = $('<button></button>', {
                    text: (`Chocolate Chip Cookie`),
                    id: 'cookieButton2'
                });
                    $(".cookieChoice2").append(cookieChoiceButtonChoc);

                // appends peanut butter button
                // const cookieChoiceButtonPNut = document.createElement("cookieButton3")
                // cookieChoiceButtonPNut.textContent = `Peanut Butter`
                // document.querySelector(".cookieChoice3").appendChild(cookieChoiceButtonPNut)

                const cookieChoiceButtonPNut = $('<button></button>', {
                    text: (`Peanut Butter`),
                    id: 'cookieButton3'
                });
                cookieChoiceButtonPNut.text(`Peanut Butter`);
                $(".cookieChoice3").append(cookieChoiceButtonPNut);


 

                // addEventListener for Sugar Cookie
                cookieChoiceButtonSug.on('click', () => {
                    
                    cookieDisplayElement.textContent = `Sugar Cookie it is!`
                    
                    azucar.volume = 1
                    azucar.play()
                    
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();

                    // sugar cookie picture append
                    // const sugImage = document.createElement("img");
                    // sugImage.src = "./images/Sugar Resize.png";
                    // document.querySelector(".appendCookies").appendChild(sugImage)
                    // sugImage.classList.add(".cookieResize")

                    const sugImage = $("<img/>").attr("src", "./images/Sugar Resize.png");
                    
                    appendCookiesElement.append(sugImage);
                    sugImage.addClass(".cookieResize");
                    $(cookieDisplayElement).text(`Sugar Cookie it is!`);

                    // centers and makes button reappear
                    // document.getElementById('bigButton').style.display= 'inline-block';
                    // ^https://codingtipsandtricks.com/blog/how-to-hide-and-show-dom-elements-using-javascript/

                    $('#bigButton').css('display', 'inline-block');
                    // ^https://codingtipsandtricks.com/blog/how-to-hide-and-show-dom-elements-using-javascript/

                
                });

                
                cookieChoiceButtonChoc.on('click', () => {
                    
                    // const chocoImage = document.createElement("img");
                    // chocoImage.src = "./images/Chocolate Resize.png";
                    // document.querySelector(".appendCookies").appendChild(chocoImage)
                    // chocoImage.classList.add(".cookieResize")

                    const chocoImage = $("<img/>").attr("src", "./images/Chocolate Resize.png");
                    
                    appendCookiesElement.append(chocoImage);
                    chocoImage.addClass(".cookieResize");

                    $(cookieDisplayElement).text(`Chocolate Chip Cookie it is!`);
                    
                    // choco.volume = 1
                    // choco.play()
                //     cookieChoiceButtonChoc.remove();
                //     cookieChoiceButtonSug.remove();
                //     cookieChoiceButtonPNut.remove();
                //     document.getElementById('bigButton').style.display= 'inline-block';

                // });   

                   choco.volume = 1
                    choco.play()
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();
                    $('#bigButton').css('display', 'inline-block');

                });  

                // cookieChoiceButtonPNut.addEventListener('click', () => {
                //     // mainGridElement.appendChild(buttonElement)
                //     // const appendCookiesElement = document.querySelector(".appendCookies")
                //     const PNutImage = document.createElement("img");
                //     PNutImage.src = "./images/Peanut Resize.png";
                //     document.querySelector(".appendCookies").appendChild(PNutImage)
                //     PNutImage.classList.add(".cookieResize")

                //     cookieDisplayElement.textContent = `Peanuts in a Cookie it is, I guess.`

                cookieChoiceButtonPNut.on('click', () => {
                    // mainGridElement.appendChild(buttonElement)
                    // const appendCookiesElement = document.querySelector(".appendCookies")
                    const PNutImage = $("<img/>").attr("src", "./images/Peanut Resize.png");
                    appendCookiesElement.append(PNutImage);
                    PNutImage.addClass(".cookieResize");

                    $(cookieDisplayElement).text(`Peanuts in a Cookie it is, I guess.`);
                    

                    // wow.volume = 1
                    // wow.play()
                    // cookieChoiceButtonChoc.remove();
                    // cookieChoiceButtonSug.remove();
                    // cookieChoiceButtonPNut.remove();
                    // document.getElementById('bigButton').style.display= 'inline-block';

                    wow.volume = 1
                    wow.play()
                    cookieChoiceButtonChoc.remove();
                    cookieChoiceButtonSug.remove();
                    cookieChoiceButtonPNut.remove();
                    $('#bigButton').css('display', 'inline-block');

                });   

        }else{
            // nono.volume = 1
            // nono.play()
            // buttonElement.removeEventListener('click', buttonElement)
            // diabetesElement.textContent = 'You seem to have a lot on your plate! Eat one before you test your luck again!'
            
            nono.volume = 1
            nono.play()
            buttonElement.off('click', buttonElement)
            diabetesElement.text('You seem to have a lot on your plate! Eat one before you test your luck again!')

        }

}); 

$(startMusicElement).on('click', () => {
    backgroundMusic.volume = 1
    backgroundMusic.play()
    
})

$(pauseMusicElement).on('click', () => {
    backgroundMusic.pause()
})
});

