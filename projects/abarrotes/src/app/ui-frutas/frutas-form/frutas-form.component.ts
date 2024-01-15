import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Fruta from '../fruta.inteface';

@Component({
  selector: 'app-frutas-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './frutas-form.component.html',
  styleUrl: './frutas-form.component.scss',
})
export class FrutasFormComponent {
  @Input() frutas: Fruta[] = [];
  @Input() accion = 'add';
  @Input() fruta!: Fruta;

  modalActive = inject(NgbActiveModal);

  ngOnInit() {
    console.log(this.accion);
    if ((this.accion == 'update')) {
      this.formFruta.controls.denominacion.setValue(
        this.fruta?.denominacion || ''
      );
      this.formFruta.controls.precio.setValue(this.fruta?.precio || 0);
      this.formFruta.controls.cantidad.setValue(this.fruta?.cantidad || 0);
      this.formFruta.controls.imagen.setValue(this.fruta?.imagen || '');
    }
  }
  formFruta = new FormGroup({
    denominacion: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    precio: new FormControl(0, [Validators.required]),
    cantidad: new FormControl(0.0, [Validators.required]),
    imagen: new FormControl('', []),
  });

  save() {
    console.log(this.formFruta);
    if (this.formFruta.valid) {
      let datos_form = this.formFruta.value;

      if (this.accion == 'add') {
        //temporal
        let _nuevo_id = 1;
        if (this.frutas.length) {
          _nuevo_id = this.frutas[this.frutas.length - 1].codigo + 1;
        }
        //Fin del temporal
        let nuevo: Fruta = {
          codigo: _nuevo_id,
          denominacion: datos_form.denominacion as string,
          imagen: datos_form.imagen as string,
          precio: datos_form.precio as number,
          cantidad: datos_form.cantidad as number,
          cantidad_vendido: 0,
        };
        this.modalActive.close(nuevo);

      } else {
        this.fruta.denominacion =
          datos_form.denominacion || this.fruta.denominacion;
        this.fruta.imagen = datos_form.imagen || this.fruta.imagen;
        this.fruta.precio = datos_form.precio || this.fruta.precio;
        this.fruta.cantidad = datos_form.cantidad || this.fruta.cantidad;
        this.modalActive.close(this.fruta);
      }
    }
  }
  cerrar() {
    this.modalActive.dismiss();
  }
}
