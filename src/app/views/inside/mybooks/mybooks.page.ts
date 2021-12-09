import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.page.html',
  styleUrls: ['./mybooks.page.scss'],
})
export class MybooksPage implements OnInit {

  public books:any = [];

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public alerta: AlertController
  ) { }

  ngOnInit() {
    const UID = this.route.snapshot.paramMap.get('uid');
    this.firebase.getBooksByUID(UID).subscribe( booksSnapshot => {

      this.books = [];
      booksSnapshot.forEach( bookData => {
        this.books.push({
          id: bookData.payload.doc.id,
          data: bookData.payload.doc.data()
        })
      })
      console.log(this.books)
    })
  }

  async deleteBook(bookID) {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar Libro',
      message: '¿Seguro que quieres eliminar este libro?',
      buttons: [
      {
        text:'Cancelar'
      },
      {
        text:'Eliminar',
        handler: data =>{
          this.firebase.deleteBook(bookID)
          this.envioalerta()
        }
      }
    ],
    });
    await alert.present();
  }

  async envioalerta() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Éxito',
      message: '¡Libro eliminado exitosamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
