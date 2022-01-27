
/*<Realizar el promedio de calificaciones de un estudiante*/
var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);


//mostrar cuantas personas hay de cada grupo de edad
//salida:
// {
//     21:3,
//     43:2
// }
var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1;
    } else {
        acumulador[edad] += 1;
    }
    return acumulador;
}, {});
console.log(edades);
console.log(resultado);

/*Obtener el total en efectivo de cada producto que se ha vendido*/

var ventas = [
    { nombre: 'camiseta', precio: 15, totalVendido: 10 },
    { nombre: 'zapatilla', precio: 150, totalVendido: 8 },
    { nombre: 'pantalon', precio: 20, totalVendido: 30 },
];

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}`;
    return acumulador;

}, {});
console.log(ventas);
console.log(resultado);


/**Obtener la cantidad de estudiantes que han sido matriculados
 * y la cantidad de estudantes que no han sido matriculados
 */

var estudiantes = [
    { nombre: "Ada", edad: 20, matriculado: true },
    { nombre: "Katrina", edad: 19, matriculado: true },
    { nombre: "Jorge", edad: 22, matriculado: false },
    { nombre: "Gabriel", edad: 21, matriculado: true },
    { nombre: "Raul", edad: 19, matriculado: false },
];

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado += 1;
        } else {
            acumulador.noMatriculado += 1;
        }
return acumulador;
    }, { matriculado: 0, noMatriculado: 0 });


console.log(estudiantes);
console.log(resultado);
//reduce((acumulador,estudiante)=>{},{});