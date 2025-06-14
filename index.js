form = document.getElementById("suscripcion");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    error = document.getElementById("error");
    // Debe tener más de 6 letras y al menos un espacio entre medio.
    const nombre = document.getElementById("nombre").value; 
    // debe tener un formato de email válido.
    const email = document.getElementById("email").value;
    const emailSplit = email.split("@");
    const dominio = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "aol.com",
        "protonmail.com",
        "icloud.com",
        "zoho.com",
        "yandex.com",
        "gmx.com",
        "mail.com",
        "live.com"
      ]
    // Al menos 8 caracteres, formados por letras y números. 
    const password = document.getElementById("password").value;
    const numeros = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ]
    // Número de 7 u 8 dígitos.
    const dni = document.getElementById("dni").value;
    // Número entero mayor o igual a 18.
    const edad = document.getElementById("edad").value;
    // Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
    const telefono = document.getElementById("telefono").value;
    caracteresInvalidos = [
        '(',
        ')',
        '-',
    ];
    // Al menos 5 caracteres, con letras, números y un espacio en el medio.
    const direccion = document.getElementById("direccion").value;
    const direccionSplit = [
        direccion.substring(0, direccion.lastIndexOf(" ")),
        direccion.substring(direccion.lastIndexOf(" ") + 1)
    ];
    var letras = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'ñ', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z',
  'Á', 'É', 'Í', 'Ó', 'Ú',
  'á', 'é', 'í', 'ó', 'ú'];
    // Al menos 3 caracteres.
    const ciudad = document.getElementById("ciudad").value;
    // Al menos 3 caracteres.
    const postal = document.getElementById("postal").value;

    if(nombre.split("").length < 6 || nombre.split(" ").length < 2){
        error.style.display = 'flex';
        return;
    }
    else{
        if(emailSplit.length != 2 || !dominio.includes(emailSplit[1])){
            error.style.display = 'flex';
            return;
        }
        else{
            if(password.split("").length < 8 || !numeros.some(num => password.includes(num)) || !letras.some(char => password.includes(char))){
                error.style.display = 'flex';
                return;
            }
            else{
                if(dni.split("").length < 7 || dni.split("").length > 8){
                    error.style.display = 'flex';
                    return;
                }
                else{
                    if(parseInt(edad)< 18){
                        error.style.display = 'flex';
                        return;
                    }
                    else{
                        if(telefono.split(" ").length > 1 || caracteresInvalidos.some(char => telefono.includes(char)) || telefono.split("").length < 7){
                            error.style.display = 'flex';
                            return;
                        }
                        else{
                            if(direccion.split("").length < 5 || direccionSplit.length < 2  || numeros.some(char => direccionSplit[0].includes(char)) || letras.some(char => direccionSplit[1].includes(char))){
                                error.style.display = 'flex';
                                return;
                            }
                            else{
                                if(ciudad.split("").length < 3){
                                    error.style.display = 'flex';
                                    return;
                                }
                                else{
                                    if(postal.split("").length < 3){
                                        error.style.display = 'flex';
                                        return;
                                    }
                                    form.submit()                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})