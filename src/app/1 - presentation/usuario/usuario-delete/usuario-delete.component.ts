import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/2 - core/application/services/usuario.service';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.scss']
})
export class UsuarioDeleteComponent implements OnInit {

  title: string = 'Remover';

  constructor(
    private dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
  }

  async apagarUsuario(data: number) {
    await this.usuarioService.Delete(data).subscribe(() => this.SuccessRequest());
  }

  private SuccessRequest() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      alert("Usuário apagado com sucesso");
    });
  }

}
