import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  public books:any = [];

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
    this.firestoreService.getBooks().subscribe( booksSnapshot => {
      this.books = [];
      booksSnapshot.forEach( bookData => {
        this.books.push({
          id: bookData.payload.doc.id,
          data: bookData.payload.doc.data()
        })
      })
    })
  }

}
