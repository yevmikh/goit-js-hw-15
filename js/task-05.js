function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити,
//після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
//<div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
// 1 Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// 2 Розміри найпершого <div> - 30px на 30px.
// 3 Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const control = document.querySelector("#controls input");
const boxesContainer = document.querySelector("#boxes");
const createBoxNew = document.querySelector("[data-create]");
const removeBoxNew = document.querySelector("[data-destroy]");

createBoxNew.addEventListener("click", onCreateBtnClick);
removeBoxNew.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
  const amount = control.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = 30 + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box.outerHTML);
  }

  boxesContainer.innerHTML = boxes.join("");
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
