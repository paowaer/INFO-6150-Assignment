"use strict";
(function() {
    const menuEl = document.querySelector(".menu");
    menuEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu__toggle")) {
            const submenuEl = e.target.closest(".menu__item").querySelector(".submenu");
            if (e.target.getAttribute("aria-expanded") === "false") {
                e.target.setAttribute("aria-expanded", "true");
            } else {
                e.target.setAttribute("aria-expanded", "false");
            }
            submenuEl.classList.toggle("submenu--open");
        }
    });

    // hamburger menu
    const hamburgerEl = document.querySelector(".burger-button");
    const menuEl2 = document.querySelector(".menu");
    if (hamburgerEl && menuEl2) {
        hamburgerEl.addEventListener("click", () => {
            menuEl2.classList.toggle("open");
        });
    }

    // modal open
    const modalEl = document.querySelector(".modal");
    const openEls = document.querySelectorAll(".card__link");
    const closeEl = document.querySelector(".close");

    openEls.forEach((openEl) => {
        openEl.addEventListener("click", () => {
            modalEl.showModal();
        });
    });

    // modal close
    closeEl.addEventListener("click", () => {
        emailEl.value = "";
        confirmEmailEl.value = "";
        emailErrorEl.innerHTML = "";
        confirmEmailErrorEl.innerHTML = "";
        modalEl.close();
    });
    
    // accessibility
    const inputEls = document.querySelectorAll(".subscribe__email, .subscribe__confirm");
    
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("focus", (e) => {
            console.log("focus");
            inputEl.classList.add("focused");
        });
        inputEl.addEventListener("blur", (e) => {
            console.log("blur");
            inputEl.classList.remove("focused");
        });
    });
    
    // email validation
    const emailErrorEl = document.querySelector(".subscribe__error--email");
    const emailEl = document.querySelector(".subscribe__email");
    let confirmEmail = "";

    emailEl.addEventListener("input", (e) => {
        if(!e.target.value) {
            emailErrorEl.innerHTML = "The field is required";
            emailEl.classList.add("error");
        } else if (e.target.value.indexOf("@") === -1) {
            emailErrorEl.innerHTML = "This field be a valid email address including a @";
            emailEl.classList.add("error");
        } else {
            emailErrorEl.innerHTML = "";
            emailEl.classList.remove("error");
            confirmEmail = e.target.value;
        }
    });

    // confirm email validation
    const confirmEmailErrorEl = document.querySelector(".subscribe__error--confirm");
    const confirmEmailEl = document.querySelector(".subscribe__confirm");

    confirmEmailEl.addEventListener("input", (e) => {
        if(!e.target.value) {
            confirmEmailErrorEl.innerHTML = "The field is required";
            confirmEmailEl.classList.add("error");
        } else if(e.target.value !== confirmEmail) {
            confirmEmailErrorEl.innerHTML = "This field must match the provided email address";
            confirmEmailEl.classList.add("error");
        } else {
            confirmEmailEl.classList.remove("error");
            confirmEmailErrorEl.innerHTML = "";
        }
    });

    // submit validation
    const submitEl = document.querySelector(".subscribe");

    submitEl.addEventListener("submit", (e) => {
        let notValid = false;
        if (!emailEl.value) {
            notValid = true;
            emailErrorEl.innerHTML = "The field is required"
        } else if (emailEl.value.indexOf("@") === -1) {
            notValid = true;
            emailErrorEl.innerHTML = "This field be a valid email address including a @";
        } else {
            emailErrorEl.innerHTML = "";
        }

        if (!confirmEmailEl.value) {
            notValid = true;
            confirmEmailErrorEl.innerHTML = "The field is required";
        } else if (confirmEmailEl.value !== emailEl.value) {
            notValid = true;
            confirmEmailErrorEl.innerHTML = "This field must match the provided email address";
        } else {
            confirmEmailErrorEl.innerHTML = "";
        }
        
        if (notValid) {
            e.preventDefault();
        }
    });

    
})();