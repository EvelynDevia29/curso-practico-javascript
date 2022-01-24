const lista1 = [
    100,
    200,
    500,
    800,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {//Lista1 es par?
    /*necesitamos dos elementos:
    ----> el promedio 
    ----> la mediana */

} else {// es impar entonces:
    //posicion mitadLista1 dentro de lista1--->mediana
    mediana = lista1[mitadLista1];
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}