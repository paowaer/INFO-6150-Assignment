"use strict";
(function() {
    const menuEl = document.querySelector(".menu__toggle");
    const dropdownEl = document.querySelector(".menu__submenu");
    menuEl.addEventListener("click", function() {
        dropdownEl.classList.toggle("active");
    });
})();