import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.page.html',
  styleUrls: ['./mybooks.page.scss'],
})
export class MybooksPage implements OnInit {

  public books:any = [];

  constructor(
    private firestoreService: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const UID = this.route.snapshot.paramMap.get('uid');
    this.firestoreService.getBooksByUID(UID).subscribe( booksSnapshot => {

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
}
