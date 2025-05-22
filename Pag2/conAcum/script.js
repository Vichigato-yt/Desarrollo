    const enunciados = {
      problema1: `Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.`,

      problema2: `Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.`,

      problema3: `En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.\nAdemás informar el importe total que gasta la empresa en sueldos.`,

      problema4: `Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado).`,

      problema5: `Mostrar los múltiplos de 10 hasta el valor 1500.`,

      problema6: `Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales').`,

      problema7: `Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.\nUsar operador % para verificar paridad.`
    };

    const resultadoDiv = document.getElementById('resultado');

    document.getElementById('problema').addEventListener('change', function () {
      const seleccion = this.value;
      document.getElementById('enunciado').textContent = enunciados[seleccion] || '';
      resultadoDiv.textContent = '';
    });

    document.getElementById('ejecutar').addEventListener('click', function () {
      const seleccion = document.getElementById('problema').value;
      resultadoDiv.textContent = '';

      if (seleccion === 'problema1') {
        // Leer 10 notas, contar >=7 y <7
        let cant7omas = 0;
        let cantMenor7 = 0;
        for (let i = 0; i < 10; i++) {
          let nota = parseInt(prompt(`Ingrese la nota del alumno ${i + 1}:`));
          if (!isNaN(nota)) {
            if (nota >= 7) cant7omas++;
            else cantMenor7++;
          } else {
            i--; // repetir si no es número válido
          }
        }
        resultadoDiv.textContent = `Cantidad de alumnos con notas >= 7: ${cant7omas}\nCantidad de alumnos con notas < 7: ${cantMenor7}`;
      }

      else if (seleccion === 'problema2') {
        // Leer 5 alturas, calcular promedio
        let suma = 0;
        for (let i = 0; i < 5; i++) {
          let altura = parseFloat(prompt(`Ingrese la altura en cm de la persona ${i + 1}:`));
          if (!isNaN(altura)) suma += altura;
          else i--;
        }
        let promedio = suma / 5;
        resultadoDiv.textContent = `Altura promedio: ${promedio.toFixed(2)} cm`;
      }

      else if (seleccion === 'problema3') {
        // Leer 5 sueldos, contar <=300 y >300 y total
        let cantMenorIgual300 = 0;
        let cantMayor300 = 0;
        let total = 0;
        for (let i = 0; i < 5; i++) {
          let sueldo = parseFloat(prompt(`Ingrese el sueldo del empleado ${i + 1} (entre 100 y 500):`));
          if (!isNaN(sueldo) && sueldo >= 100 && sueldo <= 500) {
            if (sueldo <= 300) cantMenorIgual300++;
            else cantMayor300++;
            total += sueldo;
          } else {
            i--;
          }
        }
        resultadoDiv.textContent =
          `Cantidad empleados con sueldo entre 100 y 300: ${cantMenorIgual300}\n` +
          `Cantidad empleados con sueldo mayor a 300: ${cantMayor300}\n` +
          `Gasto total en sueldos: $${total.toFixed(2)}`;
      }

      else if (seleccion === 'problema4') {
        // Imprimir 20 términos de la serie 5 - 10 - 15 - ...
        let serie = [];
        let valor = 5;
        for (let i = 0; i < 20; i++) {
          serie.push(valor);
          valor += 5;
        }
        resultadoDiv.textContent = serie.join(' - ');
      }

      else if (seleccion === 'problema5') {
        // Múltiplos de 10 hasta 1500
        let multiplos = [];
        for (let i = 10; i <= 1500; i += 10) {
          multiplos.push(i);
        }
        resultadoDiv.textContent = `Múltiplos de 10 hasta 1500:\n${multiplos.join(' - ')}`;
      }

      else if (seleccion === 'problema6') {
        // Cargar dos listas de 3 valores y comparar sumas
        let lista1 = [];
        let lista2 = [];
        for (let i = 0; i < 3; i++) {
          let val = parseFloat(prompt(`Ingrese valor ${i + 1} de la lista 1:`));
          if (!isNaN(val)) lista1.push(val);
          else i--;
        }
        for (let i = 0; i < 3; i++) {
          let val = parseFloat(prompt(`Ingrese valor ${i + 1} de la lista 2:`));
          if (!isNaN(val)) lista2.push(val);
          else i--;
        }
        let suma1 = lista1.reduce((a, b) => a + b, 0);
        let suma2 = lista2.reduce((a, b) => a + b, 0);

        if (suma1 > suma2) resultadoDiv.textContent = 'Lista 1 mayor';
        else if (suma2 > suma1) resultadoDiv.textContent = 'Lista 2 mayor';
        else resultadoDiv.textContent = 'Listas iguales';
      }

      else if (seleccion === 'problema7') {
        // Leer 5 números e informar pares e impares
        let cantPares = 0;
        let cantImpares = 0;
        for (let i = 0; i < 5; i++) {
          let val = parseInt(prompt(`Ingrese el número ${i + 1}:`));
          if (!isNaN(val)) {
            if (val % 2 === 0) cantPares++;
            else cantImpares++;
          } else {
            i--;
          }
        }
        resultadoDiv.textContent = `Cantidad de valores pares: ${cantPares}\nCantidad de valores impares: ${cantImpares}`;
      }

      else {
        alert("Selecciona un problema válido antes de ejecutar.");
      }
    });