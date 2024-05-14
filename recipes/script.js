const dropdownContainer = document.querySelector(".dropdown-container");
const ingredientsTitle = document.querySelector(".ingredients-title");
const dropdownIngredients = document.querySelector(".dropdown-ingredients");

ingredientsTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownIngredients.classList.toggle("visible");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownIngredients.classList.remove("visible")
  }
})