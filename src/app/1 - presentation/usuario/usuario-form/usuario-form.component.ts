import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/2 - core/application/services/usuario.service';
import { Escolaridade } from 'src/app/2 - core/domain/enums/escolaridade.enum';
import { UsuarioModel } from 'src/app/2 - core/domain/models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  title: string = 'Editar';

  escolaridade = Escolaridade;
  enumKeys: string[];
  
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('1990-01-01', [Validators.required]),
    escolaridade: new FormControl(1, [Validators.required])
  });

  constructor(
    public datepipe: DatePipe,
    private dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsuarioModel | null,
    private usuarioService: UsuarioService
    ) {
      this.enumKeys = Object.keys(this.escolaridade);

      if (data != null) {
        this.form.controls.id.setValue(this.data?.id);
        this.form.controls.nome.setValue(this.data?.nome);
        this.form.controls.sobrenome.setValue(this.data?.sobrenome);
        this.form.controls.email.setValue(this.data?.email);
        this.form.controls.dataNascimento.setValue(this.datepipe.transform(this.data?.dataNascimento, 'yyyy-MM-dd'));
        this.form.controls.escolaridade.setValue(this.data?.escolaridade);
      }
    }

  ngOnInit(): void {
  }

  async submeterUsuario(data: UsuarioModel) {
    if (!this.form.valid){
      return alert('Formulário possui erros, favor verificar dados');
    }

    let usuario: UsuarioModel =  {
      nome: this.form.controls.nome.value,
      sobrenome: this.form.controls.sobrenome.value,
      email: this.form.controls.email.value,
      dataNascimento: this.form.controls.dataNascimento.value,
      escolaridade: this.form.controls.escolaridade.value,
    };

    if(this.data != null) {
      usuario.id = this.form.controls.id.value;
      await this.usuarioService.Update(usuario).subscribe(() => this.SuccessRequest("alterado"));
    } else {
      await this.usuarioService.Insert(usuario).subscribe(() => this.SuccessRequest("inserido"));
    }

  }

  private SuccessRequest(action: string) {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      alert(`Usuário ${action} com sucesso`);
    });
  }
}
