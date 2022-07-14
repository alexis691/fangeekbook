import { Router } from "express";
import MiddlewareValidator from '../utils/validators';
import UserTypeController from "../controllers/user-type.controller";
import CatalogueValidator from "../utils/catalogue-validator";

const router = Router();

//Index route
router.get(
    '/',
    UserTypeController.getAll
)

//View route
router.get(
    '/:id',
    CatalogueValidator.checkGet(),              //Valitade my validations :v
    MiddlewareValidator.handleValidationError,  //If there is not erro, execute net function
    UserTypeController.get
)

//Create route
router.post(
    '/',
    CatalogueValidator.checkCreate(),
    MiddlewareValidator.handleValidationError,
    UserTypeController.create
)

//Update route
router.put(
    '/:id',
    CatalogueValidator.checkUpdate(),
    MiddlewareValidator.handleValidationError,
    UserTypeController.update
)

//Delete route
router.delete(
    '/:id',
    CatalogueValidator.checkDelete(),
    MiddlewareValidator.handleValidationError,
    UserTypeController.delete
)

export default router;