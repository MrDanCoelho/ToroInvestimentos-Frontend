import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';
import { LogService } from 'src/app/2 - core/application/services/log.service';
import { LoginService } from 'src/app/2 - core/application/services/login.service';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';
import { LogFilterModel } from 'src/app/2 - core/domain/models/logfilter.model';
import { environment } from 'src/environments/environment';
import { CrudListComponent } from '../../crud/crud-list/crud-list.component';
import { LogDeleteComponent } from '../log-delete/log-delete.component';
import { LogFormComponent } from '../log-form/log-form.component';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent extends CrudListComponent<LogModel> {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  @ViewChild('fileInput') fileInput: any;

  title: string = `${environment.appName} - Logs`;

  columns: string[] = ['Id', 'Ip', 'App', 'User', 'Date', 'RequestType', 'RequestUrl', 'RequestProtocol', 'StatusCode',
    'ContentSize', 'ResponseUrl', 'UserAgent'];
  displayedColumns: string[] = ['Id', 'Ip', 'App', 'User', 'Date', 'RequestType', 'RequestUrl', 'RequestProtocol', 'StatusCode',
    'ContentSize', 'ResponseUrl', 'UserAgent', 'Edit', 'Delete'];

  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    public loginService: LoginService,
    public logService: LogService
  ){
    super(dialog, loginService, logService);
    this.titleService.setTitle(this.title);
    this.filter = new LogFilterModel();
  }

  async insertBatch(event: any | null) {
    let files: FileList = event.target.files;
    if(files != null) {
      await this.logService.InsertBatch(files[0]).subscribe(res => {
        this.getAll();
      },
      err => alert(err.message));
      this.fileInput.nativeElement.value = null;
      this.filter = new LogFilterModel();
    }
  }

  openInsertDialog(): void {
    const dialogRef = this.dialog.open(LogFormComponent, {
      autoFocus: true,
      disableClose: true,
      data: null
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

  openEditDialog(obj: LogModel): void {
    const dialogRef = this.dialog.open(LogFormComponent, {
      autoFocus: true,
      disableClose: true,
      data: obj
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(LogDeleteComponent, {
      autoFocus: true,
      disableClose: true,
      data: id
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

  filterIp(event: any): void {
    let value: string | null = event.target.value;
    this.filter.ip = value;
    this.getAll();
  }

  filterHour(event: any): void {
    let value: string | null = event.target.value;
    this.filter.hour = Number(value);
    this.getAll();
  }

  filterUserAgent(event: any): void {
    let value: string | null = event.target.value;
    this.filter.userAgent = value;
    this.getAll();
  }
}
