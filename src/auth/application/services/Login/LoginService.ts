import { UserRepository } from "../../../domain/repository/repository";

export class LoginService
{
    constructor(private readonly authRepository: UserRepository) {}

    run(){
        const login = this.authRepository.login();

        return 'loginService';
    }
}
