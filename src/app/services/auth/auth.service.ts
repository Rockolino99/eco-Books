import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { FirebaseService } from '../firebase/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public auth: AngularFireAuth,
    public router: Router,
  ) { }

  register(form) {

    this.auth.createUserWithEmailAndPassword(form.correo, form.password)
    .then(user => {
      this.auth.currentUser.then(srs => {
        srs.updateProfile({
          displayName: form.nombre + " " + form.apellidos,
        })
        this.router.navigate(['login'])
        return
      })
      //console.log(user)
    })
    .catch(e => {
      let error = e.code
      let text = 'Algo salió mal, intente de nuevo'
      if(error == 'auth/email-already-in-use')
        text = 'El correo ya está registrado'
      else if(error == 'auth/invalid-email')
        text = 'El correo es inválido'
        setTimeout(() => {
          Swal.fire({
            icon: 'error',
            text: text,
            showConfirmButton: false,
            timer: 1500
          })
        }, 1); 
        return
    })
  }

  
  customLogin(correo, password) {
    this.auth.signInWithEmailAndPassword(correo, password)
    .then( res => {
      //this.cleanForms()
      //Swal.fire('Custom Login')
      //this.router.navigate(['home'])
      this.router.navigate(['master'])
    })
    .catch( e => {
      let error = e.code
      let text = 'Algo salió mal, intente de nuevo'
      if(error == 'auth/user-not-found')
        text = 'El usuario no existe'
      else if(error == 'auth/wrong-password')
        text = 'La contraseña es incorrecta'
      
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          text: text,
          showConfirmButton: false,
          timer: 1500
        })
      }, 1); 
      return
      
    })
  }

  logout() {
    this.auth.signOut();
    this.router.navigate(['main'])
    //this.isAdmin = false
    //this.uid = null
    //$('#eventBtn').click()
  }
}
