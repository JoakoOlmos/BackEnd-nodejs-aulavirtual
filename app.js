const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const app = express();

// Configurar body-parser para analizar las solicitudes en formato JSON
app.use(bodyParser.json());
app.use(cors());
let perfil = {
  nombre: 'Joaquin',
  edad: 26,
  apellido: 'Olmos',
  trabajando: true,
  telefonos: {
      movil: 35165156,
      fijo: 5646546,
  }
}
// Definir las rutas y controladores de tu API REST
// Ejemplo:
app.get('/saludar', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/despedir', (req, res) => {
    res.send('¡Chau, mundo!');
  });

  app.get('/perfil', (req, res) => {
    res.send(perfil);
  });

  app.put('/perfil', (req, res) => {
    perfil = req.body;
    res.send ('El usuario se ha modificado correctamente.')
  });
// Arrancar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

