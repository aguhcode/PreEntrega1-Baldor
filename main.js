
function calcularPrestamo(){
    alert("Bienvenido a un simulador de prestamos");

let monto = parseFloat(prompt("Ingresa el dinero"));
let cuotas = parseInt(prompt("Ingrese las cuotas, la taza de impuesto es del 10%"));
let tasaImpuesto = 10;

let impuesto = (monto * tasaImpuesto) / 100;
let montoConImpuesto = monto + impuesto;

alert("Detalle de pagos:");

for (let i = 1; i <= cuotas; i++) {
let costoFinal = montoConImpuesto / cuotas;
alert("Cuota mensual " + i + ": $" + costoFinal.toFixed(2));
}
if (cuotas >= 12) {
    alert("Decidiste usar una finaciacion en 12 cuotas")
} else {
    alert("Gracias por utilizar aguprestamos")
}
}

calcularPrestamo();