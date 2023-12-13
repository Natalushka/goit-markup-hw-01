let counterValue = 0;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementButtonRef.addEventListener('click', onDecrementBtnClick);

incrementButtonRef.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick() {
  setCounterValue(counterValue + 1);
}

function onDecrementBtnClick() {
  setCounterValue(counterValue - 1);
}

function setCounterValue(value) {
  counterValue = value;

  valueRef.textContent = value;
}
