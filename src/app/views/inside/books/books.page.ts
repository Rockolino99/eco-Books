import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  public books:any = [];
  public titulo: string;

  constructor(
    private firestoreService: FirebaseService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.titulo = "Libros disponibles"
    
    const idioma = this.route.snapshot.paramMap.get('idioma');
    
    if(idioma == null) {//Todos los libros

      this.firestoreService.getBooks().subscribe( booksSnapshot => {
        this.fillArray(booksSnapshot)
      })

    } else {

      this.firestoreService.getBooksByLanguaje(idioma).subscribe( booksSnapshot => {
        this.fillArray(booksSnapshot)
      })
      this.titulo = "Libros de " + idioma

    }
    
  }

  fillArray(booksSnapshot) {
    this.books = [];
      booksSnapshot.forEach( bookData => {
        this.books.push({
          id: bookData.payload.doc.id,
          data: bookData.payload.doc.data()
        })
      })
  }

}
