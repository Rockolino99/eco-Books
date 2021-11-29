import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //constructor(private  authService:  AuthService, private  router:  Router) { }
  constructor() {}

  ngOnInit() {
  }

  /*register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }*/

}
