import {Router} from 'express'
import userTypes from './user-type.routes'

const routes = Router();

routes.use('/user-types', userTypes); //To handle all routes who are in localhost/user-types

export default routes;
