const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configurar body-parser para analizar las solicitudes en formato JSON
app.use(bodyParser.json());

// Definir las rutas y controladores de tu API REST
// Ejemplo:
app.get('/saludar', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/despedir', (req, res) => {
    res.send('¡Chau, mundo!');
  });

  app.get('/perfil', (req, res) => {
    res.send('¡Mi nombre es Joaquin!');
  });

// Arrancar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

