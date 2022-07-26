const h1 = document.querySelector('h1'); // Metodos que nos da el navegador para seleccionar los elementos que tenemos en el HTML

const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

const result = document.querySelector('#result');
const btn1 = document.querySelector('#btnCalcular')

function btnOnClick() {
    const resultado = parseInt(number1.value) + parseInt(number2.value);    
    result.innerText = "El resultado es: " + resultado;
}





// addEventListener

// btn1.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();

    const resultado = parseInt(number1.value) + parseInt(number2.value);    
    result.innerText = "El resultado es: " + resultado;   
}