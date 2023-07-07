


alert("Bienvenido a un simulador de prestamo")
let monto = parseFloat(prompt("Ingrese el monto que desea solicitar"))
let cuotas = parseInt(prompt("Ingrese la finaciacion"))
let tasaimpuesto = 10;
let impuesto = (monto * tasaimpuesto)  / 100;
let montoConImpuesto = monto + impuesto;
let costoFinal = montoConImpuesto / cuotas



alert("Cuota mensual: $" + costoFinal.toFixed(2))