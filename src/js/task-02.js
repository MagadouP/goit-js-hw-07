const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.querySelector('ul#ingredients');

const htmlIngredients = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient
  li.classList.add("item");
  return li;
});

ingredientsListElement.append(...htmlIngredients);

