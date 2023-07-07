



let monto = parseFloat(prompt("Ingrese el monto que desea solicitar"))
let cuotas = parseInt(prompt("Ingrese la finaciacion"))
let finaciacion = monto / cuotas;

alert("Cuota mensual: $" + finaciacion.toFixed(2))