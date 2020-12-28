import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/2 - core/application/services/crud.service';
import { LoginService } from 'src/app/2 - core/application/services/login.service';
import { GetPaginatedResponseModel } from 'src/app/2 - core/domain/models/getpaginatedresponse.model';

@Component({
  selector: 'app-crud-list',
  template: ''
})
export class CrudListComponent<T> implements OnInit {

  pageNumber : number = 1;
  pageSize : number = 10;
  length: number = 0;

  public filter: any;

  public pageSizeOptions: number[] = [5, 10, 25, 100];

  public displayedColumns: string[] = []
  public dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);

  constructor(
    public dialog: MatDialog,
    public loginService: LoginService,
    public crudService: CrudService<T>
  ){  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.crudService.GetPaginated(this.filter, this.pageNumber, this.pageSize).subscribe((r: GetPaginatedResponseModel<T>) => {
      this.dataSource.data = r.obj;
      this.length = r.count;
    });
  }

  getServerData(event: any): void {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getAll();
  }

  sortData(event: any): void {
    this.filter.order = event.active;
    this.filter.direction = event.direction;
    this.getAll();
  }
}
