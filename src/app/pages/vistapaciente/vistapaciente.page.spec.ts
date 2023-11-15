import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistapacientePage } from './vistapaciente.page';

describe('VistapacientePage', () => {
  let component: VistapacientePage;
  let fixture: ComponentFixture<VistapacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistapacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
