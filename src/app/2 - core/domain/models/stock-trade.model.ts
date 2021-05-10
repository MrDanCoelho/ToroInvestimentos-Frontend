import { StockModel } from "./stock.model";
import { UserPositionModel } from "./user-position.model";

export class StockTradeModel {
    userPosition!: UserPositionModel;
    stock!: StockModel;
}