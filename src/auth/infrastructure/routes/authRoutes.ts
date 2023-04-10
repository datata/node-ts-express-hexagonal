import { Request, Response, Router } from "express";
import { loginController, registerController } from "../../dependencies";

const router = Router();

router.get('/register', registerController.run.bind(registerController));
router.get('/login', loginController.run.bind(loginController));

export { router };
