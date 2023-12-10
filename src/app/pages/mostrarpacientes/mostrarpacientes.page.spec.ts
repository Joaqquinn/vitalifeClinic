import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarpacientesPage } from './mostrarpacientes.page';

describe('MostrarpacientesPage', () => {
  let component: MostrarpacientesPage;
  let fixture: ComponentFixture<MostrarpacientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarpacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
