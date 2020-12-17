import { Injectable } from "@angular/core";
import { UsuarioAdapter } from "src/app/3 - infra/adapters/usuario.adapter";
import { UsuarioModel } from "../../domain/models/usuario.model";
import { CrudService } from "./crud.service";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends CrudService<UsuarioModel> {

    constructor(public usuarioAdapter: UsuarioAdapter) {
        super(usuarioAdapter);
    }

}