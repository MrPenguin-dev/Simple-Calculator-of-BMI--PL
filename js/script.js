let formElement = document.querySelector(".js-form");
let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  height = heightElement.value;
  weight = weightElement.value;

  let bmi = weight / ((height / 100) ** 2);
  bmiElement.innerText = bmi.toFixed(2);
});