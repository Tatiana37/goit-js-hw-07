// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log(`В списке ${allCategories.length} категории.`);

// 1) 
// const categoriesList = [...allCategories]
//     for (let i = 0; i < categoriesList.length; i += 1) {
//         const element = categoriesList[i];
//         console.log(`Категория: ${element.firstElementChild.textContent}. 
// Количество элементов: ${element.lastElementChild.children.length}`); 
//     }


// 2) 
const categories = [...allCategories]
    .forEach(element => { 
        console.log(`Категория: ${element.firstElementChild.textContent}. 
Количество элементов: ${element.lastElementChild.children.length}`); 
    });

