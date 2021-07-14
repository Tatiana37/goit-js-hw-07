// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const button = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;

    button.value.textContent = counterValue;
};
// console.log(button.incrementBtn);

const decrement = () => {
    counterValue -= 1;

    button.value.textContent = counterValue;
};
// console.log(button.decrementBtn);
// console.log(button.value);
button.incrementBtn.addEventListener('click', increment);
button.decrementBtn.addEventListener('click', decrement);
