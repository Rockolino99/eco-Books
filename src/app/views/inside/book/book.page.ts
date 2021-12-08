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
    /*this.firebase.getBook(bookID).subscribe( bookSnapshot => {
      bookSnapshot.forEach(book => {
        
      });
      
    })*/
    this.firebase.getBook(bookID).subscribe( bookSnapshot => {
      this.book = bookSnapshot.payload.data()
      console.log(this.book);
      
      this.firebase.getUserData(this.book['uid']).subscribe( userSnapshot => {
        this.vendedor = userSnapshot[0].payload.doc.data();
        console.log(this.vendedor);
        
      })
    })
  }

}
