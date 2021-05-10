import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/2 - core/application/services/bank.service';
import { UserPositionModel } from 'src/app/2 - core/domain/models/user-position.model';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {

  userPosition!: UserPositionModel;

  userBalanceTotal: number = 0;

  constructor(private bankService: BankService) { }

  ngOnInit() {
    let userPositionObservable = this.bankService.getUserPosition();

    userPositionObservable.subscribe(res => {
      this.userPosition = res;
      this.userBalanceTotal = this.calculateUserBalanceTotal(res);
    }, err => alert(err));
  }

  private calculateUserBalanceTotal(userPosition: UserPositionModel): number {
    let total = userPosition.account.balanceInBrl;
    userPosition.stocks.forEach(s => {
      total += s.quantity * s.currentPrice;
    });
    return total;
  }

}
