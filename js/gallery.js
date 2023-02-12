"use strict";

const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popupLinks = document.querySelectorAll('.popup-link');  //wybór zdjęcia
const mainImage = document.querySelector('.popup_image_wrap'); // constanta dla wstawki img
const popupImg = document.getElementById('popupImage');
const popup = document.getElementById('popup');

let unlock = true;
const timeout = 800;

if(popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e){
            const popupName = popupLink.getAttribute('src');
            const curentPopup = document.getElementById('popup');
            popup.classList.add('open');
            popupImg.src = popupLink.src;
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelector('.close-popup');
if (popupCloseIcon > 0) {
    for( let index = 0; index < popupCloseIcon.length; index++) {
        const elClose = popupCloseIcon[index];
        
        elClose.addEventListener('click', function (e) {
            popupClose(elClose.closest('.popup'));
            e.preventDefault();

            popupImg.addEventListener('ondbclick',function(e) { //zamekanie po dbckick
                popupClose(elClose.closest('.popup'));
                e.preventDefault();
                });


        });
    }
}
        
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup .open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        
        curentPopup.classList.add('.open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup-content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        for(let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock')
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

