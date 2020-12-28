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
import { LogFormComponent } from './log-form/log-form.component';
import { LogListComponent } from './log-list/log-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { LogDeleteComponent } from './log-delete/log-delete.component';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
    { path: '', component: LogListComponent }
];
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [HttpClient, DatePipe],
    exports: [RouterModule],
    declarations: [
        LogDeleteComponent,
        LogListComponent, 
        LogFormComponent,
    ],
})
export class LogListModule {}