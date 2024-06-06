function validacion() {
    var resultado_correo = validar_correo();
    var resultado_contraseña = validar_contraseña();
    var resultado_direccion = validar_direccion();
    var resultado_pasatiempos= validar_pasatiempos();
    var resultado_telefono= validar_telefono();
    var resultado_confirmar = confirmar_contraseña();
    var resultado_url = validar_URL();
    return resultado_url && resultado_correo && resultado_contraseña && resultado_confirmar && resultado_direccion && resultado_pasatiempos && resultado_telefono;
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    // indexOf retorna el indice de la posicion en la que se encuentra "@"
    var pos_arroba = correo.indexOf("@");
    // lastIndexOf retorna el indice de la ultima posicion en la que se encuentra "."
    var pos_punto = correo.lastIndexOf(".");
    // split crea un array de subcadenas resultantes de la division una principal
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        false;
    }
}

function validar_pasatiempos() {
    var check_pasatiempos = document.getElementsByClassName("form-check-input");
    var div_error_pasatiempos = document.getElementById("error-pasatiempos");
    var seleccionado = 0;
    for (var i = 0; i < check_pasatiempos.length; i++) {
        if (check_pasatiempos[i].checked) {
            seleccionado++;
        }    
    }
    if (seleccionado >= 2) {
        div_error_pasatiempos.innerHTML="";
        return true;
    } else {
    div_error_pasatiempos.innerHTML = "Debe seleccionar al menos 2 pasatiempos";
    div_error_pasatiempos.className = "text-danger small mt-1";
    return false;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_ciudad.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}


function validar_direccion() {
    var input_direccion= document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La direccion es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;
    if (contraseña == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else if (contraseña.length < 3 || contraseña.length > 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        var contiene_digito = false;
        var contiene_letra = false;

        for (var i = 0; i < contraseña.length; i++) {
            var caracter = contraseña[i];
            if (!isNaN(caracter)) {
                contiene_digito = true;
            }
            if (caracter.toLowerCase() != caracter.toUpperCase()) {
                contiene_letra = true;
            }
        }
            
        if (!contiene_digito) {
            div_error_contraseña.innerHTML = "La contraseña debe contener al menos un dígito";
            div_error_contraseña.className = "text-danger small mt-1";
            return false;
        }   
        if (!contiene_letra) {
            div_error_contraseña.innerHTML = "La contraseña debe contener al menos una letra";
            div_error_contraseña.className = "text-danger small mt-1";
            return false;
        } else {
            limpiarError(div_error_contraseña);
            return true;
        }
    }
}

function confirmar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var input_confirmar = document.getElementById("input-confirmar");
    var div_error_confirmar = document.getElementById("error-confirmar");
    var contraseña = input_contraseña.value;
    var confirmar_contraseña = input_confirmar.value;
    if (confirmar_contraseña == "") {
        div_error_confirmar.innerHTML =  "Debes confirmar tu contraseña";
        div_error_confirmar.className = "text-danger small mt-1";
        return false;
    } else if (contraseña != confirmar_contraseña) {
        div_error_confirmar.innerHTML =  "Las contraseñas no coinciden";
        div_error_confirmar.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmar.innerHTML = "";
        return true;
    }
}

function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    if (nombre == "") {
        div_error_nombre.innerHTML = "El nombre de usuario es obligatorio";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    }  else if (nombre.length > 20) {
        div_error_nombre.innerHTML = "El nombre de usuario no puede tener mas de 20 caracteres";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        return true;
    }
}



function validar_telefono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;
    fono = fono.replace(/\s/g, "");
    if (fono == "") {
        div_error_fono.innerHTML = "El teléfono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
    else if (fono.length !== 12) {
        div_error_fono.innerHTML = "El número de teléfono debe tener 11 dígitos";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
    else if (fono.substring(0, 4) !== '+569') {
        div_error_fono.innerHTML = "El número de teléfono debe comenzar con +569";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
    else {
        for (var i = 4; i < fono.length; i++) {
            if (isNaN(fono[i])) {
                div_error_fono.innerHTML = "Formato invalido, contiene letras";
                div_error_fono.className = "text-danger small mt-1";
                return false;
            }
        }
    }
    div_error_fono.innerHTML = "";
    return true;
}



function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
        }
}

function validar_URL(url) {
    var div_error_url = document.getElementById("error-url");

    if (!(url.startsWith("http://") || url.startsWith("https://"))) {
        div_error_url.innerHTML =  "La URL debe comenzar con 'http://' o 'https://'";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
    var indexPunto = url.indexOf(".", url.indexOf("//") + 2);
    if (indexPunto === -1) {
        div_error_url.innerHTML =  "La URL no es válida";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
    if (url.indexOf(" ") !== -1) {
        div_error_url.innerHTML =  "La URL no puede contener espacios en blanco";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }

    div_error_url.innerHTML= "";
    return true;
}