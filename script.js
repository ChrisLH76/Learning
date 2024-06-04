const btnEric = document.querySelector(".button-eric");
const cardDiane = document.querySelector(".card-diane");
console.log(cardDiane);
btnEric.addEventListener("click", () => {
  cardDiane.style.visibility = "hidden";
  cardDiane.style.opacity = "0";
});
