import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from '../../../services/firebase/firebase.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //constructor(private  authService:  AuthService, private  router:  Router) { }

  triedRegister: boolean = false;

  public newRegisterForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('',Validators.required),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
    correo: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    celular: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/), Validators.minLength(10), Validators.maxLength(10)]))
  });

  constructor(
    public authService: AuthService,
    public firebase: FirebaseService
  ) {}

  ngOnInit() {
  }

  validateRegister(form) {
    this.triedRegister = true;
    //After proccess
    if (this.newRegisterForm.valid) {
      this.authService.register(form);
      this.triedRegister = false;
    }
  }

  register(form) {
    this.authService.register(form.value)
    //this.firebase.createUser(form.value)
    /*.subscribe((res) => {
      this.router.navigateByUrl('home');
    });*/
  }
}
