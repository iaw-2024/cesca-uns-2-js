
document.addEventListener("DOMContentLoaded", function() {
    const tablaBody = document.getElementById("datosBody");
    
    fetch('/datos')
    .then(response => response.json())
        .then(data => {
             // Obtener el cuerpo de la tabla donde insertaremos los datoss
             const tablaDatos = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];

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
            console.error("Error al obtener los datos:", error);
        });
});