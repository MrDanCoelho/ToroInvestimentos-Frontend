import { UserPositionAccountModel } from "./user-position-account.model";
import { UserPositionClientModel } from "./user-position-client.model";
import { StockModel } from "./stock.model";

export class UserPositionModel {
    client!: UserPositionClientModel;
    account!: UserPositionAccountModel;
    stocks!: StockModel[];
}