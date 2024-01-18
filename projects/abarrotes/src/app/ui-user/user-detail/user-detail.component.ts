import { Component, Input, inject } from '@angular/core';
import { User } from '../user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  @Input() user!:User
  modalActive = inject(NgbActiveModal)

  ngOnInit(){
    console.log(this.user)
  }
  close(){
    if(this.modalActive){
      this.modalActive.dismiss()
    }
  }
}
