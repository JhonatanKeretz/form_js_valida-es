const form = document.getElementById('form');
const userName = document.getElementById('userName');
const emailUser = document.getElementById('emailUser');
const passwordUser = document.getElementById('passwordUser');   
const passwordUserConfirm = document.getElementById('passwordUserConfirm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkForm()
    
})

emailUser.addEventListener("blur", () => {
    checkInputEmail()
})

userName.addEventListener("blur", () => {
    checkInputUserName
})



function checkInputUserName() {
    const userNameValue = userName.value;
    
    if(userNameValue === '') {
        // mostrar o aviso e mostrar a mensagem de erro
        errorInput(userName, "Preencha o campo obrigatório!")

    } else {
        const formItem = userName.parentElement;
        formItem.className = "form-content"
    }
    
}



function checkInputEmail() {
    const emailValue = emailUser.value;
    if(emailValue === "") {
        errorInput(emailUser, "O email é obrigatório")
    } else {
        const formItem = emailUser.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = passwordUser.value;

    if(passwordValue === "") {
        errorInput(passwordUser, "A senha é obrigatória")
    } else if(passwordValue.length < 8) {
        errorInput(passwordUser, "A senha precisa ter no mínimo 8 caracteres")

    }else {
        const formItem = passwordUser.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirm(){
    const passwordValue = passwordUser.value;
    const passwordValueConfirm = passwordUserConfirm.value

  if(passwordValueConfirm === "") {
    errorInput(passwordUserConfirm, "A confirmação de senha é obrigatória")
  } else if (passwordValueConfirm !== passwordValue) {
    errorInput(passwordUserConfirm, "As senhas não são iguais!")
  } else {
    const formItem = passwordUserConfirm.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm(){
    checkInputUserName();
    checkInputEmail()
    checkInputPassword();
    checkInputPasswordConfirm();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })
    if(isValid) {
        alert("Cadastro realizado com sucesso!")
    }else{
        alert("Preencha todos os campos!")
    }
    
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerHTML = message

    formItem.className = "form-content error"
}