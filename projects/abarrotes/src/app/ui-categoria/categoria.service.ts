import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categoria } from './categoria.inteface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API = 'https://fakestoreapi.com/products/categories';
  private http = inject(HttpClient)

  listar(): Promise<Categoria[]>{
    return new Promise((resolve, reject)=>{
      this.http.get<string[]>(this.API)
        .subscribe({
          next: (response: string[])=>{
            let categorias:Categoria[] = []
            response.forEach((categoria, index)=>{
              categorias.push({
                idcategoria: index +1,
                denominacion_categoria: categoria
              })
            })
            resolve(categorias)
          },
          error: (error)=>{
            reject(error)
          }
        })
    })
  }
}
