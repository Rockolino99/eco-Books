import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore ) { }

  //Books
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

  //Users
  public createUser(data: {uid: string, nombre: string, celular: Number, email: string}) {
    return this.firestore.collection('users').add(data)
  }

  public getUserData(uid) {
    return this.firestore.collection('users', data => {
      return data.where('uid', '==', uid)
    }).snapshotChanges()
  }
}
