//Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  var altura = base / 2;
  return (base * altura) / 2;
}

//Código del circulo

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

//Aqui interactuamos con el HTML

//funcion del cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value) + "cms";

  InputCuadradoSalida.value = perimetro; //
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value) + "cms^2";
  InputCuadradoSalida.value = area;

}

//funcion del triángulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = parseInt(input3.value);
  const perimetroTri = perimetroTriangulo(value1, value2, value3) + "cms";
  InputTrianguloSalida.value = perimetroTri;

}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = parseInt(input2.value);
  const areaTri = areaTriangulo(value1, value2) + "cms^2";
  InputTrianguloSalida.value = areaTri
}

//funcion del círculo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value) + " cms";
  InputCirculoSalida.value =perimetro;
  
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value) + " cms^2";
  InputCirculoSalida.value = area;
  
}
