import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarmedicoPage } from './agregarmedico.page';

describe('AgregarmedicoPage', () => {
  let component: AgregarmedicoPage;
  let fixture: ComponentFixture<AgregarmedicoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(AgregarmedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
