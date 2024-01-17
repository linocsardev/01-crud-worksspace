import { Component, Input, Optional, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Producto } from '../producto.inteface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.scss'
})
export class ProductoFormComponent {

  @Input() accion = 'add'
  @Input() producto?:Producto;
  @Input() isModal:boolean = true
  @Optional() private modalActive = inject(NgbActiveModal)
  private productoService = inject(ProductoService)

  ngOnInit(){
    document.getElementById("title")?.focus()
    if(this.accion == 'update' && this.producto ){
      this.productoForm.get('title')?.setValue(this.producto.title)
      this.productoForm.get('price')?.setValue(typeof this.producto.price != "undefined" ? this.producto.price + "" : "")
      this.productoForm.get('category')?.setValue(this.producto?.category)
      this.productoForm.get('description')?.setValue(this.producto?.description)
      this.productoForm.get('image')?.setValue(this.producto?.image)
    }
  }

  //esqueleto del formulario

  productoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  close(){
    if(this.isModal){
      this.modalActive.dismiss()
    }
  }
  async save() {

    if (!this.productoForm.valid)
       return;

    let datos_form = this.productoForm.value;
    if ( datos_form.price == undefined || datos_form.price == null || !(+datos_form.price >= 0)) {
       alert("el precio no es valido");
       return;
    }

    if (this.accion == "add") {
       let nuevo_producto: Producto = {
          id: 0,
          rating: {
             count: 0,
             rate: 0,
          },
          title: datos_form.title as string,
          price: +datos_form.price,
          category: datos_form.category as string,
          description: datos_form.description as string,
          image: datos_form.image as string,
       }

       try {
          let response = await this.productoService.add(nuevo_producto);
          console.log(response)
          this.modalActive.close(response)
       } catch (error) {
          console.log(error)
       }

    } else if (this.accion == "update" && this.producto) {
       this.producto.title = datos_form?.title || this.producto.title;
       this.producto.price = +datos_form?.price || this.producto.price;
       this.producto.category = datos_form?.category || this.producto.category;
       this.producto.description = datos_form?.description || this.producto.description;
       this.producto.image = datos_form?.image || this.producto.image;

       try {
          let response = await this.productoService.update(this.producto);
          this.modalActive.close(response)
       } catch (error) {
          console.log(error)
       }
    }
 }

}
