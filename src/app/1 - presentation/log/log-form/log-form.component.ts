import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/2 - core/application/services/log.service';
import { Escolaridade } from 'src/app/2 - core/domain/enums/escolaridade.enum';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';
import { CrudFormComponent } from '../../crud/crud-form/crud-form.component';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent extends CrudFormComponent<LogModel> {

  title: string = 'Edit';

  constructor(
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<LogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LogModel | null,
    private logService: LogService
    ) {
      super(datepipe, dialogRef, data, logService);

      this.form = new FormGroup({
        id: new FormControl(0),
        ip: new FormControl('', [Validators.required]),
        app: new FormControl(''),
        user: new FormControl(''),
        date: new FormControl('1990-01-01T01:00:00', [Validators.required]),
        requestType: new FormControl('', [Validators.required]),
        requestUrl: new FormControl('', [Validators.required]),
        requestProtocol: new FormControl('', [Validators.required]),
        statusCode: new FormControl(null, [Validators.required]),
        contentSize: new FormControl(''),
        responseUrl: new FormControl(''),
        userAgent: new FormControl(''),
      });

      if (data != null) {
        this.form.setValue(data);
        // console.log(data.date);
        // this.form.controls.date.setValue(new Date(data.date).toISOString().slice(0, -1));
      }
    }

  ngOnInit(): void {
  }

  async submitData() {
    if (!this.form.valid){
      return alert('Form is invalid, please verify the data');
    }

    let value = new LogModel();
    value.id = Number(this.form.controls.id.value);
    value.ip = this.form.controls.ip.value;
    value.app = this.form.controls.app.value != ''? this.form.controls.app.value : null;
    value.user = this.form.controls.user.value != ''? this.form.controls.user.value : null;
    value.date = new Date(this.form.controls.date.value);
    value.requestType = this.form.controls.requestType.value;
    value.requestUrl = this.form.controls.requestUrl.value;
    value.requestProtocol = this.form.controls.requestProtocol.value;
    value.statusCode = Number(this.form.controls.statusCode.value);
    value.contentSize = this.form.controls.contentSize.value != ''? Number(this.form.controls.contentSize.value) : null;
    value.responseUrl = this.form.controls.responseUrl.value != ''? this.form.controls.responseUrl.value : null;
    value.userAgent = this.form.controls.userAgent.value != ''? this.form.controls.userAgent.value : null;

    if(this.data != null) {
      await this.logService.Update(value).subscribe(res => this.successRequest("Updated"), err => this.dialogRef.close());
    } else {
      await this.logService.Insert(value).subscribe(res => this.successRequest("Inserted"), err => this.dialogRef.close());
    }

  }

  private successRequest(action: string) {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      alert(`${action} with success`);
    });
  }
}
