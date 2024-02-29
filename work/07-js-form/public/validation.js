"use strict";
(function () {
    const nameErrorEl = document.querySelector(".register__error--name");
    const nameEl = document.querySelector(".register__name");

    const emailErrorEl = document.querySelector(".register__error--email");
    const emailEl = document.querySelector(".register__email");
    let confirmEmail = "";

    const confirmEmailErrorEl = document.querySelector(".register__error--confirm");
    const confirmEmailEl = document.querySelector(".register__confirm");

    const formEl = document.querySelector(".register");
    const submitErrorEl = document.querySelector(".register__error--form");
    const inputEls = document.querySelectorAll(".register__email, .register__name, .register__confirm");

    // name validation
    nameEl.addEventListener("input", (e) => {
        if(!e.target.value) {
            nameErrorEl.innerHTML = "Name is required";
        } else {
            nameErrorEl.innerHTML = "";
        }
    });

    //email validation
    emailEl.addEventListener("input", (e) => {
        if(!e.target.value) {
            emailErrorEl.innerHTML = "Email is required";
        } else {
            emailErrorEl.innerHTML = "";
            confirmEmail = e.target.value;
        }
    });

    //confirm email validation
    confirmEmailEl.addEventListener("input", (e) => {
        if(!e.target.value) {
            confirmEmailErrorEl.innerHTML = "Confirm email is required";
        } else if(e.target.value !== confirmEmail) {
            confirmEmailErrorEl.innerHTML = "Your emails do not match";
        } else {
            confirmEmailErrorEl.innerHTML = "";
        }
    });

    //submit validation
    formEl.addEventListener("submit", (e) => {
        let notValid = false;
        if (nameErrorEl.innerHTML || emailErrorEl.innerHTML || confirmEmailErrorEl.innerHTML || !nameEl.value || !emailEl.value) {
            notValid = true;
            submitErrorEl.innerHTML = "Please check out the errors above and try again.";
        }
        
        if (notValid) {
            e.preventDefault();
        }
    });

    //accessibility
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("focus", (e) => {
            inputEl.classList.add("focused");
        });
        inputEl.addEventListener("blur", (e) => {
            inputEl.classList.remove("focused");
        });
    });

})();