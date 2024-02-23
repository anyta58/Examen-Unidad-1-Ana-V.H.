var a = parseInt(prompt('Ingrese el primer numero'))
var b = parseInt(prompt('Ingrese el segundo numero'))
var c = parseInt(prompt('Ingrese el tercer numero'))

function funcioncuadratica(a, b, c) {
    let discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        return "La ecuación no tiene soluciones reales.";
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        return "La solución única es x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return "Las soluciones son x1 = " + x1 + " y x2 = " + x2;
    }
}

console.log(funcioncuadratica(a, b, c));