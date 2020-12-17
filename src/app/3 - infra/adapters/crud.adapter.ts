import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class CrudAdapter<T> {
    private getAllUrl = `${environment.apiUrl}${environment.usuarioUrl.getAll}`;
    private insertUrl = `${environment.apiUrl}${environment.usuarioUrl.insert}`;
    private updateUrl = `${environment.apiUrl}${environment.usuarioUrl.update}`;
    private deleteUrl = `${environment.apiUrl}${environment.usuarioUrl.delete}`;

    constructor(public http: HttpClient){}

    /**
     *
     *
     * @return {*}  {Observable<T[]>}
     * @memberof CrudAdapter
     */
    GetAll(): Observable<T[]> {
        return this.http.get<T[]>(this.getAllUrl);
    }

    /**
     *
     *
     * @param {T} obj
     * @return {*}  {Observable<any>}
     * @memberof CrudAdapter
     */
    Insert(obj: T): Observable<any> {
        return this.http.post(this.insertUrl, obj, { responseType: 'text' });
    }

    /**
     *
     *
     * @param {T} obj
     * @return {*}  {Observable<any>}
     * @memberof CrudAdapter
     */
    Update(obj: T): Observable<any> {
        return this.http.put(this.updateUrl, obj, { responseType: 'text' });
    }

    Delete(id: number): Observable<any> {
        return this.http.delete(`${this.deleteUrl}/${id}`, { responseType: 'text' });
    }
}