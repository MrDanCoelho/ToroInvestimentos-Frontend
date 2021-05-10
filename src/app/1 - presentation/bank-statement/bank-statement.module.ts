import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BankStatementComponent } from './bank-statement.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/3 - infra/interceptors/auth.interceptor';
import { StockDescriptionModule } from '../stock-description/stock-description.module';

const routes: Routes = [
  { path: '', component: BankStatementComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    StockDescriptionModule,
    RouterModule.forChild(routes),
  ],
  providers: [HttpClient,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, CurrencyPipe],
  exports: [RouterModule],
  declarations: [
    BankStatementComponent
  ]
})
export class BankStatementModule { }
