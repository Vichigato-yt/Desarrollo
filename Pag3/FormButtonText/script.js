function calcularCubo() {
  let valor = parseInt(document.getElementById('numCubo').value);
  if (!isNaN(valor)) {
    let cubo = valor ** 3;
    alert(`El cubo de ${valor} es ${cubo}`);
  } else {
    alert("Por favor ingrese un número válido.");
  }
}

function mostrarMayor() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingrese números válidos.");
    return;
  }

  if (num1 > num2) {
    alert(`El mayor es ${num1}`);
  } else if (num2 > num1) {
    alert(`El mayor es ${num2}`);
  } else {
    alert("Ambos números son iguales.");
  }
}

function concatenar() {
  let nombre = document.getElementById('nombre').value.trim();
  let apellido = document.getElementById('apellido').value.trim();
  document.getElementById('resultado').value = `${nombre} ${apellido}`;
}