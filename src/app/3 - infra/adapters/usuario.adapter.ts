import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioModel } from "src/app/2 - core/domain/models/usuario.model";
import { environment } from "src/environments/environment";
import { CrudAdapter } from "./crud.adapter";

@Injectable({
    providedIn: 'root'
})
export class UsuarioAdapter extends CrudAdapter<UsuarioModel> {

    constructor(public http: HttpClient) {
        super(http);
    }

}