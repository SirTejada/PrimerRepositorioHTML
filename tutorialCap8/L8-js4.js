// La siguiente declaración tiene
// que aparecer en una línea simple.
dato_ejemplo = "Mobil-17: 3.49; Kroger-03: 3.36; Exxon-01: 3.59; Kroger-04: 3.49;Valero-A: 3.41; Chevron-01: 3.52";
de_interes = "Kroger-04";
// dato_ejemplo es un ejemplo de típica
// estructura de datos: una string con partes separadas
// por semi-columnas, donde cada parte tiene dos
// subpartes separadas por una columna. Otros formatos
// son posibles. Para hacer parse a este formato particular,
// init() separa en dos miembros distintos.
function init() {
    var objeto_parrafo = document.getElementById("parrafo");
    var lista_datos = dato_ejemplo.split(';');
    for (j = 0; j < lista_datos.length; j++) {
        partes = lista_datos[j].split(':');
        var lugar = partes[0].trim()
        if (lugar == de_interes) {
            var mensaje = "Dados los datos de ejemplo '" +
                dato_ejemplo + "', el programa ha analizado el precio $" +
                partes[1].trim() + " para el " + lugar;
            objeto_parrafo.innerHTML = mensaje;
        }
    }
}