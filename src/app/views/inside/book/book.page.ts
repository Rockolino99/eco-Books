import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../../services/firebase/firebase.service"

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    const bookID = this.route.snapshot.paramMap.get('id');
    //this.firebase.getBook(bookID)
  }

}
