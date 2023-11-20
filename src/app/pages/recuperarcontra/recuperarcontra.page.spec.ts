import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RecuperarcontraPage } from './recuperarcontra.page';
import { UserService } from 'src/app/services/user.service';
import { Firestore } from '@angular/fire/firestore';
describe('RecuperarcontraPage', () => {
  let component: RecuperarcontraPage;
  let fixture: ComponentFixture<RecuperarcontraPage>;

  const FirestoreStub = {
    // Añade aquí las funciones y propiedades que necesites simular
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarcontraPage ],
      providers: [
        UserService,
        { provide: Firestore, useValue: FirestoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
