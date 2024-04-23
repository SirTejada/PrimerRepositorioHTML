// Esta página muestra un modelo para
// guardar niveles de jugadores en almacenamiento local
function init() {
    var mensaje;
    objeto_nivel = document.getElementById("nivel");
    var bienvenido = document.getElementById("bienvenido");
    // "localStorage" es una keyword de HTML5
    //  "localStorage.nivel" es una variable elegida
    //  para este lugar el particular

    var nivel = localStorage.nivel;
    if (nivel == null || nivel == '') {
        mensaje = "Aparece cuando se juega por primera vez. Se empieza en el nivel 1";
        nivel = 1;
    }
    else {
        mensaje = "La pasada vez que se ha jugado se ha llegado al nivel " + nivel + ". Se va a empezar en este nivel.";
    }
    bienvenido.innerHTML = mensaje;
    objeto_nivel.value = nivel;
}
function guarda_nivel() {
    localStorage.nivel = objeto_nivel.value;
}