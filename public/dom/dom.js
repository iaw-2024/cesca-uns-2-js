//iterar elementos con javascript y con codigo en el front end llenar la lista agregegando contenido 
//poner la info en un json  

//cliente servidor: el servidor provee informacion y el front end la muestra. El express expone al json como una api para consumir la informacion y renderizar 
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON
    fetch("/dom/datos.json")
        .then(response => response.json())
        .then(data => {
            // Obtener el cuerpo de la tabla donde insertaremos los datos
            const tablaDatos = document.getElementById("tabla-datos").getElementsByTagName('tbody')[0];

            // Iterar sobre los datos y crear filas para cada uno
            data.forEach(dato => {
                // Crear una nueva fila de tabla
                const row = tablaDatos.insertRow();

                // Iterar sobre cada elemento del dato y crear celdas
                dato.forEach(valor => {
                    // Insertar un nuevo elemento de celda en la fila
                    const cell = row.insertCell();
                    // Insertar el valor en la celda
                    cell.textContent = valor;
                });
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
});

