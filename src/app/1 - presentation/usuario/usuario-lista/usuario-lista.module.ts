import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UsuarioDeleteComponent } from '../usuario-delete/usuario-delete.component';

const routes: Routes = [
    { path: '', component: UsuarioListaComponent }
];
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSelectModule,
        MatTableModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [HttpClient, DatePipe],
    exports: [RouterModule],
    declarations: [
        UsuarioDeleteComponent,
        UsuarioListaComponent, 
        UsuarioFormComponent,
    ],
})
export class UsuarioListaModule {}