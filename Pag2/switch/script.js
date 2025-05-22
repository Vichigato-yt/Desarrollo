const enunciados = {
      problema1: `Problema 1:
Solicitar el ingreso de una palabra (casa, mesa, perro, gato) y mostrar su traducción al inglés.
Si se ingresa 'casa', debe mostrarse 'house'.`
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
        const palabra = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato):');
        let traduccion = '';

        switch (palabra.toLowerCase()) {
          case 'casa':
            traduccion = 'house';
            break;
          case 'mesa':
            traduccion = 'table';
            break;
          case 'perro':
            traduccion = 'dog';
            break;
          case 'gato':
            traduccion = 'cat';
            break;
          default:
            traduccion = 'Solo puedo traducir (casa, mesa, perro, gato)';
        }

        resultadoDiv.textContent = `Traducción: ${traduccion}`;
      }
    });