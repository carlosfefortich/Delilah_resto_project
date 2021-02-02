const express = require ('express');
require('dotenv').config();
require('./db');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();



app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.listen(PORT, ()=>{
    console.log('Server running at port ' + PORT);
})