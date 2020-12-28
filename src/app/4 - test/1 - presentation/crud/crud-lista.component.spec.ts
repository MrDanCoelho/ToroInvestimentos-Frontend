import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListComponent } from 'src/app/1 - presentation/crud/crud-list/crud-list.component';
import { LogListComponent } from 'src/app/1 - presentation/log/log-list/log-list.component';
import { LogModel } from 'src/app/2 - core/domain/models/log.model';


describe('CrudListComponent', () => {
  let component: CrudListComponent<LogModel>;
  let fixture: ComponentFixture<CrudListComponent<LogModel>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
