import {Router, Request, Response} from "express";
import auth from "./auth";
import user from "./user";
import UserController from "../controller/UserController";

const routes = Router();


routes.use("/api/auth", auth);
routes.use("/api/user", user);

routes.get("/api/users", UserController.listAll);
routes.get("/api/users/map", UserController.listAllWithMap);


routes.use("/api", (req: Request, res: Response) => {
    return res.status(200).send({
        "status": 200, "message": "Welcom to stein api"
    });
});


export default routes;
