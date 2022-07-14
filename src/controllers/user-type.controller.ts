import {Request, Response} from 'express';
import models from '../../models';  //All models are coming here
import { iCatalogueAttributes, iCatalogueInstance } from '../interfaces/iCatalogue';
import { sendResponse, successResponse } from '../utils/responses';

class UserTypeController {

    //Function to create (CREATE)
    static create = async (req: Request, res: Response) => {
        try{
            const userTypeInstance: iCatalogueInstance = await models.UserType.create({...<iCatalogueAttributes>req.body});
            return successResponse(res, 201, [userTypeInstance]);
        } catch(error: any){
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    //function to get one result (VIEW)
    static get = async (req: Request, res: Response) => {
        try{
            const userTypeInstance: iCatalogueInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id   //URL variable
                }
            })

            if(!userTypeInstance){
                return sendResponse(res, 404, 'The user type does not exists');
            }

            return successResponse(res, 200, [userTypeInstance])

        } catch(error: any){
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    //Function to get all results (INDEX)
    static getAll = async (req: Request, res: Response) => {
        try {                       //Array cause can be several results
            const userTypeInstance: Array<iCatalogueInstance> = await models.UserType.findAll({
                where: {
                    status: true
                }
            })

            if(!userTypeInstance){
                return sendResponse(res, 404, 'There is not any result');
            }

            return successResponse(res, 200, userTypeInstance);

        } catch(error: any){
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    //Function to update data (UPDATE)
    static update = async (req: Request, res: Response) => {
        try {
            const userTypeInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id  //URL variable
                }
            })

            if(!userTypeInstance){
                sendResponse(res, 404, 'The user type does not exists');
            }

            userTypeInstance.update({...<iCatalogueAttributes>req.body});
            userTypeInstance.save(); //Commit of this transaction

            return successResponse(res, 200, [userTypeInstance]);

        } catch(error: any){
            return sendResponse(res, 500, '', error.errors[0]); //Rollback of this transaction (cause is only one table)
        }
    }

     //Function to delete data (SOFT-DELETE)
     static delete = async (req: Request, res: Response) => {
        try {
            const userTypeInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id  //URL variable
                }
            })

            if(!userTypeInstance){
                sendResponse(res, 404, 'The user type trying to delete,  does not exists');
            }

            userTypeInstance.update({status: false});
            userTypeInstance.save(); //Commit of this transaction

            return successResponse(res, 200, [userTypeInstance]);

        } catch(error: any){
            return sendResponse(res, 500, '', error.errors[0]); //Rollback of this transaction (cause is only one table)
        }
    }

}

export default UserTypeController;