import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  triedLogin: boolean = false;

  public newLoginForm = new FormGroup({
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
    correo: new FormControl('',Validators.compose([Validators.required, Validators.email]))
  });

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.newLoginForm.setValue({
      correo: "juanito@gmail.com",
      password: "juanito"
    })
  }

  validateLogin(form) {
    this.triedLogin = true;
    //After proccess
    if (this.newLoginForm.valid) {
      this.authService.customLogin(this.newLoginForm.controls['correo'].value, this.newLoginForm.controls['password'].value)
      this.triedLogin = false;
    }
  }

}
