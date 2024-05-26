//OA 1Y2 -------------------------------------------------------
//CONDICIONAL + Operador
  
function verificarEdad() {
  const edadInput = document.getElementById('edad');
  const edad = parseInt(edadInput.value);

  edad > 18  ? alert ("Bienvenido, puede pasar sin problemas.") : alert ("CUIDADO, sos menor entra bajo tu propia responsabilidad.");
}

//DOM ------------------------------------------------------------------------

const recomendacion = {
  piramides: [""],
  hombreLuna: [""],
  aliens: [""],
  masones: [""],
  cupula: [""],
  fantasma [""];
}

//unción para actualizar las recomendaciones basadas en el misterio seleccionado
function actualizarRecomendacion(misterio) {
  const listaConspi = document.getElementById("lista-conspi");
  const conspi = recomendacion[misterio];

  //construir el HTML para la lista de conspi
  let listaHTML = "";
  conspi.forEach((conspi) => {
    listaHTML += `<li> ${conspi} </li>`;
  });

  //actualizar el innerHTML de la lista de conspi
  listaConspi.innerHTML = listaHTML;
}

//evento que se dispara cuando el usuario cambia el misterio seleccionado
document
  .getElementById("seleccion-conspi")
  .addEventListener("change", function (event) {
    actualizarRecomendacion(event.target.value);
  });

//OBJETOS + FUNCIONES + ARRAY --------------------------

const baseDeDatos = [
  { id: 1, nombre: 'DOCE PUERTAS', precio: 17432, imagen: './img/doce-puertas-piramides.jpg' },
  { id: 2, nombre: 'Hombre en la Luna', precio: 2500, imagen: './img/hombre-luna.jpg' },
  { id: 3, nombre: 'Aliens', precio: 4500, imagen: './img/extraterrestre.jpg' },
  { id: 4, nombre: 'Tierra plana', precio:  2341, imagen: './img/domo.jpg' },
  { id: 5, nombre: 'Fantasmas', precio: 1233, imagen: './img/fantasma.jpg'},
  { id: 6, nombre: 'Masones', precio: 453, imagen: './img/masones.jpg'},
];

let carrito = [];
let inicioCarrito = 0;

// para cargar el carrito desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  obtenerProductos().then((productos) => {
    mostrarProductos(productos);
    actualizarCarrito();
  });
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


