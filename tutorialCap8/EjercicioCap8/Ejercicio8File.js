function init() {

}
function seleccionArchivo(item) {
    var f = item.files[0];
    var fnombre = f.name;
    var ultimo_indice = fnombre.lastIndexOf('.');
    var ext = fnombre.substr(ultimo_indice + 1);
    if (ext.toLowerCase() == 'txt') {
        alert("Documento valido");
    }
    else{
        alert("Documento no valido!!!");
    }
}