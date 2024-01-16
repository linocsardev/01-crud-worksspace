import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto } from './producto.inteface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient)
  API = 'https://fakestoreapi.com/products'
  constructor() { }

  add(producto: Producto){
    return new Promise((resolve, reject)=>{
      this.http.post<Producto>(`${this.API}`, producto)
        .subscribe({
          next: (response)=>{
            console.log(response)
            resolve(response)
          },
          error: (error)=>{
            console.log(error)
            reject(error)
          }
        })
    })
  }
  update(producto: Producto){
    return new Promise((resolve, reject)=>{
      this.http.put<Producto>(this.API + `/${producto.id}`,producto)
        .subscribe({
          next: (response)=>{
            console.log(resolve)
            resolve(response)
          },
          error: (error)=>{
            reject(error)
          }
        })
    })
  }

  list(): Promise<Producto[]>{
    return new Promise((resolve, reject)=>{
      this.http.get<Producto[]>(this.API)
        .subscribe({
          next: (response)=>{
            resolve(response)
          },
          error: (error)=> {
            console.log(error)
            reject(error)
          }
        })
    })
  }
  detail(producto: Producto){
    return new Promise((resolve, reject)=>{
      this.http.get<Producto>(this.API+`/${producto.id}`)
        .subscribe({
          next: (response)=> {
            resolve(response)
          },
          error: (error)=>{
            console.log(error)
            reject(error)
          }
        })
    })
  }
  delete(producto: Producto){
    return new Promise((resolve, reject)=>{
      this.http.delete<Producto>(this.API+`/${producto.id}`)
        .subscribe({
          next: (response)=>{
            resolve(response)
          },
          error:(error)=>{
            reject(error)
          }
        })
    })
  }

}
