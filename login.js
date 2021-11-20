const sign_up_btn = document.querySelector("#signUpBtn");
const sign_in_btn = document.querySelector("#signInBtn");
const sign_in = document.querySelector(".sign-in");
const sign_up = document.querySelector(".sign-up");


sign_up_btn.addEventListener("click", () => {
    sign_in.classList.add("display")
    sign_up.classList.remove("display")
});
sign_in_btn.addEventListener("click", () => {
    sign_in.classList.remove("display")
    sign_up.classList.add("display")
});