import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../producto.inteface';
import { Categoria } from '../../ui-categoria/categoria.inteface';
import { ProductoService } from '../producto.service';

interface summaryCategoria {
  categoria: string;
  cantidad: number;
}
@Component({
  selector: 'app-producto-summary',
  standalone: true,
  imports: [],
  templateUrl: './producto-summary.component.html',
  styleUrl: './producto-summary.component.scss',
})
export class ProductoSummaryComponent {
  @Input() productos: Producto[] = [];
  @Input() categorias: Categoria[] = [];
  totalCategorias: number = 0;
  totalProductos: number = 0;

  modalActive = inject(NgbActiveModal);
  productos2Service = inject(ProductoService);
  ngOnInit() {
    this.getAmountProductByCategory();
  }

  close() {
    this.modalActive.dismiss();
  }

  getAmountProductByCategory() {
    let temp: any = {};

    this.productos.forEach((producto: Producto) => {
      if (!temp[producto.category])
        temp[producto.category] = {
          cantidad: 0,
          category: producto.category,
        };

      temp[producto.category].cantidad++;
    });
    temp = Object.values(temp)

    console.log(temp);
  }
}
