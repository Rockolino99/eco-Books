import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string
  public uid: string
  
  constructor(
    public authService: AuthService
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

  logout() {
    this.authService.logout()
  }
}
