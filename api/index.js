const express = require("express");
const app = express();
const path = require('path');
const expressApp = require(path.resolve(__dirname, '../src/express.js' ) ); // Importar la aplicación Express configurada en express.js

app.use(expressApp);

//app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));


app.use(express.static('public'));

app.get("/cliente_servidor", (req, res) => {
    res.sendFile("/public/cliente_servidor/index.html", { root: '.' });
});

app.get("/datos", (req, res) => {
    res.sendFile("./public/dom/datos.json", { root: '.' });
});




app.listen(3001, () => console.log("Server ready on port 3001."));




module.exports=app