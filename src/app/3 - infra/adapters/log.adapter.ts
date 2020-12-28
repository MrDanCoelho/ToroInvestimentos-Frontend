import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogModel } from "src/app/2 - core/domain/models/log.model";
import { environment } from "src/environments/environment";
import { CrudAdapter } from "./crud.adapter";

@Injectable({
    providedIn: 'root'
})
export abstract class LogAdapter extends CrudAdapter<LogModel> {

    private insertBatchUrl: string = `${environment.apiUrl}${environment.logInsertBatchUrl}`;

    constructor(public http: HttpClient) {
        super(http, 'log')
    }

    InsertBatch(file: File): Observable<string> {
        const formData = new FormData();
        formData.append('logFile', file, file.name);

        return this.http.post(this.insertBatchUrl, formData, { responseType: 'text' });
    }
}