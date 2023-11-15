import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservahoraPage } from './reservahora.page';

describe('ReservahoraPage', () => {
  let component: ReservahoraPage;
  let fixture: ComponentFixture<ReservahoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservahoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
