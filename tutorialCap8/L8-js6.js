// La función correcto()
// hace un test de lo que introduce el usuario
// con la máscara 'XXX-XXX-XX-X'. Si
// el usuario introduce valores distintos
// de la máscara se borra el último caracter. Esto
// da impresión al usuario de que solo debe
// introducir caracteres válidos.
function correcto() {
    var objeto_entrada = document.getElementById("serie");
    var valor = objeto_entrada.value;
    var longitud_actual = valor.length;
    if (longitud_actual) {
        var ultimo_caracter = valor.substring(longitud_actual - 1);
        switch (longitud_actual) {
            case 4:
            case 8:
            case 11:
                if (ultimo_caracter != '-') {
                    valor = valor.substring(0, longitud_actual - 1);
                }
                break;
            default:
                if (!/\d/.test(ultimo_caracter)) {
                    valor = valor.substring(0, longitud_actual - 1);
                }
        }
        if (longitud_actual > 12) {
            valor = valor.substring(0, longitud_actual - 1);
        }
        longitud_actual = valor.length;
        switch (longitud_actual) {
            case 3:
            case 7:
            case 10:
                valor += "-";
        }
        objeto_entrada.value = valor;
    }
}