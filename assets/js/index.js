const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageTextarea = document.querySelector("textarea");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (name === "") {
    alert("Por favor, preencha o seu nome.");
    nameInput.focus();
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    emailInput.focus();
    return;
  }

  if (message === "") {
    alert("Por favor, escreva uma mensagem.");
    messageTextarea.focus();
    return;
  }

  const formData = {
    name: name,
    email: email,
    message: message,
  };

  localStorage.setItem("contactFormData", JSON.stringify(formData));

  alert("Formulário enviado e dados salvos no localStorage!");

  nameInput.value = "";
  emailInput.value = "";
  messageTextarea.value = "";
});
