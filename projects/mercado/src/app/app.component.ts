import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from '../../../shared/src/app/cronometro/cronometro.component';
import { ContadorComponent } from '../../../modules/contador/contador.component';
import Fruta from '../../interfaces/fruta.inteface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponent, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private modal = inject(NgbModal)
  frutaSeleccionada:Fruta[] = []

  frutas = [
    {
      id: 1,
      nombre: 'Cereza',
      descripcion: 'Descripción del Producto 1',
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Mandarina',
      descripcion: 'Descripción del Producto 2',
      estado: 'Inactivo',
    },
    {
      id: 3,
      nombre: 'Mango',
      descripcion: 'Descripción del Producto 3',
      estado: 'Activo',
    },
    {
      id: 4,
      nombre: 'Uva',
      descripcion: 'Descripción del Producto 4',
      estado: 'Activo',
    },
  ]


  async seleccionarProd(productoId: number){

    try {
      let ref = this.modal.open(SaludoComponent, {size: 'xl'});
      this.frutaSeleccionada = this.frutas.filter((fruta)=> fruta === this.frutas[productoId]);
      console.log(this.frutaSeleccionada)
      ref.componentInstance.item = this.frutaSeleccionada;
      let result = await ref.result
      console.log(result)


    } catch (error) {
      console.log(error)
    }
  }
}
