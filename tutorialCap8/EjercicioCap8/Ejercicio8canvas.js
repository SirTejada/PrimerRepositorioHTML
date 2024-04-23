function init() {
    var canvas = document.getElementById("rectangulo");
    // Las siguientes variables son creadas como
    // globales, deben ser convenientemente
    // accedidas por otras funciones.
    dctx = canvas.getContext('2d');
    dctx.fillStyle = "black";
    arribaIzquierdax = 0;
    arribaIzquierday = 0;
    abajoDerechax = 500;
    abajoDerechay = 500;
    dctx.moveTo(arribaIzquierdax, arribaIzquierday);
    dctx.lineTo(abajoDerechax, abajoDerechay)
    dctx.stroke();
    dctx.beginPath();
    dctx.arc(250, 250, 40, 0, 2 * Math.PI);
    dctx.stroke();

    
}