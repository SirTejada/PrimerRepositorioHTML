function reconocer(file_handle) { 
    var tam = file_handle.size; // tamaño del archivo
    var fnombre = file_handle.name; // nombre del archivo
    var mensaje = "Has elegido el archivo '" + fnombre + "'. Reconocible imagen, conteniendo " + tam + " bytes.";
    alert(mensaje);
}
function alertar(fnombre) { // Esto es para decir que no es una imagen
    var mensaje = "El nombre del archivo '" + fnombre + "'no es de extension aceptable.";
    alert(mensaje);
}
function handle_file_selection(item) {
    var f = item.files[0];
    var fnombre = f.name;
    var ultimo_indice = fnombre.lastIndexOf('.');
    if (ultimo_indice == -1) {
        alertar(fnombre);
        return;
    }
    var ext = fnombre.substr(ultimo_indice + 1);
    if (ext.toLowerCase() in { 'gif': '', 'jpg': '', 'png': '', 'tif': '' }) {
        reconocer(f);
    }
    else {
        alertar(fnombre);
    }
}