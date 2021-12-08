import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string
  public uid: string
  
  constructor(
    public authService: AuthService, public alerta: AlertController
  ) { }

  ngOnInit( ) {
    this.authService.auth.currentUser.then(user => {
      this.username = user.displayName
      this.uid = user.uid
    })
    .catch( err => {
      this.authService.logout()
    })
  }

  async logout() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar sesión',
      message: '¿Seguro que quieres cerrar sesión?',
      buttons: [
      {
        text:'Cancelar'
      },
      {
        text:'Cerrar sesión',
        handler: data =>{
          this.authService.logout();
        }
      }
    ],
    });
    await alert.present();
}
}
