// h1 {color: red}
// .parrafito {...}
// #pid {...}

const h1 = document.querySelector('h1'); // Metodos que nos da el navegador para seleccionar los elementos que tenemos en el HTML
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log(
    h1,
    p,
    parrafito,
    pid,
    input,
);

// querySelector - Selecciona al primero que se encuentra
// querySelectorAll - Selecciona a todos los que cumplan con esa etiqueta
// getElementById - Selecciona a el que tenga ese ID
// getElementsByClass - Selecciona a todos los que tengas esa clase


