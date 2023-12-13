const spanRef = document.querySelector('span.color');
const btnRef = document.querySelector('button.change-color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  spanRef.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
