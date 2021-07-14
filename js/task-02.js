// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
//     узлов используй document.createElement().

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



