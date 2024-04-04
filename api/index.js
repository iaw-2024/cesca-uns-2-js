const express = require("express");
const app = express();
const expressApp = require("../public/express/express.js" ); // Importar la aplicación Express configurada en express.js

app.use(expressApp);

//app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));


app.use(express.static('public'));

app.get("/cliente_servidor", (req, res) => {
    res.sendFile("./public/cliente_servidor/index.html", { root: '.' });
});

app.get("/datos", (req, res) => {
    res.sendFile("./public/dom/datos.json", { root: '.' });
});




app.listen(3001, () => console.log("Server ready on port 3001."));


const datos = [
    { nombre: "Juan", edad: 30, email: "juan@example.com" },
    { nombre: "María", edad: 25, email: "maria@example.com" },
    { nombre: "Pedro", edad: 35, email: "pedro@example.com" }
];

function generarTabla(datos) {
    let tablaHTML = '<table id="tablaDatos" class="w-full bg-white shadow-md rounded-md overflow-hidden"><thead class="bg-gray-200"><tr><th scope="col" class="px-4 py-2">Nombre</th><th scope="col" class="px-4 py-2">Edad</th><th scope="col" class="px-4 py-2">Email</th></tr></thead><tbody>';
    datos.forEach(persona => {
        tablaHTML += `<tr><td>${persona.nombre}</td><td>${persona.edad}</td><td>${persona.email}</td></tr>`;
    });
    tablaHTML += '</tbody></table>';
    return tablaHTML;
}

const fs = require("fs");

app.get("/express", (req, res) => {
    const tableHTML = generarTabla(datos);
    // Leer el archivo index.html y agregar la tabla
    fs.readFile("/express/index.html", "utf8", (err, html) => {
        if (err) {
            console.error("Error al leer el archivo index.html:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }

         // Insertar la tabla en el HTML
        const modifiedHTML = html.replace("<!-- TablaDatos -->", tableHTML);

        // Enviar la respuesta con el HTML modificado
        res.send(modifiedHTML);
    });
});


module.exports=app