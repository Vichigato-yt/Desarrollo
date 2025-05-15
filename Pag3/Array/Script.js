const enunciados = {
  problema1: `Problema 1:
Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
- El valor acumulado de todos los elementos del vector.
- El valor acumulado de los elementos del vector que sean mayores a 36.
- Cantidad de valores mayores a 50.`,

  problema2: `Problema 2:
Realizar un programa que pida la carga de dos vectores numéricos.
Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño.
Sumar componente a componente.`
};

document.getElementById('problema').addEventListener('change', function () {
  const seleccion = this.value;
  const enunciadoDiv = document.getElementById('enunciado');
  enunciadoDiv.textContent = enunciados[seleccion] || '';
  document.getElementById('resultado').textContent = ''; // Limpiar resultado anterior
});

document.getElementById('ejecutar').addEventListener('click', function () {
  const seleccion = document.getElementById('problema').value;
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = ''; // limpiar resultado

  if (seleccion === 'problema1') {
    let vec = new Array(8);
    for (let i = 0; i < vec.length; i++) {
      let val = prompt(`Ingrese el valor ${i + 1} de 8:`);
      vec[i] = parseInt(val);
    }

    let suma = vec.reduce((acc, val) => acc + val, 0);
    let sumaMayor36 = vec.filter(x => x > 36).reduce((acc, val) => acc + val, 0);
    let cantMayor50 = vec.filter(x => x > 50).length;

    resultadoDiv.textContent =
      `Resultado:\n` +
      `- Valor acumulado: ${suma}\n` +
      `- Valor acumulado mayores a 36: ${sumaMayor36}\n` +
      `- Cantidad mayores a 50: ${cantMayor50}`;
  }

  else if (seleccion === 'problema2') {
    const tam = 5;
    let vec1 = new Array(tam);
    let vec2 = new Array(tam);
    let vecSuma = new Array(tam);

    for (let i = 0; i < tam; i++) {
      vec1[i] = parseInt(prompt(`Vector 1 - Valor ${i + 1} de ${tam}:`));
    }

    for (let i = 0; i < tam; i++) {
      vec2[i] = parseInt(prompt(`Vector 2 - Valor ${i + 1} de ${tam}:`));
    }

    for (let i = 0; i < tam; i++) {
      vecSuma[i] = vec1[i] + vec2[i];
    }

    resultadoDiv.textContent = `Vector suma:\n${vecSuma.join(' ')}`;
  }

  else {
    alert("Selecciona un problema válido antes de ejecutar.");
  }
});