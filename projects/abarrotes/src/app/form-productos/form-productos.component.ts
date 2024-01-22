import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.scss'
})
export class FormProductosComponent {

  validationService = inject(ValidationService)

  ngOnInit(){
    this.guardar()
  }


  productoForm = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, ValidationService.numberOnly]),
    marca: new FormControl('', [Validators.required, ValidationService.letterOnly])
  })

  inputIsValid(campo: string){
    const control = this.productoForm.get(campo)
    return control?.touched && control.invalid
  }

  guardar(){

    if(this.productoForm){

    }
  }
  cancelar(){

  }



}
