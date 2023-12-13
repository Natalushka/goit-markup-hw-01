//
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены');
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
}
