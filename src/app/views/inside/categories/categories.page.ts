import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  
  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
    
  }
}
