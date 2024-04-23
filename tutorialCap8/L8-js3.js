function init() {
    var objeto_parrafo = document.getElementById('parrafo');
    var textoParrafo = document.getElementById('parrafo').textContent;
    mensaje = textoParrafo +  "El titulo de esta web es '" + document.title + "'.";
    objeto_parrafo.innerHTML = mensaje;
}