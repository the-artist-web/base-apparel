const email = document.querySelector("[data-email]"),
iconError = document.querySelector("[data-icon-error]"),
submit = document.querySelector("[data-submit]"),
errorText = document.querySelector("[data-error-text]");

submit.addEventListener("click", () => {
    if (email.value.toLowerCase() == "") {
        email.classList.add("active");
        iconError.classList.add("active");
        errorText.classList.add("active");
    } else {
        email.classList.remove("active");
        iconError.classList.remove("active");
        errorText.classList.remove("active");
    };
});

function emailAddress(value) {
    submit.addEventListener("click", () => {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    
        if (value != emailRegex) {
            email.classList.add("active");
            iconError.classList.add("active");
            errorText.classList.add("active");
        } else {
            value = "";

            email.classList.remove("active");
            iconError.classList.remove("active");
            errorText.classList.remove("active");
        };
    });
};