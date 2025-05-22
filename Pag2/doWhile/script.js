const enunciados = {
      problema1:
`Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresar el 9999 (no sumar dicho valor, indica final de carga).
Imprimir el valor acumulado e informar si es cero, mayor a cero o menor a cero.`,

      problema2:
`En un banco se procesan datos de las cuentas corrientes de sus clientes.
De cada cuenta se conoce: número de cuenta, nombre del cliente y saldo actual.
La carga finaliza al ingresar un número de cuenta negativo.
Informar para cada cuenta su número, nombre y estado (Acreedor >0, Deudor <0, Nulo =0).
Al final informar la suma total de saldos acreedores.`,

      problema3:
`Se realizó un censo provincial. De cada persona se tiene: documento, edad y sexo (masculino/femenino).
La carga finaliza al ingresar documento 0.
Informar:
a) Cantidad total de personas censadas.
b) Cantidad de varones.
c) Cantidad de mujeres.
d) Cantidad de varones entre 16 y 65 años.`
    };

    const enunciadoDiv = document.getElementById('enunciado');
    const resultadoDiv = document.getElementById('resultado');
    const problemaSelect = document.getElementById('problema');

    problemaSelect.addEventListener('change', () => {
      resultadoDiv.textContent = '';
      enunciadoDiv.textContent = enunciados[problemaSelect.value] || '';
    });

    document.getElementById('ejecutar').addEventListener('click', () => {
      resultadoDiv.textContent = '';
      const problema = problemaSelect.value;
      if (!problema) {
        alert('Selecciona un problema para ejecutar.');
        return;
      }

      if (problema === 'problema1') {
        let suma = 0;
        while (true) {
          let valor = prompt('Ingrese un valor (9999 para finalizar):');
          if (valor === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          valor = parseInt(valor);
          if (isNaN(valor)) {
            alert('Debe ingresar un número válido.');
            continue;
          }
          if (valor === 9999) break;
          suma += valor;
        }
        let mensaje = `Valor acumulado total: ${suma}\n`;
        if (suma > 0) mensaje += 'El valor acumulado es mayor a cero';
        else if (suma === 0) mensaje += 'El valor acumulado es cero';
        else mensaje += 'El valor acumulado es menor a cero';
        resultadoDiv.textContent = mensaje;
      }

      else if (problema === 'problema2') {
        let saldoAcreedorTotal = 0;
        let saldosInfo = '';
        while (true) {
          let nroCuenta = prompt('Ingrese número de cuenta (negativo para finalizar):');
          if (nroCuenta === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          nroCuenta = parseInt(nroCuenta);
          if (isNaN(nroCuenta)) {
            alert('Debe ingresar un número válido.');
            continue;
          }
          if (nroCuenta < 0) break;

          let nombre = prompt('Ingrese nombre del cliente:');
          if (nombre === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }

          let saldo = prompt('Ingrese saldo actual:');
          if (saldo === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          saldo = parseFloat(saldo);
          if (isNaN(saldo)) {
            alert('Debe ingresar un número válido para saldo.');
            continue;
          }

          let estado = '';
          if (saldo > 0) {
            estado = 'Acreedor';
            saldoAcreedorTotal += saldo;
          } else if (saldo < 0) {
            estado = 'Deudor';
          } else {
            estado = 'Nulo';
          }

          saldosInfo += `Cuenta: ${nroCuenta}, Cliente: ${nombre}, Estado: ${estado}\n`;
        }
        saldosInfo += `\nSuma total de saldos acreedores: ${saldoAcreedorTotal.toFixed(2)}`;
        resultadoDiv.textContent = saldosInfo;
      }

      else if (problema === 'problema3') {
        let totalPersonas = 0;
        let cantVarones = 0;
        let cantMujeres = 0;
        let cantVaronesEntre16y65 = 0;

        while (true) {
          let documento = prompt('Ingrese número de documento (0 para finalizar):');
          if (documento === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          documento = parseInt(documento);
          if (isNaN(documento)) {
            alert('Debe ingresar un número válido.');
            continue;
          }
          if (documento === 0) break;

          let edad = prompt('Ingrese la edad:');
          if (edad === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          edad = parseInt(edad);
          if (isNaN(edad)) {
            alert('Debe ingresar una edad válida.');
            continue;
          }

          let sexo = prompt('Ingrese el sexo (masculino/femenino):');
          if (sexo === null) {
            resultadoDiv.textContent = 'Carga cancelada.';
            return;
          }
          sexo = sexo.toLowerCase();
          if (sexo !== 'masculino' && sexo !== 'femenino') {
            alert('Sexo inválido, ingrese "masculino" o "femenino".');
            continue;
          }

          totalPersonas++;
          if (sexo === 'masculino') {
            cantVarones++;
            if (edad >= 16 && edad <= 65) cantVaronesEntre16y65++;
          } else if (sexo === 'femenino') {
            cantMujeres++;
          }
        }

        resultadoDiv.textContent =
          `Total de personas censadas: ${totalPersonas}\n` +
          `Cantidad de varones: ${cantVarones}\n` +
          `Cantidad de mujeres: ${cantMujeres}\n` +
          `Cantidad de varones entre 16 y 65 años: ${cantVaronesEntre16y65}`;
      }
    });