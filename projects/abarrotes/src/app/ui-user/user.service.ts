import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  User } from './user.interface';


@Injectable({
   providedIn: 'root'
})
export class UserService {

   private http = inject(HttpClient)
   API = 'https://fakestoreapi.com/users'
   constructor() { }

   add(user: User) {
      return new Promise((resolve, reject) => {
         this.http.post<User>(`${this.API}`, user)
            .subscribe({
               next: (response) => {
                  console.log(response);
                  resolve(response)
               },
               error: (error) => {
                  console.log(error);
                  reject(error)
               }
            })
      })
   }
   detail(user: User): Promise<User> {
      return new Promise((resolve, reject) => {
         this.http.get<User>(`${this.API}/` + user.id)
            .subscribe({
               next: (user) => {
                  console.log("DATOS RECUPERADOS DEL API")
                  console.log(user);

                  resolve(user)
               },
               error: (err) => {
                  console.log(err);
                  reject(err)
               }
            })
      })
   }
   update(user: User) {
      return new Promise((resolve, reject) => {
         this.http.put<User>(`${this.API}/${user.id}`, user)
            .subscribe({
               next: (response) => {
                  console.log(response);
                  resolve(response)
               },
               error: (error) => {
                  console.log(error);
                  reject(error)
               }
            })
      })
   }
   delete(user: User) {
      return new Promise((resolve, reject) => {
         this.http.delete<User>(`${this.API}/${user.id}`)
            .subscribe({
               next: (response) => {
                  console.log(response);
                  resolve(response)
               },
               error: (error) => {
                  console.log(error);
                  reject(error)
               }
            })
      })
   }
   list(): Promise<User[]> {
      return new Promise((resolve, reject) => {
         this.http.get<User[]>(`${this.API}`)
            .subscribe({
               next: (response) => {
                  console.log(response);
                  resolve(response)
               },
               error: (error) => {
                  console.log(error);
                  reject(error)
               }
            })
      })
   }
}
