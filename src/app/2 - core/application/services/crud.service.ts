import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CrudAdapter } from "src/app/3 - infra/adapters/crud.adapter";
import { GetPaginatedResponseModel } from "../../domain/models/getpaginatedresponse.model";

@Injectable({
    providedIn: 'root'
})
export abstract class CrudService<T> {

    constructor(private crudAdapter: CrudAdapter<T>){  }

    GetAll(): Observable<T[]> {
        return this.crudAdapter.GetAll();
    }

    GetPaginated(filter: any, pageNumber: number, pageSize: number): Observable<GetPaginatedResponseModel<T>> {
        return this.crudAdapter.GetPaginated(filter, pageNumber, pageSize);
    }

    Insert(form: T): Observable<any> {
        return this.crudAdapter.Insert(form);
    }

    Update(form: T): Observable<any> {
        return this.crudAdapter.Update(form);
    }

    Delete(id: number): Observable<any> {
        return this.crudAdapter.Delete(id);
    }
}