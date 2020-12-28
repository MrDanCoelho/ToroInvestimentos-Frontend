import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogAdapter } from "src/app/3 - infra/adapters/log.adapter";
import { LogModel } from "../../domain/models/log.model";
import { CrudService } from "./crud.service";

@Injectable({
    providedIn: 'root'
})
export class LogService extends CrudService<LogModel> {

    constructor(private logAdapter: LogAdapter){ 
        super(logAdapter);
    }

    InsertBatch(file: File): Observable<string> {
        return this.logAdapter.InsertBatch(file);
    }
}