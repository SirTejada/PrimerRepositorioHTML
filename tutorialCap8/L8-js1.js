function dibujar_manecilla(fraccion) {
    dctx.lineTo(centro_x + longitud * Math.sin(2 * Math.PI * fraccion), centro_y - longitud * Math.cos(2 * Math.PI * fraccion));
}
function init() {
    var canvas = document.getElementById("esferareloj");
    // Las siguientes variables son creadas como
    // globales, deben ser convenientemente
    // accedidas por otras funciones.
    dctx = canvas.getContext('2d');
    dctx.fillStyle = "black";
    centro_x = 100;
    centro_y = 100;
    longitud = 100;
    mostrar_manecillas();
}
// Cada manecilla se dibuja como un triángulo isósceles
// desde el centro hasta el borde de la esfera del reloj.
function mostrar_manecilla(fraccion, ancho) {
    dctx.beginPath();
    dctx.moveTo(centro_x, centro_y);
    dibujar_manecilla(fraccion - ancho);
    dibujar_manecilla(fraccion + ancho);
    dctx.fill();
}

function mostrar_manecillas() {
    // Elimina cualquier cosa presente en el area
    // que representa la esfera del reloj.
    dctx.clearRect(0, 0, 200, 200);
    // ¿Qué hora es?
    var ahora = new Date();
    segundos = ahora.getSeconds();
    minutos = ahora.getMinutes() + segundos / 60;
    horas = ahora.getHours() + minutos / 60;
    // La manecilla de segundos es la más fina de todas.
    mostrar_manecilla(segundos / 60, 0.002);
    mostrar_manecilla(minutos / 60, 0.005);
    // La manecilla de la hora es tan extensa como
    // la de los minutos.
    mostrar_manecilla(horas / 12, 0.01);
    var rate = 1000;
    setTimeout(mostrar_manecillas, rate);
}