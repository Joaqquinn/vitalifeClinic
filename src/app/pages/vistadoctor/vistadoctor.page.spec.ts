import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistadoctorPage } from './vistadoctor.page';

describe('VistadoctorPage', () => {
  let component: VistadoctorPage;
  let fixture: ComponentFixture<VistadoctorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistadoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
