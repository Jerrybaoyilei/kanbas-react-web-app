import express from 'express';
import Hello from './hello.js';
import Lab5 from './lab5.js';
import cors from "cors";

const app = express();
app.use(cors());
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => { res.send("Welcome to Full Stack Development!") })
Lab5(app)
Hello(app)
app.listen(4000)