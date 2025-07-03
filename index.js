const form = document.getElementById("suscripcion");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dniInput = document.getElementById("dni");
const edadInput = document.getElementById("edad");
const telefonoInput = document.getElementById("telefono");
const direccionInput = document.getElementById("direccion");
const ciudadInput = document.getElementById("ciudad");
const postalInput = document.getElementById("postal");
const titulo = document.getElementById("titulo-hola");

const modal = document.getElementById("modal");
const modalMensaje = document.getElementById("modal-mensaje");
const cerrarModal = document.getElementById("cerrar-modal");


function mostrarModal(mensaje) {
    modalMensaje.textContent = mensaje;
    modal.classList.remove("oculto");
}
cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
});


function guardarEnLocalStorage(data) {
    localStorage.setItem("formData", JSON.stringify(data));
}


window.onload = () => {
    const data = JSON.parse(localStorage.getItem("formData"));
    if (data) {
        nombreInput.value = data.nombre;
        emailInput.value = data.email;
        passwordInput.value = data.password;
        dniInput.value = data.dni;
        edadInput.value = data.edad;
        telefonoInput.value = data.telefono;
        direccionInput.value = data.direccion;
        ciudadInput.value = data.ciudad;
        postalInput.value = data.postal;
        titulo.textContent = `Hola ${data.nombre}`;
    }
};

document.querySelectorAll("#suscripcion input").forEach(input => {
    const span = document.createElement("span");
    span.classList.add("error-text");
    span.style.color = "red";
    input.insertAdjacentElement("afterend", span);
});

function setError(input, mensaje) {
    input.nextElementSibling.textContent = mensaje;
}
function clearError(input) {
    input.nextElementSibling.textContent = "";
}

function validarNombre() {
    const nombre = nombreInput.value.trim();
    if (nombre.length < 6 || nombre.split(" ").length < 2) {
        setError(nombreInput, "Debe tener al menos 6 letras y un espacio.");
        return false;
    }
    return true;
}
function validarEmail() {
    const email = emailInput.value.trim();
    const dominio = ["gmail.com","yahoo.com","hotmail.com","outlook.com","aol.com","protonmail.com","icloud.com","zoho.com","yandex.com","gmx.com","mail.com","live.com"];
    const parts = email.split("@");
    if (parts.length != 2 || !dominio.includes(parts[1])) {
        setError(emailInput, "Formato de email no válido.");
        return false;
    }
    return true;
}
function validarPassword() {
    const pass = passwordInput.value.trim();
    const numeros = /[0-9]/;
    const letras = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
    if (pass.length < 8 || !numeros.test(pass) || !letras.test(pass)) {
        setError(passwordInput, "Debe tener al menos 8 caracteres con letras y números.");
        return false;
    }
    return true;
}
function validarDNI() {
    const dni = dniInput.value.trim();
    if (dni.length < 7 || dni.length > 8) {
        setError(dniInput, "DNI debe tener 7 u 8 dígitos.");
        return false;
    }
    return true;
}
function validarEdad() {
    if (parseInt(edadInput.value) < 18) {
        setError(edadInput, "Debe ser mayor o igual a 18.");
        return false;
    }
    return true;
}
function validarTelefono() {
    const tel = telefonoInput.value.trim();
    if (tel.length < 7 || /[\s()-]/.test(tel)) {
        setError(telefonoInput, "Tel sin espacios, guiones ni paréntesis y al menos 7 dígitos.");
        return false;
    }
    return true;
}
function validarDireccion() {
    const dir = direccionInput.value.trim();
    const parts = dir.split(" ");
    if (dir.length < 5 || parts.length < 2) {
        setError(direccionInput, "Debe tener al menos 5 caracteres y un espacio.");
        return false;
    }
    return true;
}
function validarCiudad() {
    if (ciudadInput.value.trim().length < 3) {
        setError(ciudadInput, "Al menos 3 caracteres.");
        return false;
    }
    return true;
}
function validarPostal() {
    if (postalInput.value.trim().length < 3) {
        setError(postalInput, "Al menos 3 caracteres.");
        return false;
    }
    return true;
}

[nombreInput, emailInput, passwordInput, dniInput, edadInput, telefonoInput, direccionInput, ciudadInput, postalInput].forEach(input => {
    input.addEventListener("blur", () => {
        switch(input.id) {
            case "nombre": validarNombre(); break;
            case "email": validarEmail(); break;
            case "password": validarPassword(); break;
            case "dni": validarDNI(); break;
            case "edad": validarEdad(); break;
            case "telefono": validarTelefono(); break;
            case "direccion": validarDireccion(); break;
            case "ciudad": validarCiudad(); break;
            case "postal": validarPostal(); break;
        }
    });
    input.addEventListener("focus", () => clearError(input));
});


nombreInput.addEventListener("input", () => {
    const nombre = nombreInput.value.trim();
    titulo.textContent = nombre ? `HOLA ${nombre.toUpperCase()}` : "HOLA";
});

form.addEventListener("submit", e => {
    e.preventDefault();
    let valido = 
        validarNombre() & validarEmail() & validarPassword() & validarDNI() &
        validarEdad() & validarTelefono() & validarDireccion() & validarCiudad() & validarPostal();

    if (valido) {
        const datos = {
            nombre: nombreInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            dni: dniInput.value,
            edad: edadInput.value,
            telefono: telefonoInput.value,
            direccion: direccionInput.value,
            ciudad: ciudadInput.value,
            postal: postalInput.value
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => {
            if (!response.ok) throw new Error("No se pudo enviar");
            return response.json();
        })
        .then(json => {
            guardarEnLocalStorage(datos);
            mostrarModal("Datos enviados:\n" + JSON.stringify(datos, null, 2));
        })
    }
});
