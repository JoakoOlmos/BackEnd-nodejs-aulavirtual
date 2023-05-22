const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const getUsers = require ('./services/UserService');


const app = express();

// Configurar body-parser para analizar las solicitudes en formato JSON
app.use(bodyParser.json());
app.use(cors());

// Definir las rutas y controladores de tu API REST
// Ejemplo:
app.get('/saludar', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/despedir', (req, res) => {
    res.send('¡Chau, mundo!');
  });

  app.get('/perfil', (req, res) => {
    const data = getUsers ();
    res.json (data);
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

