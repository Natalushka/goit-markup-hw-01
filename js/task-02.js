const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientListEl = document.querySelector('ul#ingredients');

const liElList = ingredients.map(ingredientsCb);

ingredientListEl.append(...liElList);

function ingredientsCb(ingredient) {
  const liEl = document.createElement('li');

  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
}
