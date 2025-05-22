 const enunciados = {
      problema1: `Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10`
    };

    const problemaSelect = document.getElementById('problema');
    const enunciadoPre = document.getElementById('enunciado');
    const resultadoDiv = document.getElementById('resultado');

    problemaSelect.addEventListener('change', () => {
      const problema = problemaSelect.value;
      enunciadoPre.textContent = problema ? enunciados[problema] : '';
      resultadoDiv.textContent = '';
    });

    document.getElementById('ejecutar').addEventListener('click', () => {
      resultadoDiv.textContent = '';
      const problema = problemaSelect.value;
      if (!problema) {
        alert('Selecciona un problema para ejecutar.');
        return;
      }

      if (problema === 'problema1') {
        function mostrarRango() {
          let inicio = parseInt(prompt("Ingrese valor inicial (menor)"));
          let fin = parseInt(prompt("Ingrese valor final (mayor)"));
          if (isNaN(inicio) || isNaN(fin)) {
            alert('Por favor ingrese números válidos.');
            return null;
          }
          if (inicio > fin) {
            alert('El valor inicial debe ser menor o igual que el valor final.');
            return null;
          }
          let resultado = '';
          for (let f = inicio; f <= fin; f++) {
            resultado += f + (f < fin ? ' ' : '');
          }
          return resultado;
        }
        let rango = mostrarRango();
        if (rango !== null) {
          resultadoDiv.textContent = rango;
        }
      }
    });