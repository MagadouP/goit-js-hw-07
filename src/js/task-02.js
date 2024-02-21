const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
<<<<<<< HEAD
=======

const ingredientsListElement = document.querySelector('ul#ingredients');

const htmlIngredients = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient
  li.classList.add("item");
  return li;
});

ingredientsListElement.append(...htmlIngredients);

>>>>>>> c2f996a294367a54e4fac086b97e146f84113282
