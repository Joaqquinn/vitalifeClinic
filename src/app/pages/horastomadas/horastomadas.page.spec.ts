import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorastomadasPage } from './horastomadas.page';

describe('HorastomadasPage', () => {
  let component: HorastomadasPage;
  let fixture: ComponentFixture<HorastomadasPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HorastomadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
