import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from '../models';
dotenv.config();

const app = express();
const port = process.env.NODE_PORT || 3000; //If doesn't exist use 3000 port

app.use(cors());
app.use(express.json());
db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`Fangeekbook its running on host http://localhost:${port}`);
    })
})
