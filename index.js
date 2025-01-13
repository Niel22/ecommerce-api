const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/user', authRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})