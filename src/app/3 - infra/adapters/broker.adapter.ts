import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StockOrderModel } from "src/app/2 - core/domain/models/stock-order.model";
import { StockModel } from "src/app/2 - core/domain/models/stock.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BrokerAdapter {

    readonly getTrendingURL = `${environment.apiUrl}${environment.brokerUrl.getTrending}`;
    readonly sendOrderURL = `${environment.apiUrl}${environment.brokerUrl.sendOrder}`;

    constructor(private http: HttpClient) { }

    getTrending() : Observable<StockModel[]> {
        return this.http.get<StockModel[]>(this.getTrendingURL);
    }

    sendOrder(order: StockOrderModel) : Observable<void> {
        return this.http.post<void>(this.sendOrderURL, order);
    }
}