dotenv.config();
import express from 'express'
import {dbConnection} from './src/config/db.js';
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
import urlRouter from './src/routes/url.route.js'

dbConnection();   // dbconnection

app.use(cors());
app.use(express.json())
app.use('/youtubeb',urlRouter)

const Port = process.env.PORT || 9000;
app.listen(Port,()=>{ console.log(`Server is listening on https://localhost:${Port}`)})
