 const enunciados = {
      problema1: `Problema 1:
Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que seleccione si es mayor de 18 años o no. Al presionar un botón mostrar un alert indicando si puede ingresar al sitio o no.`
    };

    document.getElementById('problema').addEventListener('change', function () {
      const seleccion = this.value;
      const enunciadoDiv = document.getElementById('enunciado');
      enunciadoDiv.textContent = enunciados[seleccion] || '';
      document.getElementById('resultado').textContent = '';
    });

    document.getElementById('ejecutar').addEventListener('click', function () {
      const seleccion = document.getElementById('problema').value;
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = '';

      if (seleccion === 'problema1') {
        resultadoDiv.innerHTML = `
          <form>
            <p>¿Es mayor de edad?</p>
            <p><input type="radio" id="radio1" name="edad"> Sí</p>
            <p><input type="radio" id="radio2" name="edad"> No</p>
            <p><input type="button" value="Verificar" onClick="verificar()"></p>
          </form>
        `;
      } else {
        alert("Selecciona un problema válido antes de ejecutar.");
      }
    });

    function verificar() {
      if (document.getElementById('radio1').checked) {
        alert('Eres mayor de edad y por lo tanto puedes ingresar');
      } else if (document.getElementById('radio2').checked) {
        alert('No eres mayor de edad y por lo tanto no puedes ingresar');
      } else {
        alert('Por favor selecciona una opción');
      }
    }