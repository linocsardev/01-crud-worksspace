import { Component, inject } from '@angular/core';

import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductoFormComponent } from '../producto-form/producto-form.component';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto.inteface';


@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [HttpClientModule, NgbModalModule],
  providers: [ProductoService],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.scss'
})
export class ProductoListComponent {
  private productoService = inject(ProductoService)
  private modal = inject(NgbModal)

  productos: Producto[] = []
  // productos2: Array<Producto> = []

  ngOnInit(){
    this.listar()
  }

  async listar(){
  let productos = await this.productoService.list()
  this.productos = productos
  }

  add(){
    this.openForm()
  }
  update(producto: Producto){
    this.openForm('update', producto)
  }
  async openForm(accion = 'add', producto?: Producto){
    let ref = this.modal.open(ProductoFormComponent)
    ref.componentInstance.accion= accion;
    if(accion == "update"){
      ref.componentInstance.producto = JSON.parse(JSON.stringify(producto))
    }
    try {
      let result = await ref.result;
      console.log(result);
      if(accion == "add"){
        this.productos.unshift(result)
      }else if(accion == 'update' && producto){
        producto.title = result.title;
        producto.price = result.price;
        producto.category = result.category;
        producto.description = result.description;
        producto.image = result.image
      }
    } catch (error) {
      console.log(error)
    }
  }


  deleted(producto: Producto, indice: number){}
}
