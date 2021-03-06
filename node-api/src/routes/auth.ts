
import {Router} from "express";
import AuthController from "../controller/AuthController";
import {checkJwt} from "../middlewares/checkJwt";

const router = Router();


//Login route
router.post("/login", AuthController.login);

router.get("/user", [checkJwt], AuthController.getUser);

//Change my password
router.post("/reset/password", [checkJwt], AuthController.changePassword);

export default router;
