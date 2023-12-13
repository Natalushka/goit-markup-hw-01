const inputRef = document.querySelector('#validation-input');
const minLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (inputRef.value.length === minLength) {
    setValid();
  } else {
    setInvalid();
  }
}

function setValid() {
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid');
}

function setInvalid() {
  inputRef.classList.remove('valid');
  inputRef.classList.add('invalid');
}
