import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockOrderModel } from 'src/app/2 - core/domain/models/stock-order.model';
import { StockTradeModel } from 'src/app/2 - core/domain/models/stock-trade.model';
import { StockModel } from 'src/app/2 - core/domain/models/stock.model';
import { UserPositionModel } from 'src/app/2 - core/domain/models/user-position.model';
import { StockTradeModalComponent } from '../stock-trade-modal/stock-trade-modal.component';

@Component({
  selector: 'app-stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.scss']
})
export class StockDescriptionComponent implements OnInit {

  @Input() userPosition!: UserPositionModel;
  @Input() stock: StockModel = new StockModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openStockTradeDialog(stock: StockModel): void {
    let stockTradeModel = new StockTradeModel();
    stockTradeModel.userPosition = this.userPosition;
    stockTradeModel.stock = stock;

    const dialogRef = this.dialog.open(StockTradeModalComponent, {
      autoFocus: true,
      disableClose: true,
      data: stockTradeModel
    });
  }

}
