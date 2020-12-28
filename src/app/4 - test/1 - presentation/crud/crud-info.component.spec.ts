import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudFormComponent } from 'src/app/1 - presentation/crud/crud-form/crud-form.component';
import { LogFormComponent } from 'src/app/1 - presentation/log/log-form/log-form.component';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';


describe('CrudInfoComponent', () => {
  let component: CrudFormComponent<LogModel>;
  let fixture: ComponentFixture<CrudFormComponent<LogModel>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
