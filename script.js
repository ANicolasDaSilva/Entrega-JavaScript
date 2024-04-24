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

function sumar (num1, num2) {
    return  num1 + num2;
}

let resultado = sumar (num1, num2);
console.log(resultado);
alert("El resultado es: " + resultado);
