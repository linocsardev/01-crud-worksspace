import { Component, Input, Optional, inject } from '@angular/core';
import { User } from '../user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  }
  userForm = new FormGroup({

  })
  save(){

  }
  close(){

  }


}
