import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarmedicoPage } from './registrarmedico.page';

describe('RegistrarmedicoPage', () => {
  let component: RegistrarmedicoPage;
  let fixture: ComponentFixture<RegistrarmedicoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RegistrarmedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
