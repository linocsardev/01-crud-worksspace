import { Component, inject } from '@angular/core';
import Fruta from '../fruta.inteface';
import { FrutasFormComponent } from '../frutas-form/frutas-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-frutas-list',
  standalone: true,
  imports: [],
  templateUrl: './frutas-list.component.html',
  styleUrl: './frutas-list.component.scss'
})
export class FrutasListComponent {

  frutas: Fruta[] = []

  modal = inject(NgbModal);
  ngOnInit(){
    this.listar()
  }

  listar(){
    this.frutas = [
      {
          codigo: 1,
          denominacion: "Manzana",
          imagen: "../../../assets/manzana.png",
          precio: 8,
          cantidad: 30,
          cantidad_vendido: 0
      },
      {
          codigo: 2,
          denominacion: "Pera",
          imagen: "../../../assets/pera.png",
          precio: 9,
          cantidad: 25,
          cantidad_vendido: 0

      },
      {
          codigo: 3,
          denominacion: "Cereza",
          imagen: "../../../assets/cereza.png",
          precio: 6,
          cantidad: 18,
          cantidad_vendido: 0
      },
      {
          codigo: 4,
          denominacion: "Limon",
          imagen: "../../../assets/limon.png",
          precio: 9,
          cantidad: 30,
          cantidad_vendido: 0
      },
      {
        codigo: 5,
        denominacion: "Sandia",
        imagen: "../../../assets/sandia.png",
        precio: 9,
        cantidad: 30,
        cantidad_vendido: 0
    },
    {
      codigo: 6,
      denominacion: "Uvas",
      imagen: "../../../assets/uvas.png",
      precio: 9,
      cantidad: 30,
      cantidad_vendido: 0
  }
    ]

  }
  seleccionarFruta(fruta: Fruta){

  }
  add(){
    this.openForm()
  }
  update(fruta:Fruta) {
    this.openForm('update', fruta)
  }
  async openForm(accion='add', fruta?:Fruta){
    let ref = this.modal.open(FrutasFormComponent)
    ref.componentInstance.accion=accion;
    ref.componentInstance.frutas = this.frutas;
    if(accion = 'update'){
      ref.componentInstance.fruta = fruta;
    }
    //Espera para la confirmacion
    try {
      let result = await ref.result;
      console.log("result ===> ", result )
      console.log("ACCION ", accion)
      if(accion == 'add'){
        this.frutas.push(result)
        console.log("s*****:/*****")
      }
      console.log(this.frutas)
      alert("Se guardó correctamente")
    } catch (error) {
      alert("hubo un error al guardar")
    }

  }
  deleted(fruta:Fruta, index: number){
    if(confirm("¿Estas seguro de eliminar el registro?")){
      this.frutas.splice(index, 1);
    }
  }

}
