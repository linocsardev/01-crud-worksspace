import { Component, Input, inject } from '@angular/core';
import { Producto } from '../producto.inteface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-producto-detail',
  standalone: true,
  imports: [],
  templateUrl: './producto-detail.component.html',
  styleUrl: './producto-detail.component.scss'
})
export class ProductoDetailComponent {

  @Input() producto!:Producto;
  private modal = inject(NgbActiveModal)

  close(){
    this.modal.dismiss()
  }
}
