const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const BodyParser = require('./middlewares/bodyParser');
dotenv.config();

const port = process.env.APP_PORT;

BodyParser.init(app);
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})