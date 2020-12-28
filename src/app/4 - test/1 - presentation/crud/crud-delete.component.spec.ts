import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudDeleteComponent } from 'src/app/1 - presentation/crud/crud-delete/crud-delete.component';
import { LogDeleteComponent } from 'src/app/1 - presentation/log/log-delete/log-delete.component';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';


describe('CrudDeleteComponent', () => {
  let component: CrudDeleteComponent<LogModel>;
  let fixture: ComponentFixture<CrudDeleteComponent<LogModel>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
