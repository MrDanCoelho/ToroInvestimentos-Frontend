import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo: "info" },
  { path: "info", loadChildren: () => import('./1 - presentation/info/info.module').then(m => m.InfoModule) },
  { path: "usuario/lista", loadChildren: () => import('./1 - presentation/usuario/usuario-lista/usuario-lista.module').then(m => m.UsuarioListaModule) }    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[
    Location
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
