import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoexamenesPage } from './resultadoexamenes.page';

describe('ResultadoexamenesPage', () => {
  let component: ResultadoexamenesPage;
  let fixture: ComponentFixture<ResultadoexamenesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResultadoexamenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
