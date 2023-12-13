//
const inputRef = document.querySelector('input#font-size-control');
const outputRef = document.querySelector('#text');

onInputChange();
inputRef.addEventListener('input', onInputChange);

function onInputChange() {
  outputRef.style.fontSize = `${inputRef.valueAsNumber}px`;
}
