const form = document.getElementById("contactForm");

const nameInput = document.querySelector('#form-nome');
const emailInput = document.querySelector('#form-email');
const messageTextarea = document.querySelector("#form-mensagem");

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroMensagem = document.getElementById('erroMessage');

function validarNome() {
  if (nameInput.value.trim() == '') {
    erroNome.textContent = 'Por favor, preencha seu nome.';
    return false
  } else {
    erroNome.textContent = '';
    return true
  }
}

function validarEmail() {

  if (emailInput.value.trim() === '') {
    erroEmail.textContent = 'Por favor, preencha seu e-mail.';
    return false;
  } else if (!validateEmail(emailInput.value.trim())) {
    erroEmail.textContent = 'Por favor, insira um e-mail válido.';
    return false
  } else {
    erroEmail.textContent = ""
    return true
  }
}

function validarMensagem() {
  if (messageTextarea.value.trim() === '') {
    erroMensagem.textContent = 'Por favor, escreva sua mensagem.';
    return false;
  } else {
    erroMensagem.textContent = ""
    return true
  }
}

nameInput.addEventListener('input', validarNome);
emailInput.addEventListener('input', validarEmail);
messageTextarea.addEventListener('input', validarMensagem);

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = validarNome()
  const email = validarEmail()
  const mensagem = validarMensagem()

  if (nome && email && mensagem) {
    const formData = {
      nome,
      email,
      mensagem
    };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Formulário enviado e dados salvos no localStorage!");
    form.reset()
  } else {
    alert("Formulário está incompleto!")
  }




});
