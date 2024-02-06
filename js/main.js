
"use strict";
// wyznaczamy czy to jest urządzenie mobilne i dodajemy odpowiedni klas
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.body.classList.add("_touches");
} else {
  document.body.classList.add("_pc");
}

// burger menu
const menuBody = document.querySelector(".menu_body");
const iconMenu = document.querySelector(".menu_icon");
if (iconMenu) {
  //sprawdzamy czy takie cos istnieje

  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      const goToBlockValue =
        goToBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }
      window.scrollTo({
        top: goToBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// DYNAMICZNA ZMIANA MARGIN-TOP DLA FULLSCREENTITLE BLOCKU
const header = document.querySelector("header");
const fScreenTitleBlock = document.querySelector(".wrapper");
const windowInnerHeight = document.documentElement.clientHeight;

// console.log(windowInnerHeight);
// let marginTop = header.clientHeight;
// console.log(marginTop);
// // document.documentElement.style.paddingTop = `${marginTop}px`;
// fScreenTitleBlock.style.marginTop = `calc(${marginTop}px + 90dvh)`;
// console.log(
//   (fScreenTitleBlock.style.marginTop = `calc(-${marginTop}px - 100dvh)`)
// );

//
//
// podmiana menu options w formie
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");

l = x.length;
for (let i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (let j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (let i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (let i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (let i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//
//================== otwieranie formy ===========
//

let isFormOpen = false;
let formWrapper = document.querySelector(".form_wrapper");
let form = document.querySelector("#form");
let closeBtn = document.querySelector("#form_close_btn");
let openLink = document.querySelector("#reservation");

const reservationBtnWrapper = document.querySelector(".button-wrapper");
let reservationBtn = document.querySelector("#reservation-btn");
//
// // відкриття форми
function openForm() {
  formWrapper.classList.toggle("d-none");
  isFormOpen = true;
  reservationBtnWrapper.classList.add("d-none");
}
openLink.addEventListener("click", openForm);
reservationBtn.addEventListener("click", () => {
  if (!isFormOpen) {
    openForm();
  } else if (isFormOpen) {
    closeForm();
  }
});

// // закриття форми
closeBtn.addEventListener("click", function (e) {
  if (isFormOpen) {
    closeForm();
  }
});

function closeForm() {
  formWrapper.classList.add("d-none");
  isFormOpen = false;
  reservationBtnWrapper.classList.remove("d-none");
}

document.addEventListener("click", function (e) {
  if (
    isFormOpen &&
    !form.contains(e.target) &&
    !formWrapper.classList.contains("d-none") &&
    // !e.target.closest(".form_wrapper")
    e.target !== openLink &&
    e.target !== reservationBtn
  ) {
    closeForm();
  }
});

document.addEventListener("keydown", function (e) {
  if (isFormOpen && e.key === "Escape") {
    closeForm();
  }
});

//  sprawdzenie formy
//
document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  // .addEventListener("submit", formSend);
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    console.log(error);

    let formData = new FormData(form);
    console.log(formData);

    if (error === 0) {
      form.classList.add("_sending");

      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        alert(result.message);

        form.reset();
        form.classList.remove("_sending");
        closeForm();
      } else {
        alert("blad wysylania");
        form.classList.remove("_sending");
      }
    } else {
      alert("wypelnij pola");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
      if (input.classList.contains("_tel")) {
        if (telTest(input)) {
          formAddError(input);
          error++;
          console.log("error");
        } else if (
          input.getAttribute("type") === "checkbox" &&
          input.checked === false
        ) {
          formAddError(input);
          error++;
        } else {
          if (input.value === "") {
            formAddError(input);
            error++;
          }
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function telTest(input) {
    return !/^[\d+][\d() -]{6,14}\d$/.test(input.value);
  }
  let things = "";
  document
    .querySelector("#things_select")
    .addEventListener("change", function getValue(event) {
      things = this.value;
      console.log(things);
    });
});
