import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/2 - core/application/services/log.service';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';
import { CrudDeleteComponent } from '../../crud/crud-delete/crud-delete.component';
import { LogFormComponent } from '../log-form/log-form.component';

@Component({
  selector: 'app-log-delete',
  templateUrl: './log-delete.component.html',
  styleUrls: ['./log-delete.component.scss']
})
export class LogDeleteComponent extends CrudDeleteComponent<LogModel> {

  title: string = 'Delete';

  constructor(
    public dialogRef: MatDialogRef<LogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private logService: LogService
    ) {
    super(dialogRef, data, logService);
  }

  ngOnInit(): void {
  }

}
