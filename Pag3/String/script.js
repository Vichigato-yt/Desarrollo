const enunciados = {
  1: `Problema 1:
Ingresar una serie de nombres por teclado hasta que se cargue la palabra "Fin", y mostrar cuántos nombres se ingresaron.`,

  2: `Problema 2:
Igual al anterior, pero finaliza sin importar mayúsculas o minúsculas. Es decir, que se pueda escribir "fin", "Fin" o "FIN".`,

  3: `Problema 3:
Ingresar una frase y una palabra clave. Informar si la palabra aparece en la frase y, si es así, en qué posición.`,

  4: `Problema 4:
Ingresar una palabra o texto y determinar si es palíndromo.`,

  5: `Problema 5:
Verificar si un correo electrónico ingresado contiene el carácter "@".`,

  6: `Problema 6:
Dado un texto:
- Mostrar la primera mitad.
- Mostrar el último carácter.
- Mostrar el texto en reversa.
- Mostrar cada carácter separado por guiones.
- Contar cuántas vocales tiene.`,

  7: `Problema 7:
Ingresar una oración y mostrar cada palabra en una línea distinta.`
};

document.getElementById("problemaSelect").addEventListener("change", function () {
  const problema = this.value;
  document.getElementById("enunciado").textContent = enunciados[problema] || '';
  document.getElementById("resultado").innerHTML = '';
});

document.getElementById("ejecutar").addEventListener("click", function () {
  const problema = document.getElementById("problemaSelect").value;
  switch (problema) {
    case "1": problema1(); break;
    case "2": problema2(); break;
    case "3": problema3(); break;
    case "4": problema4(); break;
    case "5": problema5(); break;
    case "6": problema6(); break;
    case "7": problema7(); break;
    default: alert("Selecciona un problema válido antes de ejecutar.");
  }
});

const problema1 = () => {
  let nombre, cant = 0;
  do {
    nombre = prompt('Ingrese un nombre (Terminar con "Fin"):');
    cant++;
  } while (nombre !== 'Fin');
  cant--;
  document.getElementById("resultado").innerHTML = `Se ingresaron ${cant} palabras.`;
};

const problema2 = () => {
  let nombre, cant = 0;
  do {
    nombre = prompt('Ingrese un nombre (Terminar con "Fin"):');
    cant++;
  } while (nombre.toLowerCase() !== 'fin');
  cant--;
  document.getElementById("resultado").innerHTML = `Se ingresaron ${cant} palabras.`;
};

const problema3 = () => {
  let frase = prompt('Ingrese una oración:');
  let palabra = prompt('Ingrese una palabra a buscar:');
  let posicion = frase.indexOf(palabra);
  let resultado = (posicion !== -1)
    ? `La frase contiene la palabra "${palabra}" a partir de la posición ${posicion}.`
    : `La frase no contiene la palabra "${palabra}".`;
  document.getElementById("resultado").innerHTML = resultado;
};

const problema4 = () => {
  let texto = prompt('Ingrese una palabra o frase:');
  let esPalindromo = texto === texto.split('').reverse().join('');
  let resultado = esPalindromo
    ? `${texto} se lee igual en ambas direcciones.`
    : `${texto} no se lee igual en ambas direcciones.`;
  document.getElementById("resultado").innerHTML = resultado;
};

const problema5 = () => {
  let mail = prompt('Ingrese un mail:');
  let resultado = mail.includes('@')
    ? `El mail ${mail} tiene el carácter @.`
    : `El mail ${mail} no tiene el carácter @.`;
  document.getElementById("resultado").innerHTML = resultado;
};

const problema6 = () => {
  let frase = prompt('Ingrese una palabra o frase:');
  let resultado = `
    <strong>Mitad inicial:</strong> ${frase.slice(0, frase.length / 2)}<br>
    <strong>Último carácter:</strong> ${frase.charAt(frase.length - 1)}<br>
    <strong>Inversa:</strong> ${frase.split('').reverse().join('')}<br>
    <strong>Con guiones:</strong> ${frase.split('').join('-')}<br>
    <strong>Cantidad de vocales:</strong> ${frase.match(/[aeiouAEIOU]/g)?.length || 0}<br>
  `;
  document.getElementById("resultado").innerHTML = resultado;
};

const problema7 = () => {
  let frase = prompt('Ingrese una oración:');
  let palabras = frase.split(' ');
  let resultado = palabras.join('<br>');
  document.getElementById("resultado").innerHTML = resultado;
};