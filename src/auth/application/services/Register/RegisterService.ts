import { UserRepository } from "../../../domain/repository/repository";

export class RegisterService
{
    constructor(private readonly authRepository: UserRepository) {}

    run(){
        const register = this.authRepository.register();

        return 'registerService';
    }
}
