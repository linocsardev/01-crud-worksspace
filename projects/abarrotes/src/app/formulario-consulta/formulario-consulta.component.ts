import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from '../services/validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './formulario-consulta.component.html',
  styleUrl: './formulario-consulta.component.scss'
})
export class FormularioConsultaComponent {

  validorService = inject(ValidatorService)

  ruc:string=''

  consultaForm = new FormGroup({
    ruc: new FormControl('', [Validators.required, ]),
    fEmision: new FormControl('', [Validators.required]),
    tipoDocumento: new FormControl('', [Validators.required]),
    serie: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required]),

  })
  ngOnInit(){
    console.log(this.ruc)
  }

}
