form = document.getElementById("suscripcion");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    error = document.getElementById("error")
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var emailSplit = email.split("@");
    var dominio = [
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
    var password = document.getElementById("password").value;
    var dni = document.getElementById("dni").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var postal = document.getElementById("postal").value;

    if(nombre.split("").length < 6 || nombre.split(" ").length < 2){
        error.style.display = 'block';
        return;
    }
    else{
        if(emailSplit.length != 2 || !emailSplit[1].includes(dominio)){
            error.style.display = 'block';
            return;
        }
    }
})