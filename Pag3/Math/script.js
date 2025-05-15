const enunciados = {
  problema1: `Problema:
Confeccionar un programa que solicite el ingreso de un número 
y nos muestre dicho valor elevado a la tercera potencia.`,

  problema2: `Problema:
Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho valor.`
};

document.getElementById('problema').addEventListener('change', function () {
  const seleccion = this.value;
  document.getElementById('enunciado').textContent = enunciados[seleccion] || '';
  document.getElementById('resultado').textContent = '';
});

document.getElementById('ejecutar').addEventListener('click', function () {
  const seleccion = document.getElementById('problema').value;
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = '';

  if (seleccion === 'problema1') {
    let valor = parseFloat(prompt('Ingrese un número:'));
    if (isNaN(valor)) {
      resultadoDiv.textContent = 'Por favor, ingresa un número válido.';
      return;
    }
    let resu = Math.pow(valor, 3);
    resultadoDiv.textContent = `El valor ${valor} elevado al cubo es ${resu}`;
  }

  else if (seleccion === 'problema2') {
    let valor = parseFloat(prompt('Ingrese un número:'));
    if (isNaN(valor)) {
      resultadoDiv.textContent = 'Por favor, ingresa un número válido.';
      return;
    }
    let resu = Math.sqrt(valor);
    resultadoDiv.textContent = `La raíz cuadrada de ${valor} es ${resu}`;
  }

  else {
    alert("Selecciona un problema antes de ejecutar.");
  }
});