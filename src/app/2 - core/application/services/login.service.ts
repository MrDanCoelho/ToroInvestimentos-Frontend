import { Injectable } from "@angular/core";
import { LoginAdapter } from "src/app/3 - infra/adapters/login.adapter";
import { AuthModel } from "../../domain/models/auth.model";
import { UserModel } from "../../domain/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private loginAdapter : LoginAdapter) {}

    async login(auth : AuthModel) : Promise<void> {
        auth.ipAddress = await this.loginAdapter.getIpAddress().toPromise();
        let user = await this.loginAdapter.login(auth).toPromise();
        this.storeUser(user);      
    }

    getLoggedUser(): UserModel | null {
        return JSON.parse(localStorage.getItem("user_data") || "null");
    }

    logout(): void {
        localStorage.removeItem("user_data");
    }

    storeUser(user: UserModel): void {
        localStorage.setItem("user_data", JSON.stringify(user));
    }
}