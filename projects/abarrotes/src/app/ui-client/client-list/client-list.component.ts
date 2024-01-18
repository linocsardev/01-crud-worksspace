import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ClientService } from '../client.service';
import { Customer } from '../client.interface';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  private http = inject(HttpClient)
  clienteService = inject(ClientService)
  clients?:Customer[]
  async listar(){
    try {
      // let clientes = await this.clienteService.list;
      // console.log(clientes)
    } catch (error) {
      console.log(error)
    }
  }
}
