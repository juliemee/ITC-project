import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RequestsComponent } from './requests/requests.component';
import { ReserveFormComponent } from './reserve-form/reserve-form.component';
import { RequestService } from './shared/request.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RequestsComponent,
    ReserveFormComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
