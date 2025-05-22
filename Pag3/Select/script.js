const enunciados = {
      problema1: `Problema 1:\nConfeccionar una página que muestre un objeto SELECT con distintos tipos de pizzas (Jamón y Queso, Muzzarella, Morrones). Al seleccionar una, mostrar en un objeto de tipo TEXT el precio de la misma.`,

      problema2: `Problema 2:\nGenerar un presupuesto de un equipo de computación a partir de tres objetos de tipo SELECT que nos permiten seleccionar:\n- Procesador (Intel I3 - $400, Intel I5 - $600, Intel I7 - $800).\n- Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)\n- Disco Duro (500 Gb - $300, 1 Tb - $440, 3 Tb - $500)\nAl presionar un botón 'Calcular' mostrar el presupuesto en un objeto de tipo TEXT.`,

      problema3: `Problema 3:\nConfeccionar una página que permita tomar un examen múltiple choice.\nDisponer 4 preguntas y sus respectivos controles SELECT. Al presionar un botón mostrar la cantidad de respuestas correctas.`
    };

    document.getElementById('problema').addEventListener('change', function () {
      const seleccion = this.value;
      const enunciadoDiv = document.getElementById('enunciado');
      const contenido = document.getElementById('contenido');
      document.getElementById('resultado').textContent = '';
      enunciadoDiv.textContent = enunciados[seleccion] || '';
      contenido.innerHTML = '';

      if (seleccion === 'problema1') {
        contenido.innerHTML = `
          <label for="pizza">Selecciona una pizza:</label>
          <select id="pizza" onchange="document.getElementById('precio').value = this.value">
            <option value="180">Jamón y Queso</option>
            <option value="150">Muzzarella</option>
            <option value="170">Morrones</option>
          </select>
          <input type="text" id="precio" readonly>
        `;
      }

      if (seleccion === 'problema2') {
        contenido.innerHTML = `
          <label>Procesador:</label>
          <select id="procesador">
            <option value="400">Intel I3</option>
            <option value="600">Intel I5</option>
            <option value="800">Intel I7</option>
          </select>
          <label>Monitor:</label>
          <select id="monitor">
            <option value="250">Samsung 20'</option>
            <option value="350">Samsung 22'</option>
            <option value="550">Samsung 26'</option>
          </select>
          <label>Disco Duro:</label>
          <select id="disco">
            <option value="300">500 Gb</option>
            <option value="440">1 Tb</option>
            <option value="500">3 Tb</option>
          </select>
          <input type="text" id="presupuesto" readonly>
        `;
      }

      if (seleccion === 'problema3') {
        contenido.innerHTML = `
          <p>¿Cómo se dice rojo en inglés?</p>
          <select id="preg1">
            <option value="0">blue</option>
            <option value="0">green</option>
            <option value="1">red</option>
          </select>
          <p>¿Cómo se dice ventana en inglés?</p>
          <select id="preg2">
            <option value="1">window</option>
            <option value="0">door</option>
            <option value="0">bedroom</option>
          </select>
          <p>¿Cómo se dice gato en inglés?</p>
          <select id="preg3">
            <option value="0">dog</option>
            <option value="1">cat</option>
            <option value="0">lion</option>
          </select>
          <p>¿Cómo se dice hombre en inglés?</p>
          <select id="preg4">
            <option value="0">women</option>
            <option value="1">man</option>
            <option value="0">child</option>
          </select>
        `;
      }
    });

    document.getElementById('ejecutar').addEventListener('click', function () {
      const seleccion = document.getElementById('problema').value;
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.textContent = '';

      if (seleccion === 'problema2') {
        let p = parseInt(document.getElementById('procesador').value);
        let m = parseInt(document.getElementById('monitor').value);
        let d = parseInt(document.getElementById('disco').value);
        document.getElementById('presupuesto').value = p + m + d;
      }

      if (seleccion === 'problema3') {
        let total = 0;
        for (let i = 1; i <= 4; i++) {
          let val = document.getElementById('preg' + i).value;
          if (val == '1') total++;
        }
        resultadoDiv.textContent = `Respuestas correctas: ${total}\nRespuestas incorrectas: ${4 - total}`;
      }
    });