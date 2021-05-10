import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BrokerAdapter } from "src/app/3 - infra/adapters/broker.adapter";
import { StockOrderModel } from "../../domain/models/stock-order.model";
import { StockModel } from "../../domain/models/stock.model";

@Injectable({
    providedIn: 'root'
})
export class BrokerService {

    constructor(private brokerAdapter : BrokerAdapter) {}

    getTrending() : Observable<StockModel[]> {
        return this.brokerAdapter.getTrending();
    }

    sendOrder(order: StockOrderModel) : Observable<void> {
        return this.brokerAdapter.sendOrder(order);
    }
}