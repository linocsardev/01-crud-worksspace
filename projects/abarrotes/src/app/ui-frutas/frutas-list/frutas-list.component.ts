import { Component } from '@angular/core';
import Fruta from '../fruta.inteface';

@Component({
  selector: 'app-frutas-list',
  standalone: true,
  imports: [],
  templateUrl: './frutas-list.component.html',
  styleUrl: './frutas-list.component.scss'
})
export class FrutasListComponent {

  frutas: Fruta[] = []

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
  seleccionarFruta(frutaId: number){
    console.log(this.frutas[frutaId])
  }
  add(){

  }
  update(fruta:Fruta) {

  }
  delete(fruta:Fruta, index: number){

  }

}
