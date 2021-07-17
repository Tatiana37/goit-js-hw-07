// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


//  <div id="controls">
//         <input type="number" min="0" max="100" step="1" />
//         <button type="button" data-action="render">Создать</button>
//         <button type="button" data-action="destroy">Очистить</button>
//     </div>

//     <div id="boxes"></div>


const refs = {
    inputAmount: document.querySelector('#controls input'),
    addButton: document.querySelector('[data-action="render"]'),
    clearButton: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    
};
// console.log(refs.inputAmount);
// console.log(refs.addButton);
// console.log(refs.clearButton);
// console.log(refs.boxes);

const randomColor = () => {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`;
};
const color = randomColor();
console.log(color);
function createBoxes(amount) {
    const newDiv = [];
    for (let i = 0; i < amount; i += 1){
        const size = 30 + i * 10;
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = color; // (`rgba: ${color}, ${color}, ${color}`)
        divEl.style.width = `${size}px`;
        divEl.style.height = `${size}px`;
        newDiv.push(divEl);
    }
    refs.boxes.append(...newDiv);
};

function destroyBoxes() {
    refs.inputAmount.value = '';
    refs.boxes.innerHTML = '';
};

refs.addButton.addEventListener('click', () =>
    createBoxes(refs.inputAmount.value),);
refs.clearButton.addEventListener('click', destroyBoxes);

