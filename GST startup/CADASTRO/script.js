document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        let valid = true;
        
        // Validação do e-mail
        if (emailInput.value.trim() === "") {
            emailError.textContent = "O e-mail é obrigatório.";
            valid = false;
        } else if (!emailInput.value.includes("@")) {
            emailError.textContent = "Digite um e-mail válido.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Validação da senha
        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "A senha é obrigatória.";
            valid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        // Impede o envio do formulário se houver erros
        if (!valid) {
            event.preventDefault();
        }
    });
});
