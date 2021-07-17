// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid

const inputElement = document.querySelector('#validation-input');
// console.log(inputElement);

const inputElLength = Number(inputElement.getAttribute('data-length'));

// console.log(inputElLength);



inputElement.addEventListener('blur', onInputBlur);
inputElement.addEventListener('focus', onInputFocus);

function onInputBlur(event)  {
    inputElement.value.length === inputElLength
        ? inputElement.classList.add('valid')
        : inputElement.classList.add('invalid');
};

function onInputFocus(event) {
    inputElement.classList.remove('valid', 'invalid');
}


// inputElement.addEventListener('blur', event => {
//     inputElement.value.length === inputElLength
//         ? inputElement.classList.add('valid')
//         : inputElement.classList.add('invalid');
// }); ??????
