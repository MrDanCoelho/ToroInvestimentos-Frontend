import { Component, Input, OnInit } from '@angular/core';
import { BankService } from 'src/app/2 - core/application/services/bank.service';
import { BrokerService } from 'src/app/2 - core/application/services/broker.service';
import { StockModel } from 'src/app/2 - core/domain/models/stock.model';
import { UserPositionModel } from 'src/app/2 - core/domain/models/user-position.model';

@Component({
  selector: 'app-stock-recommendation',
  templateUrl: './stock-recommendation.component.html',
  styleUrls: ['./stock-recommendation.component.scss']
})
export class StockRecommendationComponent implements OnInit {

  stocks: StockModel[] = [];
  userPosition!: UserPositionModel;

  constructor(private bankService: BankService, private brokerService: BrokerService) { }

  ngOnInit() {
    let userPositionObservable = this.bankService.getUserPosition();

    userPositionObservable.subscribe(res => this.userPosition = res, err => alert(err));

    let stocksObservable = this.brokerService.getTrending();

    stocksObservable.subscribe(res => this.stocks = res, err => alert(err));
  }

}
