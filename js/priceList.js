"use strict";const priceMenuList=document.querySelector(".price_menu_list"),tableWrappers=document.querySelectorAll(".table_wrapper");let activeLi=document.querySelector(".price_menu_list .active"),priceMenuSelect=document.querySelector(".price_menu_select");priceMenuList.addEventListener("click",(e=>{const t=document.querySelector(e.target.dataset.targetDiv);t&&(tableWrappers.forEach((e=>{e.classList.add("hidden")})),t.classList.remove("hidden"),activeLi&&activeLi.classList.remove("active"),activeLi=e.target,activeLi.classList.add("active"))})),priceMenuSelect.addEventListener("change",(e=>{const t=priceMenuSelect.options[priceMenuSelect.selectedIndex].dataset.targetDiv;console.log(t),t&&(tableWrappers.forEach((e=>{e.classList.add("hidden")})),document.querySelector(t).classList.remove("hidden"))}));