// Configuracion Exprees
const express = require('express')


const app = express()
const PORT = 8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuracion Base de Datos
require('./config/mongoose.config');

//Enrutamiento
const JokeRoutes = require('./routes/jokes.routes');
JokeRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

