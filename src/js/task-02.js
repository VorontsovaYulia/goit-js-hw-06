const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createLi = ingredients.map(ingredient => {
  
  const element = document.createElement("li");
  element.textContent = ingredient;
  
  element.classList = "item"
  return element;
});



const container = document.querySelector("#ingredients")

container.append(...createLi);

