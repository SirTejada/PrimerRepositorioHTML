function init() {

}
function mostrardiv() {
    var divPrueba = document.getElementById("contenido").textContent;
    var listanumeros = divPrueba.split(";");
    for(i = 0; i < listanumeros.length; i++){
        alert(listanumeros[i]);
    }
}