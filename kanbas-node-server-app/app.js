import express from 'express';
import Hello from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js"; // Update the import path to match the correct casing
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => { res.send("Welcome to Full Stack Development!") })
CourseRoutes(app);
Lab5(app)
Hello(app)
app.listen(4000)