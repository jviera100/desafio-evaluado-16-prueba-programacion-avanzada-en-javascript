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

// Requerimiento 2: Crear las instancias de las clases utilizando los datos del formulario.
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

    // Crear una instancia de la clase Animal
    let animal = new Animal(name, edad, img, comentarios, sonido);

    // Requerimiento 6: Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.
    addAnimalToTable(animal, 'Animales');

    // Muestra la imagen en la tabla de registro
    let preview = document.getElementById('preview');
    // Limpia el contenido anterior
    preview.innerHTML = '';
    let imgPreview = document.createElement('img');
    imgPreview.src = animal.img;
    preview.appendChild(imgPreview);

    // Requerimiento 8: Devolver el formulario en un estado inicial luego de registrar a cada animal.
    this.form.reset();
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
      openModal(animal);
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

// Requerimiento 3: Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales.
// Función asincrónica para obtener los animales de la API
async function getAnimales() {
    try { // Manejar los posibles errores con try-catch
      let respuesta = await fetch('animales.json');
      let datos = await respuesta.json();
      // datos.animales.forEach(animal => {
      //   addAnimalToTable(animal);       
      // });
    } catch (error) {
      console.error('Hubo un error:', error);
    }
}
console.log(animal);
// Requerimiento 10: Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen.
// Función para abrir la ventana modal
function abrirModal(animal) {
    let modal = document.getElementById('ejemploModal');
    let contenido = document.getElementById('modal-contenido');
    contenido.innerHTML = `<h2>${animal.nombre}</h2>
                         <p>Edad: ${animal.edad}</p>
                         <p>Comentarios: ${animal.comentarios}</p>
                         <img src="${`./assets/imgs/${animal.nombre}.jpg`}" alt="Imagen de ${animal.nombre}">
                         <audio src="${`./assets/sounds/${animal.nombre}.mp3`}" controls></audio>`;
    modal.style.display = 'block';
    modal.onclick = function(evento) {
      if (evento.target == modal) {
        modal.style.display = 'none';
      }
    };
}



// Requerimiento 7: Al cargar la página, se deben cargar los animales desde el archivo JSON.
// Requerimiento 9: Al cargar la página, se deben cargar los sonidos de los animales desde el archivo JSON.
// Llamar a la función getAnimales cuando se carga la página
window.onload = getAnimales;
