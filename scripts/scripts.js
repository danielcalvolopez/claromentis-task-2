const ratingContainer = document.querySelector(".rating-container");

const thankyouContainer = document.querySelector(".thankyou-container");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});
