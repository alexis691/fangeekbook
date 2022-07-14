import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from '../models';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './utils/swaggerOptions';
dotenv.config();

const app = express();
const port = process.env.NODE_PORT || 3000; //If doesn't exist use 3000 port
const swaggerSpecs = swaggerJsDoc(options);

app.use(cors());
app.use(express.json());

//Handle routes
app.use('/fgb/api/v1', routes);     //https:localhost:3001/fgb/api/v1/"routes"
app.use('/fgb/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`Fangeekbook its running on host http://localhost:${port}`);
    })
})
