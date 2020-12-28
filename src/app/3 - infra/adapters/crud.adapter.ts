import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetPaginatedResponseModel } from "src/app/2 - core/domain/models/getpaginatedresponse.model";
import { environment } from "src/environments/environment";

export abstract class CrudAdapter<T> {
    getAllUrl : string;
    getPaginated: string;
    insertUrl : string;
    updateUrl : string;
    deleteUrl : string;

    constructor(public http: HttpClient, url: string) {
        this.getAllUrl = `${environment.apiUrl}${environment.crudUrl.get(url)?.getAll}`;
        this.getPaginated = `${environment.apiUrl}${environment.crudUrl.get(url)?.getPaginated}`;
        this.insertUrl = `${environment.apiUrl}${environment.crudUrl.get(url)?.insert}`;
        this.updateUrl = `${environment.apiUrl}${environment.crudUrl.get(url)?.update}`;
        this.deleteUrl = `${environment.apiUrl}${environment.crudUrl.get(url)?.delete}`;
    }

    /**
     *
     *
     * @return {*}  {Observable<T[]>}
     * @memberof CrudAdapter
     */
    GetAll(): Observable<T[]> {
        return this.http.get<T[]>(this.getAllUrl);
    }

    GetPaginated(filter: any, pageNumber: number, pageSize: number): Observable<GetPaginatedResponseModel<T>> {
        let url: string = `${this.getPaginated}/${pageNumber}/${pageSize}`;
        return this.http.post<GetPaginatedResponseModel<T>>(`${this.getPaginated}/${pageNumber}/${pageSize}`, filter)
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