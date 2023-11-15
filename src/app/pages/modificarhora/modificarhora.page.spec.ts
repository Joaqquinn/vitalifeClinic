import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarhoraPage } from './modificarhora.page';

describe('ModificarhoraPage', () => {
  let component: ModificarhoraPage;
  let fixture: ComponentFixture<ModificarhoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarhoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
