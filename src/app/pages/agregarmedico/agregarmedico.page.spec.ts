import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarmedicoPage } from './agregarmedico.page';
import { FormsModule } from '@angular/forms'; 

describe('AgregarmedicoPage', () => {
  let component: AgregarmedicoPage;
  let fixture: ComponentFixture<AgregarmedicoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(AgregarmedicoPage);
    imports: [ 
      FormsModule     
  ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
