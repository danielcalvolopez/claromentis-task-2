const ratingContainer = document.querySelector(".rating-container");

const thankyouContainer = document.querySelector(".thankyou-container");

const submitButton = document.getElementById("submit");

const rating = document.getElementById("rating");

const rates = document.querySelectorAll(".button-rating");

submitButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
