let numeroPlanilla = prompt('Ingrese el numero de planilla (Ejemplo: FEB-01-2024): ')
let empresa = prompt('Ingrese el nombre de la empresa: ')
    
let nombre = prompt('Ingrese el nombre del empleado:')
let sueldo = parseInt(prompt('Ingrese el sueldo base del empleado: '))
let calculoIhss = (sueldo * 0.035)
let calculoInfop = (sueldo * 0.015)
let adelanto = prompt('Ingrese el adelanto que se le dio al empleado: ')
let prestamo = prompt('Ingrese el valor de prestamo del empleado: ')
let totalPagar = (sueldo - calculoIhss - calculoInfop - adelanto - prestamo)
 
console.log(`El numero de planilla: ${numeroPlanilla} \nEl nombre de la empresa: ${empresa}
\nNombre: ${nombre} \nSueldo: ${sueldo} \nIHSS: ${calculoIhss} \nINFOP: ${calculoInfop} 
\nadelanto: ${adelanto} \nprestamo: ${prestamo}  \nEl total a pagar: ${totalPagar}`);