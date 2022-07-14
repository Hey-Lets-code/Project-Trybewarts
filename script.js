const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const buttonForms = document.querySelector('#button-forms');

function mensagemAlert() {
  if (email === 'tryber@teste.com' && senha === '123456') {
    return alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos');
}

buttonForms.addEventListener('click', mensagemAlert);
