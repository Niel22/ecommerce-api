const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello world'));
app.use('/api/user', authRoute);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})