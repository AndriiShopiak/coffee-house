// Burger Menu Functionall
let menuList = document.querySelector("#menu_bur");
let menuIcon = document.querySelector(".burger_icon");
let menuItems = document.querySelectorAll(".header_bur_cont a");
let brgLine = document.querySelector("#first_brg");
let brgLast = document.querySelector("#last_brg");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("add_style");
    brgLine.classList.toggle("brg_line");
    brgLast.classList.toggle("brg_last");
    menuIcon.classList.toggle("remove_gap");
});

menuItems.forEach((el) => {
    el.addEventListener("click", () => {
        menuList.classList.remove("add_style");
        brgLine.classList.remove("brg_line");
        brgLast.classList.remove("brg_last");
    });
});
// slider carousel
let sliderCon = document.querySelector(".slide_cards");
let slideRightArrow = document.querySelector(".slider_button_circle:last-child");
let slideLetfArrow = document.querySelector(".slider_button_circle:first-child");
let countOfPosition = 0;
let curentItem = document.querySelector("#curentItem");
let nextItem = document.querySelector("#nextItem");
let prewItem = document.querySelector("#prewItem");
let mainSliderCon = document.querySelector("#mainContainer");
let arrayOfItems = document.querySelectorAll(".slide_card");
let sum = 0;
const arrowButtonsOnSlide = document.querySelectorAll(".slider_button_circle");
// RIGHT BUTTON
const moveRight = () => {
    sum += 105;
    if(sum > 210) {
        sum = 0;
    }
    sliderCon.style.left = "-" + `${sum}` + "%";
};
// LEFT BUTTON
const moveLeft = () => {
    sum -= 105;
    if(sum < 0) {
        sum = 210;
    }
    sliderCon.style.left = "-" + `${sum}` + "%";
    arrOfBars[currentIndexOf].style.transition = "all .4s";
    arrOfBars[currentIndexOf].style.width = 0;
    arrOfBars[currentIndexOf].classList.remove("progress_animation");
    widthOfBar = 0;
    currentIndexOf--;
    if(currentIndexOf < 0) {
        currentIndexOf = 2;
    }
    slideLetfArrow.classList.add("click_effect");
    setTimeout(() => {
        slideLetfArrow.classList.remove("click_effect");
    }, 1500);
};
slideRightArrow.addEventListener("click", () => {
    slideRightArrow.classList.add("click_effect");
    setTimeout(() => {
        slideRightArrow.classList.remove("click_effect");
    }, 1500);
    moveRight();
    arrOfBars[currentIndexOf].style.transition = "all .4s";
    widthOfBar = 0;
    arrOfBars[currentIndexOf].style.width = 0;
    currentIndexOf++;
    if(currentIndexOf > 2) {
        currentIndexOf = 0;
    }
});
slideLetfArrow.addEventListener("click", moveLeft);
// ADD PROGRESS BAR
const arrOfBars = [document.querySelector("#first_prog"),document.querySelector("#second_prog"),document.querySelector("#third_prog")];
let widthOfBar = 0;
let currentIndexOf = 0
function addWidth() {
    arrOfBars[currentIndexOf].style.transition = "unset";
    if(widthOfBar === 100){
        arrOfBars[currentIndexOf].classList.remove("progress_animation");
        currentIndexOf++
        widthOfBar = 0;
        moveRight();
        if(arrOfBars[arrOfBars.length -1].style.width == "100%") {
            arrOfBars[arrOfBars.length -1].style.width = 0;
            currentIndexOf = 0;
        }
        return
    };
    widthOfBar ++;
    arrOfBars[currentIndexOf].classList.add("progress_animation");
    arrOfBars[currentIndexOf].style.width = widthOfBar + "%";
}
let counterOfTouch = 0;
let pause =  setInterval(addWidth, 50);
arrayOfItems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        clearInterval(pause);
        if(counterOfTouch === 1) {
            pause =  setInterval(addWidth, 50);
            counterOfTouch = 0;
        }
    });
    el.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
        counterOfTouch = 1;
        clearInterval(pause);
    });
    el.addEventListener("touchend", (e) => {
        clearInterval(pause);
        touchEndX = e.changedTouches[0].screenX;
        checkDirection();
        pause =  setInterval(addWidth, 50);
    });
    el.addEventListener("mouseleave", () => {
        clearInterval(pause);
        pause =  setInterval(addWidth, 50);
    });
});
// add swipe to slider
let touchStartX = 0;
let touchEndX = 0;

function checkDirection() {
    if(touchEndX < touchStartX) { 
        slideRightArrow.classList.add("click_effect");
        setTimeout(() => {
            slideRightArrow.classList.remove("click_effect");
        }, 1500);
        moveRight();
        arrOfBars[currentIndexOf].style.transition = "all .4s";
        widthOfBar = 0;
        arrOfBars[currentIndexOf].style.width = 0;
        currentIndexOf++;
    if(currentIndexOf > 2) {
        currentIndexOf = 0;
    }
    }
    if(touchEndX > touchStartX) {
      moveLeft();
    }
}

// MENU
// let placeContainer = document.getElementById("flex");
// console.log(placeContainer);
