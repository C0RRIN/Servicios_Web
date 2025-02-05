// Importa la aplicación desde app.js
const app = require('./app');
// Define el puerto en el que se ejecutará el servidor
const port = 8000;

// Función asíncrona autoinvocada para iniciar el servidor
(async () => {
    console.log('Starting Server...');
    
    // Inicia el servidor y lo escucha en el puerto definido
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

})();
