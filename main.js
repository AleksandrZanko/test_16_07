const closeButton = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".popup__button-open");

closeButton.addEventListener("click", () => {
  form.classList.add("hide");
  overlay.classList.add("hide");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hide");
  overlay.classList.add("hide");
});
