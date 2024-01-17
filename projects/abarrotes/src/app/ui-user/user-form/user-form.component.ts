import { Component, Input, Optional, inject } from '@angular/core';
import { User } from '../user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    this.save()
  }
  userForm = new FormGroup({
    email: new FormControl('',[]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    city: new FormControl('', []),
    street: new FormControl('',[]),
    number: new FormControl('', []),
    zipcode: new FormControl('', []),
    geoLat: new FormControl('', []),
    geoLong: new FormControl('', []),

  })

  save(){
    console.log(this.userForm)
  }
  close(){

  }


}
