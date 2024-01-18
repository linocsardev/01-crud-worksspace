import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from './client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API = `https://reqres.in/api/users`
  private http = inject(HttpClient)

  // list():Promise<Customer[]>{

  //   return new Promise((resolve, reject)=>{
  //     this.http.get<Customer>(this.API)
  //       .subscribe({
  //         next: (response)=>{
  //           resolve(response.data)
  //         },
  //         error: (error)=>{
  //           console.log(error)
  //           reject(error)
  //         }
  //       })
  //   })
  // }

}
