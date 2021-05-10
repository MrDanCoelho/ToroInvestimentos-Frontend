import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserPositionModel } from "src/app/2 - core/domain/models/user-position.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BankAdapter {

    readonly getUserPositionURL = `${environment.apiUrl}${environment.bankUrl.getUserPosition}`;

    constructor(private http: HttpClient) { }

    getUserPosition() : Observable<UserPositionModel> {
        return this.http.get<UserPositionModel>(this.getUserPositionURL);
    }
}