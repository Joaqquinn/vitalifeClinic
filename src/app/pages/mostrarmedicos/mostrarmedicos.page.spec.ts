import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarmedicosPage } from './mostrarmedicos.page';

describe('MostrarmedicosPage', () => {
  let component: MostrarmedicosPage;
  let fixture: ComponentFixture<MostrarmedicosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MostrarmedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
