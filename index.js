
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();

const productosRoutes = require ('./rutas/productos');

// settings 

app.set('json spaces', 4);

// middleware 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes

app.use('/products', productosRoutes);

// start server

app.listen(3000, () => {
    console.log('Server Port 3000')
})