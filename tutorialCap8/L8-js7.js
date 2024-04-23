function obtenerCookie(c_nombre) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_nombre) {
            return unescape(y);
        }
    }
}
function init() {
    var mensaje;
    objeto_nivel = document.getElementById("nivel");
    var bienvenido = document.getElementById("bienvenido");
    var nivel = obtenerCookie("nivel");
    if (nivel == null || nivel == '') {
        mensaje = "Es tu primera vez, se empieza por el nivel 1";
        nivel = 1;
    }
    else {
        mensaje = "La pasada vez llegaste al nivel " + nivel + ". Vas a empezar ahora.";
    }
    bienvenido.innerHTML = mensaje;
    objeto_nivel.value = nivel;
}
function guarda_nivel() {
    ponerCookie("nivel", objeto_nivel.value, 10);
}
function ponerCookie(c_nombre, valor, exdias) {
    var exfecha = new Date();
    exfecha.setDate(exfecha.getDate() + exdias);
    var c_valor = escape(valor) + ((exdias == null) ? "" : "; expires=" + exfecha.toUTCString());
    document.cookie = c_nombre + "=" + c_valor;
}