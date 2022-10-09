function validar_dni(){
    var num_dni = document.getElementById("dni").value;
    let numeros;
    let letra;
    let letras_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
    let letra_correcta;
    let mod;
    var DNI_REGEX = /^\d{8}[a-zA-Z]$/;

    if(num_dni.match(DNI_REGEX)){
        numeros = num_dni.substr(0,num_dni.length-1);
        letra =num_dni.substr(num_dni.length-1,1);
        mod = numeros%23;
        letra_correcta = letras_dni.substring(mod,mod+1);
        if(letra.toUpperCase() != letra_correcta){
            alert("DNI equivocado, la letra no coincide");
        }
    }else{
        alert("El formato del DNI no es válido");
    }
}

function validar_correo(){
    var email = document.getElementById("email").value;
    var CORREO_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if( !email.match(CORREO_REGEX)){
        alert("El correo introducido no es valido");
      }
}

function validar_movil(){
    var numtel = document.getElementById("movil").value;
    var MOVIL_REGEX= /^\d{3} \d{3} \d{3}|\d{3} \d{2} \d{2} \d{2}/;
    if(!numtel.match(MOVIL_REGEX)){
        alert("El número introducido o el formato no es correcto");
    }
}
function validar_iban(){
    var numiban = document.getElementById("iban").value;
    var IBAN_REGEX = /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;
    if(!numiban.match(IBAN_REGEX)){
        alert("El IBAN introducido no es correcto");
    }
}
