import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CrudAdapter } from "src/app/3 - infra/adapters/crud.adapter";

export abstract class CrudService<T> {

    constructor(private crudAdapter: CrudAdapter<T>){  }

    GetAll(): Observable<T[]> {
        return this.crudAdapter.GetAll();
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