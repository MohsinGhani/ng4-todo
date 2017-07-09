import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AppComponent } from './app.component';

// Initialize Firebase
   const firebaseConfig = {
    apiKey: "AIzaSyB3Qa09AFDCTuLfqDq8wP-mrDbegczaHJQ",
    authDomain: "ng4-todo.firebaseapp.com",
    databaseURL: "https://ng4-todo.firebaseio.com",
    projectId: "ng4-todo",
    storageBucket: "ng4-todo.appspot.com",
    messagingSenderId: "376220106695"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
