// Requerimiento 1: Crear las clases representadas en el diagrama implementando la herencia indicada.
class Animal {
    constructor(name, edad, img, comentarios, sonido) {
        this.name = name;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }
}


// Selecciona el botón por su ID
let btnRegistrar = document.getElementById('btnRegistrar');

// Asigna un evento de clic al botón
btnRegistrar.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página al hacer clic en el botón

    // Aquí va el código que se ejecutará cuando se haga clic en el botón
    let name = document.getElementById('name').value; // Obtener el nombre del animal
    let edad = document.getElementById('edad').value; // Obtener la edad del animal
    let img; // Aquí es donde se debe corregir. Deberías tener un mapeo entre el nombre del animal y la imagen que corresponde.
    let comentarios = document.getElementById('comentarios').value; // Obtener los comentarios del animal
    let sonido; // Aquí es donde se debe corregir. Deberías tener un mapeo entre el nombre del animal y el sonido que emite.

    // Mapeo entre el nombre del animal y el sonido que emite
    switch (name) {
        case 'Leon':
            sonido = 'Rugido';
            img = 'Leon';
            break;
        case 'Lobo':
            sonido = 'Aullido';
            img = 'Lobo';
            break;
        case 'Oso':
            sonido = 'Grunido';
            img = 'Oso';
            break;
        case 'Serpiente':
            sonido = 'Siseo';
            img = 'Serpiente';
            break;
        case 'Aguila':
            sonido = 'Chillido';
            img = 'Aguila';
            break;
        default:
            sonido = '';
            img = '';
    }

    img = `./assets/imgs/${img}.jpg`; // Obtener la imagen del animal. Ahora todas las imágenes son .jpg
    sonido = `./assets/sounds/${sonido}.mp3`; // Obtener el sonido del animal

    // Requerimiento 2: Crear las instancias de las clases utilizando los datos del formulario.
    // Crear una instancia de la clase Animal
    let animal = new Animal(name, edad, img, comentarios, sonido);

    // AGREGA DATOS A TABLAS
    // Requerimiento 6: Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.
    addAnimalToTable(animal, 'tablaAnimales'); // Agregar a la tabla de animales en investigación
    addAnimalToTable(animal, 'Animales'); // Agregar a la tabla dinámica

    // Muestra la imagen en la tabla de registro
    let preview = document.getElementById('preview');
    // Limpia el contenido anterior
    preview.innerHTML = '';
    let imgPreview = document.createElement('img');
    imgPreview.src = animal.img;
    preview.appendChild(imgPreview);

    // Requerimiento 8: Devolver el formulario en un estado inicial luego de registrar a cada animal.
    event.target.form.reset();
});


// Función para agregar un animal a la tabla
function addAnimalToTable(animal, tableId) {    
    // Obtiene el contenedor de animales por su ID
    let div = document.getElementById(tableId);

    // Crea un nuevo div para contener la imagen y el audio
    let animalDiv = document.createElement('div');

    // Crea un nuevo elemento de imagen
    let img = document.createElement('img');

    // Establece el atributo src de la imagen para mostrar la imagen del animal
    img.src = animal.img;

    // Establece el atributo alt de la imagen
    img.alt = `Imagen de ${animal.name}`;

    // Agrega un evento de clic a la imagen para abrir la ventana modal con los detalles del animal
    img.onclick = function() {
      abrirModal(animal);
    };    

    // Crea un nuevo elemento de audio
    let audio = document.createElement('audio');

    // Establece el atributo src del audio para reproducir el sonido del animal
    audio.src = animal.sonido;

    // Agrega controles al elemento de audio
    audio.controls = true;

    // Agrega la imagen y el audio al div del animal
    animalDiv.appendChild(img);
    animalDiv.appendChild(audio);

    // Agrega el div del animal al contenedor de animales
    div.appendChild(animalDiv);
}

// Requerimiento 10: Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen.
// Función para abrir la ventana modal
function abrirModal(animal) {
    let modal = document.getElementById('myModal');
    let contenido = modal.querySelector('.modal-body');
    contenido.innerHTML = `<h2>${animal.name}</h2>
                         <p>Edad: ${animal.edad}</p>
                         <p>Comentarios: ${animal.comentarios}</p>
                         <img src="${animal.img}" alt="Imagen de ${animal.name}">
                         <audio src="${animal.sonido}" controls></audio>`;
    modal.style.display = 'block';
    modal.onclick = function(evento) {
      if (evento.target == modal) {
        modal.style.display = 'none';
      }
    };

    // Event listener para cerrar la ventana modal al hacer clic en la "X"
    let closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Requerimiento 9: Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web. (Opcional)
function reproducirSonido(animal) {
    let audio = new Audio(animal.sonido);
    audio.play();
}

// Requerimiento 7: Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. (Opcional)
function validarDatosAnimal(name, edad, comentarios) {
    if (!name || !edad || !comentarios) {
        return false; // Datos incompletos
    }
    return true; // Datos completos
}







// Requerimiento 4: Realizar por lo menos una función autoejecutable IIFE. (1 Punto)
// Requerimiento 5: Dividir el código en módulos
// IMPORT FUNCION AUTOEJECUTABLE
import autoejecutable from './autoejecutable.js';

//IMPORT VIDEOS
// Importar las instancias de los reproductores desde videos.js
import { lobo, leon, serpiente, oso, aguila } from './videos.js';
// Exportar las instancias de los reproductores
export { lobo, leon, serpiente, oso, aguila };

// IMPORT ERROR
// Requerimiento 3: Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales. (1 Punto)
import { manejoDeErrores } from './error.js';
// IMPORT PROMESA
import { obtenerImagenesDeAnimales } from './promesa.js';

(async function() {
    try {
        const data = await manejoDeErrores();
        console.log('Datos de imágenes de animales:', data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
// IMPORT TABLA-DINAMICA
import crearTablaDinamica from './tabla-dinamica.js';
// Define una lista de nombres únicos de animales
const nombresDeAnimales = ['León', 'Lobo', 'Oso', 'Serpiente', 'Águila'];
// Llama a la función para crear la tabla dinámica
crearTablaDinamica(nombresDeAnimales);

// IMPORT CALLBACK
// Importamos la función desde el módulo callback.js
const obtenerSonidoAnimal = require('./callback');
// Creamos una función para registrar a un animal y mostrar su sonido
const registrarAnimal = (animal) => {
    console.log(`Registrando ${animal}...`);
    // Llamamos a la función obtenerSonidoAnimal y le pasamos una función de callback para manejar el sonido
    obtenerSonidoAnimal(animal, (sonido) => {
        console.log(`El sonido de ${animal} es: ${sonido}`);
    });
};
// Probamos la función registrarAnimal con diferentes animales
registrarAnimal("perro");
registrarAnimal("gato");
registrarAnimal("pájaro");
registrarAnimal("elefante"); // Este animal no está en nuestra base de datos, debería mostrar "No se encontró el sonido del animal"



