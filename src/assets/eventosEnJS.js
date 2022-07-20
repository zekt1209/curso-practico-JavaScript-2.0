const h1 = document.querySelector('h1'); // Metodos que nos da el navegador para seleccionar los elementos que tenemos en el HTML

const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

const result = document.querySelector('#result');

function btnOnClick() {
    const num1 = parseInt(number1.value);    
    const num2 = parseInt(number2.value);
    
    const resultado = num1 + num2;

    result.innerText = "El resultado es: " + resultado;
}