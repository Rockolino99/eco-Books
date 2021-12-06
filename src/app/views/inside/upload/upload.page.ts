import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  });

  constructor(
    private firesbaseService: FirebaseService
  ) {
    this.newBookForm.setValue({
      nombre: '',
      estado: '',
      descripcion: ''
      /*
      idioma
      nivel
      editorial
      precio
      */
    });
  }

  ngOnInit() {
    
  }

  public newBook(form: { nombre: string; estado: string; descripcion: string;}) {

    let data: any = {
      nombre: form.nombre,
      estado: form.estado,
      descripcion: form.descripcion
    }

    this.firesbaseService.createBook(data).then(  () => {
      this.newBookForm.reset();
    }),
    error => {
      console.log(error)
    }
  }

}
