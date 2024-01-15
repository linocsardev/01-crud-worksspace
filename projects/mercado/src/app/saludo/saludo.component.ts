import { Component, Input, inject, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Fruta from '../../../interfaces/fruta.inteface';


@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent implements OnInit{

  @Input() item:Fruta[] = []
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
  ocultarFruta= false;
  newArray:Fruta[] = []

  private modal = inject(NgbActiveModal)

  ngOnInit(){
    this.mostrartabla()
  }

  mostrartabla(){
    if(this.ocultarFruta){
      this.newArray = this.frutas.filter((fruta)=> fruta.id != this.item[0].id);
    }else{
      this.newArray = this.frutas;
    }
  }
  cerrar(){
    this.modal.dismiss("CERRADO")
  }
  emparejar(proId: number){
    if(this.item[0].id == this.newArray[proId].id){
      alert("coinciden ambos productos")
    }else {
      alert("No coinciden ambos productos")
    }
  }

}
