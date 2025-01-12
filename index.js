const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})