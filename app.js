const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

// connect database
const { connectDB } = require('./config/database');
connectDB();

const {
    getCourses
} = require('./controllers/course.controller');

const PORT = process.env.PORT;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));