import { LoginService } from "./application/services/Login/LoginService";
import { RegisterService } from "./application/services/Register/RegisterService";
import { LoginController } from "./infrastructure/controllers/login/LoginController";
import { RegisterController } from "./infrastructure/controllers/register/registerController";
import { AuthRepository } from "./infrastructure/repository/AuthRepository";

const userRepository = new AuthRepository();
const registerService = new RegisterService(userRepository);
const loginService = new LoginService(userRepository);

export const loginController = new LoginController(loginService);
export const registerController = new RegisterController(registerService);
