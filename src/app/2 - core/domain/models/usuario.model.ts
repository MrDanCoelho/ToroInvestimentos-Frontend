import { Escolaridade } from "../enums/escolaridade.enum";

export class UsuarioModel {
    id?: number | undefined;
    nome: string | undefined;
    sobrenome: string | undefined;
    email: string | undefined;
    dataNascimento: Date | undefined;
    escolaridade: Escolaridade = 1;
}