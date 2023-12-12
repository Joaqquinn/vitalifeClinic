import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoramedicaPage } from './horamedica.page';

describe('HoramedicaPage', () => {
  let component: HoramedicaPage;
  let fixture: ComponentFixture<HoramedicaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HoramedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
