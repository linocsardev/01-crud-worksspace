import { Component, Input, Optional, inject } from '@angular/core';
import { User } from '../user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  @Input() accion = 'add'
  @Input() user?:User
  @Input() isModal:boolean = true;
  @Optional() private modalActive = inject(NgbActiveModal);

  private userService = inject(UserService);
  ngOnInit(){

    document.getElementById("email")?.focus()
    if(this.accion == 'update' && this.user){
      this.userForm.get("email")?.setValue(this.user.email)
      this.userForm.get("username")?.setValue(this.user.username)
      this.userForm.get("password")?.setValue(this.user.password)
      this.userForm.get("firstName")?.setValue(this.user.name.firstname)
      this.userForm.get("lastName")?.setValue(this.user.name.lastname)
      this.userForm.get("city")?.setValue(this.user.address.city)
      this.userForm.get("street")?.setValue(this.user.address.street)
      this.userForm.get("addressNumber")?.setValue((this.user.address.number.toString()))
      this.userForm.get("addressZipcode")?.setValue(this.user.address.zipcode)
      this.userForm.get("geoLat")?.setValue(this.user.address.geolocation.lat)
      this.userForm.get("geoLong")?.setValue(this.user.address.geolocation.long)
      this.userForm.get("phone")?.setValue(this.user.phone)
    }

    console.log(this.userForm)
  }
  userForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    city: new FormControl('', []),
    street: new FormControl('',[]),
    addressNumber: new FormControl('', []),
    addressZipcode: new FormControl('', []),
    geoLat: new FormControl('', []),
    geoLong: new FormControl('', []),
    phone: new FormControl('', []),

  })
  close(){
    if(this.isModal){
      this.modalActive.dismiss()
    }
  }
  async save(){
    if(!this.userForm.valid){
      return alert("algunos campos deben ser obligatorios")
    }
    let datos_form = this.userForm.value;

    if(this.accion == "add"){
      let nuevoUser:User = {
        id: 0,
        email: datos_form?.email || "",
        username: datos_form.username as string,
        password: datos_form.password as string,
        name:{
          firstname:datos_form.firstName as string,
          lastname:datos_form.lastName as string
        },
        address: {
          city: datos_form.city as string,
          street: datos_form.street as string,
          number: datos_form.addressNumber != null ? +datos_form : 0,
          zipcode: datos_form.addressZipcode as string,
          geolocation : {
            lat: datos_form.geoLat as string,
            long: datos_form.geoLong as string,
          }
        },
        phone: datos_form.phone as string
      }
      try {

        console.log(nuevoUser)

        let response = await this.userService.add(nuevoUser)
        console.log("prueba een el userForm ", response)
        this.modalActive.close(response)
      } catch (error) {
        alert("No se concretó la operación")
        console.log(error)
      }
    } else if(this.accion== 'update' && this.user){
      this.user.email = datos_form.email || this.user.email;
      this.user.username = datos_form.username || this.user.username;
      this.user.password = datos_form.password || this.user.password;
      this.user.name.firstname = datos_form.firstName || this.user.name.firstname;
      this.user.name.lastname = datos_form.lastName || this.user.name.lastname;
      this.user.address.city = datos_form.city || this.user.address.city;
      this.user.address.street = datos_form.street || this.user.address.street;
      this.user.address.number = (datos_form.addressNumber !== null && datos_form.addressNumber !== undefined) ? +datos_form.addressNumber : this.user.address.number;
      this.user.address.zipcode = datos_form.addressZipcode || this.user.address.zipcode;
      this.user.address.geolocation.lat = datos_form.geoLat || this.user.address.geolocation.lat;
      this.user.address.geolocation.long = datos_form.geoLong || this.user.address.geolocation.long;
      try {
        let response = await this.userService.update(this.user);
        this.modalActive.close(response);
        console.log(response)

      } catch (error) {

        console.log(error)
      }
    }

  }


}
