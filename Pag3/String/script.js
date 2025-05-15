document.getElementById("problemaSelect").addEventListener("change", function () {
    const problema = this.value;
    if (problema === "1") {
        problema1();
    } else if (problema === "2") {
        problema2();
    } else if (problema === "3") {
        problema3();
    } else if (problema === "4") {
        problema4();
    } else if (problema === "5") {
        problema5();
    } else if (problema === "6") {
        problema6();
    } else if (problema === "7") {
        problema7();
    }
});

const problema1 = () => {
    let nombre;
    let cant = 0;
    let resultado = "";
    do {
        nombre = prompt('Ingrese un nombre (Terminar ingresando Fin):');
        cant++;
    } while (nombre !== 'Fin');
    cant--; // para descontar la palabra "Fin"
    resultado = `Se ingresaron ${cant} palabras.`;
    document.getElementById("resultado").innerHTML = resultado;
};

const problema2 = () => {
    let nombre;
    let cant = 0;
    let resultado = "";
    do {
        nombre = prompt('Ingrese un nombre (Terminar ingresando Fin):');
        cant++;
        nombre = nombre.toUpperCase();
    } while (nombre !== 'FIN');
    cant--; // para descontar la palabra "Fin"
    resultado = `Se ingresaron ${cant} palabras.`;
    document.getElementById("resultado").innerHTML = resultado;
};

const problema3 = () => {
    let frase = prompt('Ingrese una oración:');
    let palabra = prompt('Ingrese una palabra a buscar:');
    let resultado = frase.indexOf(palabra) !== -1
        ? `La frase ingresada contiene la palabra: "${palabra}" a partir de la posición ${frase.indexOf(palabra)}.`
        : `La frase ingresada no contiene la palabra: "${palabra}".`;
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
        <strong>Mitad inicial de la frase:</strong> ${frase.slice(0, frase.length / 2)}<br>
        <strong>Último carácter:</strong> ${frase.charAt(frase.length - 1)}<br>
        <strong>Inversa:</strong> ${frase.split('').reverse().join('')}<br>
        <strong>Separados por guión:</strong> ${frase.split('').join('-')}<br>
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