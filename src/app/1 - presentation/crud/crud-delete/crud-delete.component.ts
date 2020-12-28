import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/2 - core/application/services/crud.service';
import { CrudFormComponent } from '../crud-form/crud-form.component';

@Component({
  selector: 'app-crud-delete',
  template: ''
})
export class CrudDeleteComponent<T> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrudFormComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private crudService: CrudService<T>
    ) { }

  ngOnInit(): void {
  }

  async delete(data: number) {
    await this.crudService.Delete(data).subscribe(() => this.SuccessRequest());
  }

  private SuccessRequest() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      alert("Deleted with success!");
    });
  }

}
