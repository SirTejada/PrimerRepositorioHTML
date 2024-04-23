function init() {
    var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = document.title;
}
function cambioTitulo() {
    var nuevoTitulo = document.getElementById("nuevoTitulo").value; 
    document.title = nuevoTitulo;
    init();
}