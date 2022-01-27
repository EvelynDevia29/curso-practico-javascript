/**Análisis estadístico de los salarios */
/*Funciones Helpers
/**Calcular la mediana */
function esPar(numero) {
    // if (numero % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    //<----el codigo anterior del if se puede resspmlazar con los siguiente:
    return (numero % 2 === 0);
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

  //Calculadora de la mediana 
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana=calcularMediaAritmetica(
            [personaMitad1,personaMitad2]
            );
            return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

//Calculo de la mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    });
console.log(salariosCol);

const salariosOrdenados = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    });
console.log(salariosOrdenados);


const medianaGeneralCol = medianaSalarios(salariosOrdenados);

//Mediana del top 10%
const spliceStart = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;

const salarios10ColTop10 = salariosOrdenados.splice(
    spliceStart,
    spliceCount
);
const medianaTop10Col = medianaSalarios(salarios10ColTop10);

console.log(
    `${"medianaGeneralCol: $"}`+ medianaGeneralCol,
    `${"medianaTop10Col: $"}`+ medianaTop10Col,

);

