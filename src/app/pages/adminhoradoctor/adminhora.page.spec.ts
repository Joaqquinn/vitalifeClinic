import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminhoraPage } from './adminhora.page';

describe('AdminhoraPage', () => {
  let component: AdminhoraPage;
  let fixture: ComponentFixture<AdminhoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminhoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
