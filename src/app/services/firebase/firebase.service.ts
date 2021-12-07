import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore ) { }

  public getBooks() {
    return this.firestore.collection('books').snapshotChanges();
  }

  
  public createBook(data: {nombre: string, estado: string, descripcion: string}) {
    return this.firestore.collection('books').add(data)
  }

  public getBook(documentID: string) {
    return this.firestore.collection('books').doc(documentID).snapshotChanges();
  }
/*
  public getDogs() {
    return this.firestore.collection('dogs').snapshotChanges();
  }

  public updateDog(documentID: string, data: any) {
    return this.firestore.collection('dogs').doc(documentID).set(data);
  }

  public deleteDog(documentID: string) {
    return this.firestore.collection('dogs').doc(documentID).delete();
  }
  */
}
