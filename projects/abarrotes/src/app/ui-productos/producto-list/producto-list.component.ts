import { Component, inject } from '@angular/core';

import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductoFormComponent } from '../producto-form/producto-form.component';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto.inteface';
import { ProductoDetailComponent } from '../producto-detail/producto-detail.component';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../ui-categoria/categoria.inteface';
import { FormsModule } from '@angular/forms';
import { CatalogoService } from '../../catalogo/catalogo.service';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [HttpClientModule, NgbModalModule, FormsModule, CommonModule],
  providers: [ProductoService],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.scss',
})
export class ProductoListComponent {
  private productoService = inject(ProductoService);
  private catalagoService = inject(CatalogoService);
  private modal = inject(NgbModal);

  productos: Producto[] = [];
  categorias: Categoria[] = [];
  idcategoria: string = '';
  sharedVariable: any;

  filter?: string;

  async ngOnInit() {
    await this.catalagoService.getCatalogos();
    this.categorias = this.catalagoService.categorias;
    this.listar();
    console.log("INICIO  ", this.newlist)
    console.log(this.idcategoria)
  }

  newlist(){
    const nameCategoria = this.categorias.find(x=>x.idcategoria == +(this.idcategoria == '' ? '0': this.idcategoria))?.denominacion_categoria;
    return this.productos.filter(x=>nameCategoria == undefined || x.category == nameCategoria)
  }

  async listar() {
    let productos = await this.productoService.list();
    this.productos = productos
  }
  add() {
    this.openForm();
  }
  update(producto: Producto) {
    this.openForm('update', producto);
  }

  async openForm(accion = 'add', producto?: Producto) {
    let ref = this.modal.open(ProductoFormComponent);
    ref.componentInstance.accion = accion;
    ref.componentInstance.idcategoria = this.idcategoria;
    this.sharedVariable = this.idcategoria;
    console.log(this.idcategoria);
    if (accion == 'update') {
      ref.componentInstance.producto = JSON.parse(JSON.stringify(producto));
    }
    try {
      let result = await ref.result;
      console.log(result);
      if (accion == 'add') {
        this.productos.unshift(result);
      } else if (accion == 'update' && producto) {
        producto.title = result.title;
        producto.price = result.price;
        producto.category = result.category;
        producto.description = result.description;
        producto.image = result.image;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleted(producto: Producto, indice: number) {
    let confirmar = confirm(
      `estás seguro de eliminar al usuario? ${producto.title}?`
    );
    if (confirmar) {
      try {
        let result = this.productoService.delete(producto);
        console.log('deleted => ', result);
        this.productos.splice(indice, 1);
      } catch (error) {
        console.log('Hubo un error al eliminar ', error);
      }
    }
  }
  detailProduct(producto: Producto) {
    if (this.modal) {
      let ref = this.modal.open(ProductoDetailComponent);
      ref.componentInstance.producto = producto;
    }
  }
  getCategoryClass(category: string): string {
    if (category == "men's clothing") {
      return 'category-men';
    } else if (category == 'jewelery') {
      return 'category-jewelery';
    } else if (category == "women's clothing") {
      return 'category-women';
    } else if (category == 'electronics') {
      return 'category-electronics';
    } else {
      return 'category-default';
    }
  }
  // verResumen(){
  //   this.modal.open()
  // }
}
