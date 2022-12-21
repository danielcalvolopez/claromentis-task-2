const submitButton = document.getElementById("submit");
const ratingContainer = document.querySelector(".rating-container");
const thankyouContainer = document.querySelector(".thankyou-container");
const rating = document.getElementById("rating");

const ratings = [
  { number: "1" },
  { number: "2" },
  { number: "3" },
  { number: "4" },
  { number: "5" },
];

const btnsContent = document.querySelector(".btns-content");

const displayRatings = ratings.map((rating) => {
  return `<button class="button-rating">${rating.number}</button>`;
});

btnsContent.innerHTML = displayRatings.join("");

submitButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});

const rates = document.querySelectorAll(".button-rating");

rates.forEach((rate) => {
  rate.addEventListener("click", (data) => {
    rating.innerHTML = data.target.innerHTML;
  });
});
