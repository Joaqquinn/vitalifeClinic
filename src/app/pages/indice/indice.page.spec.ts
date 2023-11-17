import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicePage } from './indice.page';

describe('IndicePage', () => {
  let component: IndicePage;
  let fixture: ComponentFixture<IndicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
