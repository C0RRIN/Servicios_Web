// Importa el módulo Express
const express = require('express');
// Crea una instancia de la aplicación Express
const app = express();

// Habilita el uso de JSON en las solicitudes
app.use(express.json());

// Define una ruta GET en la raíz que responde con "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Exporta la aplicación para ser utilizada en otro archivo
module.exports = app;
