

function calcularCapacidadEndeudamiento() {
    InputCalculoSalida.value = "";
   

    //Inputs de Ingresos Totales
    const inputSalario = document.getElementById("InputIngresos-salario");
    const salario = parseInt(inputSalario.value);

    const inputRendi = document.getElementById("InputIngresos-rendi");
    const rendimientosInversion = parseInt(inputRendi.value);

    const inputOtras = document.getElementById("InputIngresos-otras");
    const ingresosOtras = parseInt(inputOtras.value);

    //Inputs Gastos Fijos
    const inputAlimentacion = document.getElementById("InputGastos-comida");
    const gastosAlimentos = parseInt(inputAlimentacion.value);

    const inputGastosGas = document.getElementById("InputGastos-gas");
    const gastosGas = parseInt(inputGastosGas.value);

    const inputGastosEnergia = document.getElementById("InputGastos-energia");
    const gastosEnergia = parseInt(inputGastosEnergia.value);

    const inputGastosAgua = document.getElementById("InputGastos-agua");
    const gastosAgua = parseInt(inputGastosAgua.value);

    const inputGastosWifi = document.getElementById("InputGastos-wifi");
    const gastosWifi = parseInt(inputGastosWifi.value);

    const inputGastosTransp = document.getElementById("InputGastos-transp");
    const gastosTransporte = parseInt(inputGastosTransp.value);

    const inputGastosRenta = document.getElementById("InputGastos-arriendo");
    const gastosRenta = parseInt(inputGastosRenta.value);

    const inputGastosVarRopa = document.getElementById("InputGastosVariables-ropa");
    const gastosVarRopa = parseInt(inputGastosVarRopa.value);

    const inputGastosVarSeguro = document.getElementById("InputGastosVariables-seguros");
    const gastosVarSeguro = parseInt(inputGastosVarSeguro.value);

    
    //Calculo de los ingresos totales

    let ingresosTotales = salario + rendimientosInversion + ingresosOtras; 

    let gastosFijos = gastosAlimentos + gastosGas + gastosEnergia + gastosAgua + gastosWifi +
     gastosTransporte + gastosRenta; 

    let gastosVariables = gastosVarRopa + gastosVarSeguro;

    let capacidadEnd = (ingresosTotales - (gastosFijos + gastosVariables)) * 0.35;

    let metaAhorro = ingresosTotales - (gastosFijos + gastosVariables);
    let ahorro = metaAhorro - capacidadEnd;

    InputCalculoSalida.value = ` ${capacidadEnd} `;
    InputCalculoSalidaAhorro.value = `${ahorro}`;
    
    //Capacidad de endeudamiento: ||$||Capacidad de ahorro:$ ${ahorro}
} 
//   InputCalculoSalida.value = alturaTri;

function calcularCapacidadAhorro(){
    InputCalculoSalidaAhorro.value="";
    calcularCapacidadEndeudamiento();
    

}