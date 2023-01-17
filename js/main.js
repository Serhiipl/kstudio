
"use strict";
// wyznaczamy czy to jest urządzenie mobilne i dodajemy odpowiedni klas
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add("_touches");
} else {
    document.body.classList.add("_pc");
};