/* 

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";


const presentacion = (name, lastname, nickname) => {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

presentacion("Juan David", "Castro Gallego", "juandc");


/*

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

*/

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Selecciona un tipo de suscripcion valido");
}

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

/* 

Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

*/

const tiposDeSuscripciones = [
    {nombre: "Free", descripcion: "Solo puedes tomar los cursos gratis"},
    {nombre: "Basic", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {nombre: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {nombre: "ExpertPlus", descripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
];

const informacion = (userSuscription) => {
    tiposDeSuscripciones.forEach(element => {
        if (element.nombre === userSuscription){
            console.log(`Tipo de suscripcion: ${element.nombre}, ${element.descripcion}`);
        } 
    });
};

informacion("ExpertPlus");

/*  

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

*/

{
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    let i = 0;
    
    while(i<5) {
        console.log("El valor de i es: " + i);
        i++;
    }
}


{
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }
    
    let i = 10;
    while(i>=2) {
        console.log("El valor de i es: " + i);
        i--;
    }
}


do {
    let result = parseInt(prompt("Cuantos años tienes?: ",0));

} while(result!=2)

console.log("Correcto! ");