const express = require('express');
const app = express();
const PORT = 3000;

// Sirve los archivos estáticos
app.use(express.static('public'));

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://lulylandia:${PORT}`);
});