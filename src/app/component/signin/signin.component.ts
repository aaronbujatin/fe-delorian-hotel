import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  constructor(private userService : UserService,
    private authGuard : AuthGuardService ){}

  user : User = new User();

  onSubmit(signinForm : NgForm){
      this.userService.loginUser(this.user).subscribe(
        (response:any) => {  
          console.log(response);   
          this.authGuard.setRoles(response.role); 
          this.authGuard.setRoles(response.JSESSIONID);


        },
        (error) => {
          console.log(error);
          
        }
      );
  }

}
