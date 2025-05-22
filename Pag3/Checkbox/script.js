 const enunciados = {
      problema1: `Problema 1:
Confeccionar una página que muestre tres checkbox que permitan seleccionar los deportes que practica el usuario (Fútbol, Básquet, Tenis).
Mostrar al presionar un botón los deportes que eligió.`
    };

    document.getElementById('problema').addEventListener('change', function () {
      const seleccion = this.value;
      const enunciadoDiv = document.getElementById('enunciado');
      const zonaInteraccion = document.getElementById('zonaInteraccion');
      const resultadoDiv = document.getElementById('resultado');

      enunciadoDiv.textContent = enunciados[seleccion] || '';
      resultadoDiv.textContent = '';

      if (seleccion === 'problema1') {
        zonaInteraccion.innerHTML = `
          <form>
            Seleccione los deportes que practica:<br>
            <input type="checkbox" id="checkbox1">Fútbol<br>
            <input type="checkbox" id="checkbox2">Básquet<br>
            <input type="checkbox" id="checkbox3">Tenis<br>
          </form>
        `;
      } else {
        zonaInteraccion.innerHTML = '';
      }
    });

    document.getElementById('ejecutar').addEventListener('click', function () {
      const seleccion = document.getElementById('problema').value;
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.textContent = '';

      if (seleccion === 'problema1') {
        let deportes = '';
        if (document.getElementById("checkbox1").checked) {
          deportes += 'Fútbol ';
        }
        if (document.getElementById("checkbox2").checked) {
          deportes += 'Básquet ';
        }
        if (document.getElementById("checkbox3").checked) {
          deportes += 'Tenis';
        }
        resultadoDiv.textContent = `Los deportes seleccionados son: ${deportes}`;
      } else {
        alert("Selecciona un problema válido antes de ejecutar.");
      }
    });