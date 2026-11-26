const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstNameInput = document.querySelector("#fname");
    const firstName = firstNameInput.value.trim()
    const emailInput = document.querySelector("#email");
    const email = emailInput.value.trim();
    const firstNameError = document.querySelector("#firstNameError");
    const emailError = document.querySelector("#emailError");

    firstNameError.textContent = firstName ? "" : "First name is required.";

    emailError.textContent = !email ? "Email is required."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? "Enter a valid email."
            : "";


    if (!firstNameError.textContent && !emailError.textContent) {

        confirmation.textContent = `Submitted: ${firstName} (${email})`;

        form.reset();

        firstNameInput.focus();
    }
    else confirmation.textContent = " ";
}
);