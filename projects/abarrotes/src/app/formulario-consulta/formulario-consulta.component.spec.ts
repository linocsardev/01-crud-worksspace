import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsultaComponent } from './formulario-consulta.component';

describe('FormularioConsultaComponent', () => {
  let component: FormularioConsultaComponent;
  let fixture: ComponentFixture<FormularioConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
