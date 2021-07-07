const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log(`В списке ${allCategories.length} категории.`);

// 1) 
const categoriesList = [...allCategories]
    for (let i = 0; i < categoriesList.length; i += 1) {
        const element = categoriesList[i];
        console.log(`Категория: ${element.firstElementChild.textContent}, 
            Количектво элементов: ${element.lastElementChild.children.length}`); 
    }


// 2) 
const categories = [...allCategories]
    .forEach(element => { 
        console.log(`Категория: ${element.firstElementChild.textContent}, 
        Количектво элементов: ${element.lastElementChild.children.length}`); 
    });

