const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});
email.addEventListener("blur", () => {
  checkInputEmail();
});
username.addEventListener("blur", () => {
  checkInputUsarname();
});
password.addEventListener("blur", () => {
  checkInputPassword();
});
passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});
/* Esses eventos fazem com que sempre que eu preencher os elementos ele apareça e desapareça com os erros constantemente, não apenas quando eu cadastrar */

function checkInputUsarname() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Preencha o username!");
    /* Mostrar erro */
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;
  if (emailValue === "") {
    errorInput(email, "O email é obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "É obrigatório inserir uma senha");
  } else if (passwordValue.length < 8) {
    errorInput(password, "Insira uma senha com mínimo de 8 caracteres");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;
  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "É obrigatório confirmar a senha");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputUsarname();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItens = form.querySelectorAll(".form-content");
  const isValid = [...formItens].every((item) => {
    return item.className === "form-content";
  }); /*  esse [...formItens].every((item)=>{ return item.className ==="form-content;"}) é para verificar um por um dos itens nomeados por class, se todos tem escrito "form-content" */
  if (isValid) {
    alert("Cadastrado com sucesso");
    console.log(username.value, email.value, password.value);
  }
} /*  Essa função verifica se todos os dados estão preenchidos corretamente */

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");
  textMessage.innerText = message;
  formItem.className = "form-content error";
}
/* Cada uma das functions que existem, tem esse código : 
else {
  const formItem = passwordConfirmation.parentElement;
  formItem.className = "form-content";
} 
Ele é quem determina a hora que entra a class de erro que definimos no CSS e no HTML
 Isso também vai ajudar na function de checkForm que criamos, onde ele vai verificar se todas as classes que eu criei estão sem a class de erro
*/
