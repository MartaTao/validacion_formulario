
let dni = document.getElementById("dni").value;
let numtel = document.getElementById("movil").value;
let correo = document.getElementById("email").value;
let iban = document.getElementById("iban");
function validacion(){
    validar_correo(correo);
    validar_movil(numtel)
    validar_dni(dni);
    validar_iban(numiban);
}
function validar_dni(dni){
    let numeros;
    let letra;
    let letras_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
    let letra_correcta;
    let mod;
    var DNI_REGEX = /^(\d{8})([A-Z])$/;

    if(dni.match(DNI_REGEX)){
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
    var CORREO_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( !correo.match(CORREO_REGEX)){
        alert("El correo introducido no es valido");
      }
}

function validar_movil(numtel){
    var MOVIL_REGEX_SIN = /(\d{3})(\d{3})(\d{3})$/;
    var MOVIL_REGEX_CON =/^(\d{3} )(\d{3} )(\d{3})$/
    if(!numtel.match(MOVIL_REGEX_SIN)&&!num(MOVIL_REGEX_CON)){
        alert("El número introducido noe s correcto");
    }
}
function validar_iban(numiban){
    var IBAN_REGEX = /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;
    if(!numiban.match(IBAN_REGEX)){
        alert("El IBAN introducido no es correcto");
    }
}
