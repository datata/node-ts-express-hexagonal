import { Request, Response } from "express";
import { RegisterService } from "../../../application/services/Register/RegisterService";

export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    run(req: Request, res: Response) {
        try {
            const register = this.registerService.run();

            return res.send(register);
        } catch (error: any) {
            return res.status(500).send(error.message);
        }
    }
}
