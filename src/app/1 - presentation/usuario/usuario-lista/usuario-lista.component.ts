import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/2 - core/application/services/usuario.service';
import { UsuarioModel } from 'src/app/2 - core/domain/models/usuario.model';
import { UsuarioDeleteComponent } from '../usuario-delete/usuario-delete.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  title: string = '.Net POC - Usuários';

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = ['ID', 'Nome', 'Sobrenome', 'Email', 'DataNascimento', 'Escolaridade', 'Editar', 'Remover']
  dataSource: MatTableDataSource<UsuarioModel> = new MatTableDataSource<UsuarioModel>([]);

  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private usuarioService: UsuarioService
  ){
    this.titleService.setTitle(this.title);    
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.usuarioService.GetAll().subscribe(r => this.dataSource.data = r);
  }

  openInsertDialog(): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      autoFocus: true,
      disableClose: true,
      data: null
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

  openEditDialog(usuario: UsuarioModel): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      autoFocus: true,
      disableClose: true,
      data: usuario
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(UsuarioDeleteComponent, {
      autoFocus: true,
      disableClose: true,
      data: id
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
  }

}
