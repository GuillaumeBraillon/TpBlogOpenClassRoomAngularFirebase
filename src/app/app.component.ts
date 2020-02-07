import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCHjdGrgpY2pn7x5-ofs1uPfgdaPGhgqXI",
      authDomain: "tpopenclassroomangular.firebaseapp.com",
      databaseURL: "https://tpopenclassroomangular.firebaseio.com",
      projectId: "tpopenclassroomangular",
      storageBucket: "tpopenclassroomangular.appspot.com",
      messagingSenderId: "924241270671",
      appId: "1:924241270671:web:c2761b8075e63a32db9dfa"
    };
    firebase.initializeApp(config);
  }
}
