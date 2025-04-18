import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { PostFormComponent } from './posts/post-form.component';
import { PostListComponent } from './posts/post-list.component';
import { MapComponent } from './map/map.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostListComponent, MapComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
