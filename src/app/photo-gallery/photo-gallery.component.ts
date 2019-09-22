import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import {
//   AngularFireStorage,
//   AngularFireUploadTask
// } from 'angularfire2/storage';
import { AngularFireStorage } from "@angular/fire/storage";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable, Timestamp } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

export interface Image {
  id: string;
  imagePath: string;
  imageURL: string;
  imageName: string;
  maintTs: number;
}

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  imageNm: string;
  imgPath: string;
  images: any[] = [];
  modalImage: any;
  // main task
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.storage.ref();
    const imageRef = ref.child('images');
    imageRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(url => {
            this.images.push(url);
          });
        });
      })
      .catch(error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;

          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }

  ngOnInit() {}
}
