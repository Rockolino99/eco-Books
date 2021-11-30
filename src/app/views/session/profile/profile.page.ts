import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit( ) {
    this.authService.auth.currentUser.then(user => {
      user.getIdToken
      //alert("logueado")
    })
    .catch( err => {
      this.authService.logout()
    })
  }

  logout() {
    this.authService.logout()
  }
}
