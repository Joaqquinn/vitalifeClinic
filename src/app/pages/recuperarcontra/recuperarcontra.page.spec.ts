import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RecuperarcontraPage } from './recuperarcontra.page';

describe('RecuperarcontraPage', () => {
  let component: RecuperarcontraPage;
  let fixture: ComponentFixture<RecuperarcontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
