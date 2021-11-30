import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Toast, ToastOptions} from '@ionic-native/toast/ngx'
import { NavController, ToastController } from '@ionic/angular';

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
    correo: new FormControl('',Validators.compose([Validators.required, Validators.email]))
  });

  /*public newRegisterForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
    password2: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),
    correo: new FormControl('',Validators.compose([Validators.required, Validators.email]))
  });*/
  
  toastOptions: ToastOptions

  constructor(
    public authService: AuthService,
    private toast: ToastController
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
    this.authService.register(form.value)/*.subscribe((res) => {
      this.router.navigateByUrl('home');
    });*/
  }
}
