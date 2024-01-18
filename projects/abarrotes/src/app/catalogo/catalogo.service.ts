import { Injectable, inject } from '@angular/core';
import { Categoria } from '../ui-categoria/categoria.inteface';
import { CategoriaService } from '../ui-categoria/categoria.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {


  categorias: Categoria[] = [];
  
  private categoriaService = inject(CategoriaService)

  constructor() { }

  async getCatalogos(){
    if(this.categorias.length == 0){
      console.log("cargando categorias desde API")
      this.categorias = await this.categoriaService.listar()
    }
  }
}
