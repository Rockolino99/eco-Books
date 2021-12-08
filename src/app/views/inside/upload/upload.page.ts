import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public newBookForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    idioma: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required),
    editorial: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.compose([Validators.required, Validators.min(1)])),
  });

  public uid: string

  constructor(
    private firesbaseService: FirebaseService,
    private auth: AuthService
  ) {
    this.newBookForm.setValue({
      nombre: '',
      estado: '',
      descripcion: '',
      idioma: '',
      editorial: '',
      precio: '',
      nivel: ''
    });
    setTimeout(() => {
      this.auth.auth.currentUser.then( user => {
        this.uid = user.uid
        console.log(this.uid);
      })
    }, 2000);
  }

  ngOnInit() {
    
  }

  public newBook(form: { 
                  nombre: string;
                  estado: string;
                  descripcion: string;
                  idioma: string;
                  nivel: string;
                  editorial: string;
                  precio: number;
                }) {

    let data: any = {
      nombre: form.nombre,
      estado: form.estado,
      descripcion: form.descripcion,
      idioma: form.idioma,
      nivel: form.nivel,
      editorial: form.editorial,
      precio: form.precio,
      uid: this.uid
    }
    console.log(this.uid);
    

    this.firesbaseService.createBook(data).then(  () => {
      this.newBookForm.reset();
      
    }),
    error => {
      console.log(error)
    }
  }

}
