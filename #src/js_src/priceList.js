"use strict";
// ================= zmiana cennika =================//
const priceMenuList = document.querySelector(".price_menu_list");
const tableWrappers = document.querySelectorAll(".table_wrapper");
let activeLi = document.querySelector(".price_menu_list .active");
let priceMenuSelect = document.querySelector(".price_menu_select");

priceMenuList.addEventListener("click", (event) => {
  const targetDiv = document.querySelector(event.target.dataset.targetDiv);
  if (targetDiv) {
    tableWrappers.forEach((tableWrapper) => {
      tableWrapper.classList.add("hidden");
    });
    targetDiv.classList.remove("hidden");

    if (activeLi) {
      activeLi.classList.remove("active");
    }

    activeLi = event.target;
    activeLi.classList.add("active");
  }
});

priceMenuSelect.addEventListener("change", (event) => {
  const selectedOption = priceMenuSelect.options[priceMenuSelect.selectedIndex];
  const targetDiv = selectedOption.dataset.targetDiv;
  console.log(targetDiv);
  if (targetDiv) {
    tableWrappers.forEach((tableWrapper) => {
      tableWrapper.classList.add("hidden");
    });
    document.querySelector(targetDiv).classList.remove("hidden");
  }
});
