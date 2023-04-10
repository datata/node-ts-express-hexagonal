import { Request, Response } from "express";
import { LoginService } from "../../../application/services/Login/LoginService";

export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    run(req: Request, res: Response) {
        try {
            const loginService1 = this.loginService.run()

            return res.send(loginService1);
        } catch (error: any) {
            return res.status(500).send(error.message);
        }
    }
}
