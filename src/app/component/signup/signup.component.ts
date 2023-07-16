import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {


  constructor(private userService : UserService){}

  user : User = new User();

  onSubmit(userForm : NgForm){
    this.userService.registerUser(this.user).subscribe(
      (response : User) => {
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        console.log(error);
        
      }
    )
  }

}
