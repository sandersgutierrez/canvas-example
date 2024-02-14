var dibujo = document.querySelector('#dibujo');
var txtLineas = document.querySelector('#txtLineas');
var btnCD = document.querySelector('#btnCD');

btnCD.addEventListener('click', crearDibujo);

var lienzo = dibujo.getContext('2d');
var ancho = dibujo.width;

dibujarLinea('black', 1, 1, 1, 299);
dibujarLinea('black', 1, 299, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function crearDibujo() {
    var lineas = parseInt(txtLineas.value);
    var xi, xf, yi, yf, xi2, xf2, yf2;
    var espacio = ancho / lineas;
    for (var l = 0; l < lineas; l++) {
        yi = yf = espacio * l;
        xi = xf = espacio * (l + 1);
        xf2 = xi2 = 290 - (l * 10);
        dibujarLinea('green', xi, 0, 300, yf);
        dibujarLinea('red', 0, yi, xf, 300);
        dibujarLinea('blue', 300, yi, xf2, 300);
        dibujarLinea('yellow', xi2, 0, 0, yf);
        console.log("No. Líneas: " + lineas);
    }
}
