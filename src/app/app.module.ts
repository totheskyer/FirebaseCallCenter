import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { Config } from '../environments/environment.dev';
import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(Config.FirebaseConfig),
        HttpClientModule
    ],
    providers: [
        HttpClient,
        AngularFirestore,
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
