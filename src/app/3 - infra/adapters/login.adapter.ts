import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthModel } from "src/app/2 - core/domain/models/auth.model";
import { UserModel } from "src/app/2 - core/domain/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginAdapter {

    private loginUrl = `${environment.apiUrl}${environment.accountUrl.login}`;

    constructor(private http: HttpClient) { }

    getIpAddress() : Observable<string> {
        return this.http.get("https://api.ipify.org/?format=text", { responseType : 'text' });
    }

    login(auth : AuthModel) : Observable<UserModel> {
        return this.http.post<UserModel>(this.loginUrl, auth);
    }
}