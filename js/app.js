var button = document.querySelector(".btn");
var topline = document.querySelector("#tagline");

button.addEventListener("click", () => {
    topline.style.color = "gold";
    topline.innerHTML = "Sign Up Today!"

})