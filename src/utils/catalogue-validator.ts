import { body, param } from "express-validator"

class CatalogueValidator{
    //To validate create function
    checkCreate(){
        return [
            body('description')
            .notEmpty()
            .withMessage('Description is madatory')
        ]
    }

    //To validate get one function
    checkGet(){
        return [
            param('id')
            .notEmpty()
            .withMessage('The ID is required')
            .isInt()
            .withMessage('ID must be integer')
        ]
    }

    //To validate update function
    checkUpdate(){
        return [
            param('id')
            .notEmpty()
            .withMessage('The ID is required')
            .isInt()
            .withMessage('ID must be integer'),
            body('description')
            .notEmpty()
            .withMessage('Description is mandatory')
        ]
    }

    //To validate delete function
    checkDelete(){
        return [
            param('id')
            .notEmpty()
            .withMessage('The ID is required')
            .isInt()
            .withMessage('ID must be integer')
        ]
    }

}

export default new  CatalogueValidator();