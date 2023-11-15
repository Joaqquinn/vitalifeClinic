import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasdispoPage } from './horasdispo.page';

describe('HorasdispoPage', () => {
  let component: HorasdispoPage;
  let fixture: ComponentFixture<HorasdispoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorasdispoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
