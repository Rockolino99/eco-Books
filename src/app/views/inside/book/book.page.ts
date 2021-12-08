import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../../services/firebase/firebase.service"

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  public book: {}
  public vendedor: {}

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    const bookID = this.route.snapshot.paramMap.get('id');
    
    this.firebase.getBookByID(bookID).subscribe( bookSnapshot => {
      this.book = bookSnapshot.payload.data()
      
      this.firebase.getUserData(this.book['uid']).subscribe( userSnapshot => {
        this.vendedor = userSnapshot[0].payload.doc.data();
      })
    })

    /*this.firebase.getBook(bookIdioma).subscribe(bookSnapshot => {
      this.book = bookSnapshot.payload.data()
    })*/


  }

}
