const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')
console.log(list);

const ingredientsList = ingredients.map(element => {
  const item = document.createElement('li');
  item.append(element);
  console.log(item);
  return item;
  
});

list.append(...ingredientsList);



