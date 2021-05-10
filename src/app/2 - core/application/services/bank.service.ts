import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BankAdapter } from "src/app/3 - infra/adapters/bank.adapter";
import { UserPositionModel } from "../../domain/models/user-position.model";

@Injectable({
    providedIn: 'root'
})
export class BankService {

    constructor(private bankAdapter : BankAdapter) {}

    getUserPosition() : Observable<UserPositionModel> {
        return this.bankAdapter.getUserPosition();
    }
}