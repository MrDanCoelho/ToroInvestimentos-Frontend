import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaComponent } from '../../../1 - presentation/usuario/usuario-lista/usuario-lista.component';

describe('UsuarioListaComponent', () => {
  let component: UsuarioListaComponent;
  let fixture: ComponentFixture<UsuarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
