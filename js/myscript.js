
let num_dni = document.getElementById("dni").value;
let numtel = document.getElementById("movil").value;
let email = document.getElementById("email").value;
let nimiban = document.getElementById("iban").value;
function validacion(){
    validar_correo(email);
    validar_movil(numtel)
    validar_dni(num_dni);
    validar_iban(numiban);
}
function validar_dni(dni){
    let numeros;
    let letra;
    let letras_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
    let letra_correcta;
    let mod;
    var DNI_REGEX = /^(\d{8})([A-Z])$/;

    if(dni.toUpperCase.match(DNI_REGEX)){
        numeros = dni.substr(0,dni.length-1);
        letra =dni.substr(dni.length-1);
        mod = numeros%23;
        letra_correcta = letras_dni.substring(mod,mod+1);
        if(letra.toUpperCase() == letra_correcta){
            alert("DNI equivocado, la letra no coincide");
        }
    }else{
        alert("El formato del DNI no es válido");
    }
}

function validar_correo(correo){
    var CORREO_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if( !correo.match(CORREO_REGEX)){
        alert("El correo introducido no es valido");
      }
}

function validar_movil(numtel){
    var MOVIL_REGEX= /^\+?[\d ]/;
    if(!numtel.match(MOVIL_REGEX)){
        alert("El número introducido no es correcto");
    }
}
function validar_iban(numiban){
    var IBAN_REGEX = /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;
    if(!numiban.match(IBAN_REGEX)){
        alert("El IBAN introducido no es correcto");
    }
}
