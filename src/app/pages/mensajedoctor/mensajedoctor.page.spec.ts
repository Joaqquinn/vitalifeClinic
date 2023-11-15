import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajedoctorPage } from './mensajedoctor.page';

describe('MensajedoctorPage', () => {
  let component: MensajedoctorPage;
  let fixture: ComponentFixture<MensajedoctorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajedoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
