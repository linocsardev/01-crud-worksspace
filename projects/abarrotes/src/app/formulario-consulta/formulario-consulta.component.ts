import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-consulta',
  standalone: true,
  imports: [],
  templateUrl: './formulario-consulta.component.html',
  styleUrl: './formulario-consulta.component.scss'
})
export class FormularioConsultaComponent {


  consultaForm = new FormGroup({
    ruc: new FormControl('', [Validators.required]),
    fEmision: new FormControl('', [Validators.required]),
    tipoDocumento: new FormControl('', [Validators.required]),
    serie: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required]),

  })
}
