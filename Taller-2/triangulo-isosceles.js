//Funcion calcula que la altura dependiendo de la igualdad de los lados

function alturaTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2) {
    var h = Math.sqrt(lado1 * lado2 - lado3 / 4);
  } else if (lado1 === lado3) {
    var h = Math.sqrt(lado1 * lado3 - lado2 / 4);
  }
  return h;
}

//Aqui interactuamos con el HTML

//Funcion para el botón calcular altura del triángulo
function calcularAlturaTriangulo() {
  InputTrianguloSalida.value = "";
  const input1 = document.getElementById("InputTriangulo1");
  const lado1 = parseInt(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const lado2 = parseInt(input2.value);
  const input3 = document.getElementById("InputTriangulo3");
  const lado3 = parseInt(input3.value);

  //Validar si es un triangulo isósceles 2 lados iguales  1 distinto

  if ((lado1 === lado2 || lado2 === lado1) && lado3 !== lado1) {
    const alturaTri = alturaTriangulo(lado1, lado2, lado3) + "cms";
    InputTrianguloSalida.value = alturaTri;
  } else if ((lado1 === lado3 || lado3 === lado1) && lado2 !== lado3) {
    const alturaTri = alturaTriangulo(lado1, lado2, lado3) + "cms";
    InputTrianguloSalida.value = alturaTri;
  } else {
    InputTrianguloSalida.value =
      "No es un triángulo isósceles intenta de nuevo!";
  }
}
