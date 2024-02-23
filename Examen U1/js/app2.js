let cantidad = parseInt(prompt('Ingrese la cantidad de alumnos que desea registrar:'));

let nombreAlumno = prompt('Ingrese el nombre del alumno: ');
let edadAlumno = parseInt(prompt('Ingrese la edad del alumno: '));
let calificacion = parseFloat(prompt('Ingrese la calificacion del alumno:'));

console.log(`Nombre: ${nombreAlumno} \nEdad: ${edadAlumno} \nCali=ficacion: ${calificacion}`);
if (calificacion >= 65) {
    console.log('Aprobado');
} else { 
    console.log('Reprobado');
}