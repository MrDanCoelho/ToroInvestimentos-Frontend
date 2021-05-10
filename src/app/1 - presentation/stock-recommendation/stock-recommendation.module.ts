import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StockRecommendationComponent } from './stock-recommendation.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/3 - infra/interceptors/auth.interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { StockDescriptionModule } from '../stock-description/stock-description.module';

const routes: Routes = [
  { path: '', component: StockRecommendationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
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
    StockRecommendationComponent
  ]
})
export class StockRecommendationModule { }
