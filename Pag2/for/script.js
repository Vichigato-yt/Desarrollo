const enunciados = {
      problema1: `Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.`,

      problema2: `Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.`,

      problema3: `Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).`,

      problema4: `Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos).
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.`,

      problema5: `Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.`,

      problema6: `Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.`,

      problema7: `Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.`,

      problema8: `Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.`
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
        let conta1 = 0;
        let texto = '';
        for (let f = 1; f <= 3; f++) {
          let base = parseInt(prompt('Ingrese la base:'));
          if (isNaN(base)) { alert('Base inválida'); f--; continue; }
          let altura = parseInt(prompt('Ingrese la altura:'));
          if (isNaN(altura)) { alert('Altura inválida'); f--; continue; }
          let superficie = base * altura / 2;
          if (superficie > 12) conta1++;
          texto += `Triángulo nro: ${f}\nBase: ${base}\nAltura: ${altura}\nSuperficie: ${superficie}\n\n`;
        }
        texto += `Cantidad de triángulos con superficie mayor a 12: ${conta1}`;
        resultadoDiv.textContent = texto;
      }

      else if (problema === 'problema2') {
        let suma = 0;
        for (let f = 1; f <= 10; f++) {
          let valor = parseInt(prompt('Ingrese un nro:'));
          if (isNaN(valor)) { alert('Número inválido'); f--; continue; }
          if (f > 5) suma += valor;
        }
        resultadoDiv.textContent = 'La suma de los últimos cinco valores ingresados es: ' + suma;
      }

      else if (problema === 'problema3') {
        let tabla = 5;
        let texto = 'Tabla de multiplicar del 5 (del 5 al 50):\n';
        for (let f = 1; f <= 10; f++) {
          texto += tabla + (f < 10 ? ', ' : '');
          tabla += 5;
        }
        resultadoDiv.textContent = texto;
      }

      else if (problema === 'problema4') {
        let tabla = parseInt(prompt('Ingrese un valor del 1 al 10:', ''));
        if (isNaN(tabla) || tabla < 1 || tabla > 10) {
          alert('Valor inválido, debe estar entre 1 y 10.');
          return;
        }
        let conta = tabla;
        let texto = `Tabla de multiplicar del ${tabla} (12 primeros términos):\n`;
        for (let f = 1; f <= 12; f++) {
          texto += conta + (f < 12 ? ', ' : '');
          conta += tabla;
        }
        resultadoDiv.textContent = texto;
      }

      else if (problema === 'problema5') {
        let cant1 = 0, cant2 = 0, cant3 = 0;
        let texto = '';
        for (let f = 1; f <= 4; f++) {
          let lado1 = parseInt(prompt('Ingrese primer lado:'));
          let lado2 = parseInt(prompt('Ingrese segundo lado:'));
          let lado3 = parseInt(prompt('Ingrese tercer lado:'));
          if ([lado1, lado2, lado3].some(x => isNaN(x))) { alert('Lado inválido'); f--; continue; }
          if (lado1 === lado2 && lado1 === lado3) {
            texto += `Triángulo ${f}: equilátero\n`;
            cant1++;
          } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            texto += `Triángulo ${f}: isósceles\n`;
            cant2++;
          } else {
            texto += `Triángulo ${f}: escaleno\n`;
            cant3++;
          }
        }
        texto += `\nCantidad de triángulos equiláteros: ${cant1}\n`;
        texto += `Cantidad de triángulos isósceles: ${cant2}\n`;
        texto += `Cantidad de triángulos escalenos: ${cant3}\n`;

        if (cant1 < cant2 && cant1 < cant3) texto += 'Se ingresaron menos triángulos equiláteros';
        else if (cant2 < cant3) texto += 'Se ingresaron menos triángulos isósceles';
        else texto += 'Se ingresaron menos triángulos escalenos';

        resultadoDiv.textContent = texto;
      }

      else if (problema === 'problema6') {
        let cuad1 = 0, cuad2 = 0, cuad3 = 0, cuad4 = 0;
        let cant = parseInt(prompt('Cuántos puntos procesará:'));
        if (isNaN(cant) || cant <= 0) {
          alert('Cantidad inválida');
          return;
        }
        for (let f = 1; f <= cant; f++) {
          let x = parseInt(prompt(`Ingrese coordenada x del punto ${f}:`));
          let y = parseInt(prompt(`Ingrese coordenada y del punto ${f}:`));
          if ([x, y].some(coord => isNaN(coord))) { alert('Coordenada inválida'); f--; continue; }
          if (x > 0 && y > 0) cuad1++;
          else if (x < 0 && y > 0) cuad2++;
          else if (x < 0 && y < 0) cuad3++;
          else if (x > 0 && y < 0) cuad4++;
        }
        resultadoDiv.textContent =
          `Cantidad de puntos en primer cuadrante: ${cuad1}\n` +
          `Cantidad de puntos en segundo cuadrante: ${cuad2}\n` +
          `Cantidad de puntos en tercer cuadrante: ${cuad3}\n` +
          `Cantidad de puntos en cuarto cuadrante: ${cuad4}`;
      }

      else if (problema === 'problema7') {
        let cantnegativos = 0, cantpositivos = 0, mult15 = 0, sumapares = 0;
        for (let f = 1; f <= 10; f++) {
          let valor = parseInt(prompt(`Ingrese valor ${f}:`));
          if (isNaN(valor)) { alert('Valor inválido'); f--; continue; }
          if (valor < 0) cantnegativos++;
          else if (valor > 0) cantpositivos++;
          if (valor % 15 === 0 && valor !== 0) mult15++;
          if (valor % 2 === 0) sumapares += valor;
        }
        resultadoDiv.textContent =
          `Cantidad de valores negativos: ${cantnegativos}\n` +
          `Cantidad de valores positivos: ${cantpositivos}\n` +
          `Cantidad de múltiplos de 15: ${mult15}\n` +
          `Suma de valores pares: ${sumapares}`;
      }

      else if (problema === 'problema8') {
        let suma1 = 0, suma2 = 0, suma3 = 0;
        for (let f = 1; f <= 5; f++) {
          let edad = parseInt(prompt(`Edad estudiante turno mañana (${f}):`));
          if (isNaN(edad)) { alert('Edad inválida'); f--; continue; }
          suma1 += edad;
        }
        for (let f = 1; f <= 6; f++) {
          let edad = parseInt(prompt(`Edad estudiante turno tarde (${f}):`));
          if (isNaN(edad)) { alert('Edad inválida'); f--; continue; }
          suma2 += edad;
        }
        for (let f = 1; f <= 11; f++) {
          let edad = parseInt(prompt(`Edad estudiante turno noche (${f}):`));
          if (isNaN(edad)) { alert('Edad inválida'); f--; continue; }
          suma3 += edad;
        }
        let prom1 = suma1 / 5;
        let prom2 = suma2 / 6;
        let prom3 = suma3 / 11;
        let mensaje = `Promedio edades turno mañana: ${prom1.toFixed(2)}\n` +
                      `Promedio edades turno tarde: ${prom2.toFixed(2)}\n` +
                      `Promedio edades turno noche: ${prom3.toFixed(2)}\n`;
        if (prom1 > prom2 && prom1 > prom3) mensaje += 'El turno con mayor promedio es: Mañana';
        else if (prom2 > prom3) mensaje += 'El turno con mayor promedio es: Tarde';
        else mensaje += 'El turno con mayor promedio es: Noche';

        resultadoDiv.textContent = mensaje;
      }
    });