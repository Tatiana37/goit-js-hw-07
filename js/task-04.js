// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const button = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector("#value"),
};


const increment = () => value.textContent = +value.textContent + 1;

// console.log(button.incrementBtn);

const decrement = () => value.textContent -= 1;

// console.log(button.decrementBtn);
// console.log(button.value);
button.incrementBtn.addEventListener('click', increment);
button.decrementBtn.addEventListener('click', decrement);
