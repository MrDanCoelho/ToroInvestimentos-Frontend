import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './1 - presentation/account/logout/logout.component';
import { AuthGuardService } from './2 - core/application/services/authguard.service';

const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo: "bank/statement" },
  { path: "login", loadChildren: () => import('./1 - presentation/account/login/login.module').then(m => m.LoginModule) },
  { path: "logout", component: LogoutComponent },
  { path: "bank/statement", loadChildren: () => import('./1 - presentation/bank-statement/bank-statement.module').then(m => m.BankStatementModule), canActivate: [AuthGuardService] },
  { path: "stock/recommendation", loadChildren: () => import('./1 - presentation/stock-recommendation/stock-recommendation.module').then(m => m.StockRecommendationModule), canActivate: [AuthGuardService] },  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[
    Location
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
