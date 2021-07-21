const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeListIngredients = ingredients.map(el => {
  const itemEl = document.createElement('li');
  const textEl = document.createElement('p');
  itemEl.append(textEl);
  textEl.textContent = el;
  return itemEl;
});

ingredientsListRef.append(...makeListIngredients);

console.log(ingredientsListRef);