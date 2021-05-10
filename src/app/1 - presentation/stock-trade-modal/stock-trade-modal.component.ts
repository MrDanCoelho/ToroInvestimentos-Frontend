import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrokerService } from 'src/app/2 - core/application/services/broker.service';
import { StockOrderModel } from 'src/app/2 - core/domain/models/stock-order.model';
import { StockTradeModel } from 'src/app/2 - core/domain/models/stock-trade.model';

@Component({
  selector: 'app-stock-trade-modal',
  templateUrl: './stock-trade-modal.component.html',
  styleUrls: ['./stock-trade-modal.component.scss']
})
export class StockTradeModalComponent implements OnInit {

  success: Boolean = false;
  error: Boolean = false;
  httpMessage!: string;

  form: FormGroup = new FormGroup({
    amount: new FormControl(0),
    balance: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: StockTradeModel, private brokerService: BrokerService) { }

  ngOnInit() {
  }

  submitOrder(): void {
    this.form.clearValidators();

    let amount = parseInt(this.form.controls.amount.value);

    if (!this.validAmount(amount)){
      this.form.controls.amount.setErrors({"Quantidade de venda maior que quantidade disponível": true});
      return;
    }

    if (!this.validBalance(amount * this.data.stock.currentPrice)){
      this.form.controls.balance.setErrors({"Saldo insuficiente para compra": true});
      return;
    }

    let order = new StockOrderModel();
    order.symbol = this.data.stock.symbol;
    order.amount = amount;

    let sendOrderObservable = this.brokerService.sendOrder(order);
    sendOrderObservable.subscribe(() => this.showSuccess(), err => this.showError(err));
  }

  showSuccess(): void {
    let amount = parseInt(this.form.controls.amount.value);
    this.data.stock.quantity += amount;
    this.data.userPosition.account.balanceInBrl -= amount * this.data.stock.currentPrice;

    this.success = true;
    this.httpMessage = "Ordem concluída com êxito"
  }

  showError(err: any): void {
    this.error = true;
    this.httpMessage = err;
  }

  validAmount(amount: number): Boolean {
    if(this.data.stock.quantity === undefined && amount > 0) {
      return false;
    }

    let newQuantity = this.data.stock.quantity + amount;

    if(newQuantity < 0) {
      return false;
    }

    return true;
  }

  validBalance(price: number): Boolean {
    let balance = this.data.userPosition.account.balanceInBrl;

    if(price > balance) {
      return false;
    }

    return true;
  }

}
