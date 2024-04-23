function comprobar() {
    var texto = document.getElementById("numeros");
    var valor = texto.value;
    var ultimo_caracter = valor.substring(texto.length - 1);

    if(Number(ultimo_caracter) || ultimo_caracter == '-'){ // Aqui entra cuando ponemos un numero
        if(valor.length == 3){
            texto.value += '-';
        }
    }
    else{ // cuando no ponemos un numero
        valor = valor.substring(0, valor.length - 1);
        texto.value = valor;
    }
}