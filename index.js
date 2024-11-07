const express = require('express')
const mongoose = require('mongoose');

const Product = require('./models/product.model.js');
const app = express();
const productRoutes = require('./routes/product.route.js');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/api/products',productRoutes);

app.get('/', (req, res)=>{
    res.send('Hello from Node API Server Updated!');
});


mongoose.connect('mongodb+srv://gurungnabin7890:r4ujuxrbjuobBN4i@backenddb.q5soi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB').then(()=>{
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    
}).catch(()=>{
    console.log('Connection failed!');
});