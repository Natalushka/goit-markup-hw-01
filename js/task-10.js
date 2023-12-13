const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.querySelector('input');
const createBtnRef = controlsRef.querySelector('[data-create]');
const destroyBtnRef = controlsRef.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

inputRef.value = 0;

createBtnRef.addEventListener('click', onCreateBtnClick);
destroyBtnRef.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(inputRef.valueAsNumber);
}

function resetInput() {
  inputRef.value = '';
}

function onDestroyBtnClick() {
  clearElement(boxesRef);
  resetInput();
}

function createBoxes(amount) {
  clearElement(boxesRef);
  boxesRef.insertAdjacentHTML('beforeend', getBoxListTemplate(amount));
}

function getBoxListTemplate(amount) {
  const arr = [];
  const maxSize = 30 + (amount - 1) * 10;
  for (let i = 30; i <= maxSize; i = i + 10) {
    arr.push(i);
  }
  return arr.map(it => getBoxItemTemplate(it)).join('');
}

function getBoxItemTemplate(size) {
  const color = getRandomHexColor();
  return `
  <div
    style='width:${size}px;
    height:${size}px;
    background-color:${color}'></div>
  `;
}

function clearElement(el) {
  while (el.childNodes.length > 0) {
    el.firstChild.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
