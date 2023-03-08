const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const ProductRouter = require('./routes/ProductRouter');



const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/products', ProductRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});