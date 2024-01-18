import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  private userService = inject(UserService)
  private modal = inject(NgbModal)

  users:User[] = []

  ngOnInit(){
    this.listar()
  }

  async listar(){
    let users = await this.userService.list()
    this.users = users;
  }

  //registrar
  add(){
    this.openForm()
  }
  update(user: User){
    this.openForm('update', user)
  }
  async openForm(accion='add', user?: User){
    let ref = this.modal.open(UserFormComponent);
    ref.componentInstance.accion= accion;
    if(accion=='update'){
      ref.componentInstance.user = JSON.parse(JSON.stringify(user))
    }
    try {
      let result = await ref.result;
      if(accion == 'add'){
        this.users.unshift(result)
        //prueba
        console.log("+++Prueba+++")
        console.log(this.users)
        console.log(result)
      }else if(accion == 'update' && user){
        user.username = result.username;
        user.name.firstname = result.name.firstname;
        user.name.lastname = result.name.lastname;
        user.email = result.email
        user.password = result.password;
        user.address.city = result.address.city
        user.address.street = result.address.street
        user.address.number = result.address.number
        user.address.zipcode = result.address.zipcode
        user.phone = result.phone
      }
      alert("Operación Exitosa !!!")
    } catch (error) {
      alert("No se terminó la operación")
      console.log(error)
    }
  }
  async deleted(user:User, indice:number){
    let confirmar = confirm(`¿Estás seguro de eliminar a ${user.username} de la lista`)
    if(confirmar){
      try {
        let result = await this.userService.delete(user)
        console.log("deleted ", result)
        this.users.splice(indice, 1)
      } catch (error) {
        console.log("Hubo un error al eliminar ", error)
      }
    }

  }
  userDetail(user:User){
    let ref = this.modal.open(UserDetailComponent)
    ref.componentInstance.user = user;
  }
}
