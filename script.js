// CONDICIONAL:


let edad = Number(prompt("Bienvenido pero antes, introduzca su edad: "));


if (edad >= 18) {
    console.log("Es mayor, puede proseguir.");
    alert("Sos legal, puede pasar.");

} else if (edad < 18) {
    console.log("Es menor de edad, precaucion");
    alert("Sos menor mi rey. Sos bienvenido igual.");
} else {
    console.log("es un robot");
}

//CONDICIONAL

let contraseña = Number(prompt("Ingrese la contraseña: "));

if (contraseña == 123) {
    console.log("Introdujo bien el numero para ingresar.");
    alert("Contraseña correcta. avanza a la proxima puerta.")
} else {
    console.log("introdujo mal la contraseña, posible impostor.");
    alert("Contraseña incorrecta. JUIRA.");
    alert("Mentira, son todos bienvenidos.")
}

//BUCLE WHILE

let contraseña2 = prompt("Última puerta: ¿Cual es mi fruta favorita?");

while (contraseña2 != "naranja") {

    contraseña2 = prompt("Intentelo de nuevo.");
}

//BUCLE FOR

let ingreseNumero = parseInt(prompt("¡Perfecto! Ahora si, ¿que tabla quiere aprender hoy?"));

for (let i = 1; i <= 10; i++) {
    let resultado = ingreseNumero * i;
    document.write(`${ingreseNumero} x ${i} = ${resultado} <br>`);

}

//FUNCTION

let num1 = Number(prompt("Ingrese un número que quiera sumar: "));
let num2 = Number(prompt("Ingrese otro número que quiera sumar: "));

function sumar(num1, num2) {
    return num1 + num2;
}

let resultado = sumar(num1, num2);
console.log(resultado);
alert("El resultado es: " + resultado);


//OBJETOS + FUNCIONES + ARRAY

//constructor para un animal
function Animal(nombre, habitat, dieta) {
    this.nombre = nombre;
    this.habitat = habitat;
    this.dieta = dieta;
}

//array para almacenar los objetos animale
const zoologico = [];

//agregar animales al array del zoológico
let monos = zoologico.push(new Animal('Monos', 'Selva', 'Omnívoro'));
let hipopotamo = zoologico.push(new Animal(`Hipopotamo`, `sabana`, `Herbívoros`));
let leon = zoologico.push(new Animal(`Leon`, `Sabana`, `Carnivoro`));
let cebra = zoologico.push(new Animal(`Cebra`, `Sabana`, `Herbívoros`));
let jirafa = zoologico.push(new Animal(`Jirafa`, `Sabana`, `Herbívoros`));
let pinguino = zoologico.push(new Animal(`Pinguino`, `Antártida`, `Peces`));

//función para mostrar todos los animales del zoológico
function mostrarAnimales() {
    zoologico.forEach(function (animal) {
        console.log('Nombre: ' + animal.nombre + ', Habitat: ' + animal.habitat + ', Dieta: ' + animal.dieta);
    });
}

//función para mostrar los animales
mostrarAnimales();


//  EVENTO

//  CHANGE

const selectElement = document.querySelector(".zoo");
const eleccion = document.querySelector(".eleccion");

selectElement.addEventListener("change", (event) => {
    eleccion.innerText = `Elegiste: ${event.target.value}. Esta es una breve descripcion` ;
});

//  DOM

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
    });
});


//  KEYPRESS
const textarea = document.getElementById('miTextarea');
textarea.addEventListener("keypress", function (event) {
    console.log("Tipeó: " + event.key);
});

let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  let inputSubmit = document.getElementById('inputSubmit').value;
  console.log(inputSubmit);

  if (inputSubmit === "") {
    alert("El formulario no puede enviarse vacío!");
  } else {
    console.log("Consulta enviada, estaremos en contacto pronto");
  }
}


// STORAGE

// JSON

//OA 1Y2 + W