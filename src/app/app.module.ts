import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ComplaintService } from './services/complaint.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFirestore,ComplaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
