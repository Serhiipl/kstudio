"use strict";


if(localStorage.getItem("cookiesAccepted") === null) {
    setTimeout(() => {
        let cookies = document.querySelector('#cookie_popup');
        
        cookies.classList.remove('d-none');
        
    }, 500);
}
function closeCookies() {
    let cookies = document.querySelector('#cookie_popup');
   cookies.classList.add('d-none');
    localStorage.setItem("cookiesAccepted", true);
}
// if (localStorage.getItem("cookiesAccepted") === true) {
//     loadAnalytics();
//  }