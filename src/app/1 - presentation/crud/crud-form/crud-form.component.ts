import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/2 - core/application/services/crud.service';

@Component({
  selector: 'app-crud-form',
  template: ''
})
export class CrudFormComponent<T> implements OnInit {

  public form: FormGroup = new FormGroup({ });

  constructor(
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<CrudFormComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: T | null,
    private crudService: CrudService<T>
    ) {  }

  ngOnInit(): void {
  }
}
