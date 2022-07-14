const email = 'tryber@teste.com';
const senha = '123456';

function login() {
  const botao = document.getElementById('button');

  botao.addEventListener('click', (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById('email');
    const loginSenha = document.getElementById('password');
    if (loginEmail.value === email && loginSenha.value === senha) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

login();

const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

submitButton.setAttribute('disabled', true);

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
});
