document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("mainForm");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const clearBtn = document.getElementById("clearBtn");

    // Regex para email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex para telefone brasileiro
    const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    // Validação em tempo real (opcional)
    email.addEventListener("input", () => validateField(email, emailRegex));
    telefone.addEventListener("input", () => validateField(telefone, telefoneRegex));

    function validateField(field, regex) {
        if (regex.test(field.value.trim())) {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
            return true;
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
            return false;
        }
    }

    // Validação ao enviar
    form.addEventListener("submit", (event) => {
        let validEmail = validateField(email, emailRegex);
        let validTelefone = validateField(telefone, telefoneRegex);

        if (!validEmail || !validTelefone) {
            event.preventDefault(); // impede envio
        }
    });

    // Botão de limpar
    clearBtn.addEventListener("click", () => {
        form.reset();

        // Remove classes visuais
        email.classList.remove("is-valid", "is-invalid");
        telefone.classList.remove("is-valid", "is-invalid");
    });

});