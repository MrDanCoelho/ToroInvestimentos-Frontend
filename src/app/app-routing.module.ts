import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './1 - presentation/account/logout/logout.component';
import { AuthGuardService } from './2 - core/application/services/authguard.service';

const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo: "manage/log" },
  { path: "login", loadChildren: () => import('./1 - presentation/account/login/login.module').then(m => m.LoginModule) },
  { path: "logout", component: LogoutComponent },
  { path: "manage/log", loadChildren: () => import('./1 - presentation/log/log.module').then(m => m.LogListModule), canActivate: [AuthGuardService] }    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[
    Location
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
