import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { Config } from '../environments/environment.dev';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppService } from './app.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(Config.FirebaseConfig),
	],
	providers: [AngularFirestore, AppService],
	bootstrap: [AppComponent]
})
export class AppModule { }
