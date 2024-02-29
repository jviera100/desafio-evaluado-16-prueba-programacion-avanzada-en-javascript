// Define la función para crear la tabla dinámica
function crearTablaDinamica(nombresDeAnimales) {
    // Crea el contenedor para la tabla
    const containerTabla = document.querySelector('.container');

    // Crea el título de la tabla
    const tituloTabla = document.createElement('h1');
    tituloTabla.textContent = 'Tabla de Investigadores de Animales';

    // Inserta el título en el contenedor
    containerTabla.appendChild(tituloTabla);

    // Crea el campo de búsqueda
    const inputBusqueda = document.createElement('input');
    inputBusqueda.type = 'text';
    inputBusqueda.placeholder = 'Buscar...';

    // Inserta el campo de búsqueda en el contenedor
    containerTabla.appendChild(inputBusqueda);

    // Crea el filtro desplegable
    const filtroNombreSelect = document.createElement('select');
    filtroNombreSelect.id = 'filtroNombre';

    // Agrega una opción predeterminada para mostrar todos los animales
    const optionTodos = document.createElement('option');
    optionTodos.value = 'todos';
    optionTodos.textContent = 'Todos';
    filtroNombreSelect.appendChild(optionTodos);

    // Agrega las opciones de filtrado por nombre de animal
    nombresDeAnimales.forEach(nombre => {
        const option = document.createElement('option');
        option.value = nombre.toLowerCase();
        option.textContent = nombre;
        filtroNombreSelect.appendChild(option);
    });

    // Inserta el filtro desplegable en el contenedor
    containerTabla.appendChild(filtroNombreSelect);

    // Crea la tabla
    const tablaAnimales = document.createElement('table');
    tablaAnimales.id = 'tablaAnimales';

    // Crea el encabezado de la tabla
    const thead = document.createElement('thead');
    const trHeader = document.createElement('tr');
    const thNombre = document.createElement('th');
    thNombre.textContent = 'Nombre';
    const thFechaRegistro = document.createElement('th');
    thFechaRegistro.textContent = 'Fecha de Registro';
    const thInvestigador = document.createElement('th');
    thInvestigador.textContent = 'Investigador';
    trHeader.appendChild(thNombre);
    trHeader.appendChild(thFechaRegistro);
    trHeader.appendChild(thInvestigador);
    thead.appendChild(trHeader);

    // Crea el cuerpo de la tabla
    const tbody = document.createElement('tbody');

    // Llena la tabla con la información de los animales
    nombresDeAnimales.forEach(nombre => {
        const tr = document.createElement('tr');

        // Columna para el nombre del animal
        const tdNombre = document.createElement('td');
        tdNombre.textContent = nombre;
        tr.appendChild(tdNombre);

        // Columna para la fecha de registro (ejemplo)
        const tdFechaRegistro = document.createElement('td');
        const inputFechaRegistro = document.createElement('input');
        inputFechaRegistro.type = 'text'; // Puedes cambiar el tipo de input según tus necesidades
        tdFechaRegistro.appendChild(inputFechaRegistro);
        tr.appendChild(tdFechaRegistro);

        // Columna para el investigador a cargo (ejemplo)
        const tdInvestigador = document.createElement('td');
        const inputInvestigador = document.createElement('input');
        inputInvestigador.type = 'text'; // Puedes cambiar el tipo de input según tus necesidades
        tdInvestigador.appendChild(inputInvestigador);
        tr.appendChild(tdInvestigador);

        tbody.appendChild(tr);
    });

    // Inserta el encabezado y el cuerpo en la tabla
    tablaAnimales.appendChild(thead);
    tablaAnimales.appendChild(tbody);

    // Inserta la tabla en el contenedor
    containerTabla.appendChild(tablaAnimales);

    // Escucha los cambios en el filtro desplegable y filtra las filas de la tabla
    filtroNombreSelect.addEventListener('change', function() {
        const nombreSeleccionado = this.value.toLowerCase();

        const filasAnimales = document.querySelectorAll('#tablaAnimales tbody tr');

        filasAnimales.forEach(fila => {
            const nombreAnimal = fila.querySelector('td:nth-child(1)').textContent.toLowerCase();

            if (nombreSeleccionado === 'todos' || nombreAnimal === nombreSeleccionado) {
                fila.style.display = 'table-row';
            } else {
                fila.style.display = 'none';
            }
        });
    });

    // Escucha los cambios en el campo de búsqueda y filtra las filas de la tabla
    inputBusqueda.addEventListener('input', function() {
        const textoBusqueda = this.value.trim().toLowerCase();

        const filasAnimales = document.querySelectorAll('#tablaAnimales tbody tr');

        filasAnimales.forEach(fila => {
            const nombreAnimal = fila.querySelector('td:nth-child(1)').textContent.toLowerCase();

            if (nombreAnimal.includes(textoBusqueda)) {
                fila.style.display = 'table-row';
            } else {
                fila.style.display = 'none';
            }
        });
    });
}

// Exporta la función para crear la tabla dinámica
export default crearTablaDinamica;
