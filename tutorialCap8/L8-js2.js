// Esta página pone el color
// en la pantalla con una cierta aleatoriedad
// para lograr efectos interesantes
// La recursividad se utiliza de dos formas distintas
// por debajo: colocar_bloques() llama a dibujar_espiral(), y
// dibujar_espiral() llama también a colocar_bloques() o
// dibujar_espiral(), dependiendo de cómo
// se ha dibujado recientemente.
function init() {
    var canvas = document.getElementById("dibujar_area");
    dctx = canvas.getContext('2d');
    colocar_bloques();
}
function dibujar_espiral() {
    // Una vez que el bloque se mueve fuera
    // del area, para la espiral actual, y crea
    // una nueva.
    if (x > 500 || y > 500 || x < 0 || y < 0) {
        colocar_bloques();
    }
    ratio = 1.6;
    nuevax = x;
    nuevay = y;
    dx = size;
    dy = size;
    // Cada bloque se gira 90º
    // desde el anterior.
    switch (direccion) {
        case "arriba":
            dy = -size;
            nuevay += dy;
            direccion = "izquierda";
            break;
        case "izquierda":
            dx = -size;
            dy = -size;
            nuevax += dx;
            direccion = "abajo";
            break;
        case "abajo":
            dx = -size;
            nuevay += dy;
            direccion = "derecha";
            break;
        case "derecha":
            nuevax += dx;
            direccion = "arriba";
            break;
    }
    dctx.fillRect(x, y, dx, dy);
    // Cada bloque sucesivo es más grande
    // que el anterior.
    size *= ratio;
    x = nuevax;
    y = nuevay;
    setTimeout(dibujar_espiral, delay);
}
function colocar_bloques() {
    dctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    x = 100 + 300 * Math.random();
    y = 100 + 300 * Math.random();
    delay = 100 + 2000 * Math.random();
    size = 3 + 7 * Math.random();
    direccion = "arriba";
    dibujar_espiral();
}