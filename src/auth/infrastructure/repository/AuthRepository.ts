import { UserRepository } from "../../domain/repository/repository";

export class AuthRepository implements UserRepository
{
    register() {
        throw new Error("Register Method not implemented.");
    }

    login() {
        throw new Error("Login Method not implemented.");
    }
}
