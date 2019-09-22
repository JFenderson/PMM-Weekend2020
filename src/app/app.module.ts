import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from "@angular/material/form-field";
import { environment } from '../environments/environment';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CountdownModule } from 'ngx-countdown';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { routingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { Pmmweekend19Component } from './pmmweekend19/pmmweekend19.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Dirty30Component } from './dirty30/dirty30.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    ScheduleComponent,
    Pmmweekend19Component,
    RegistrationComponent,
    ContactComponent,
    PageNotFoundComponent,
    Dirty30Component,
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    routingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CountdownModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
@Injectable({
  providedIn: 'root'
})
export class AppModule {}
