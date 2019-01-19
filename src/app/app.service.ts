import { Injectable } from '@angular/core';
import { CallCenter } from './app.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Config } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

	public docChanged: Observable<any>;
	private refDoc: AngularFirestoreDocument<CallCenter>;

	constructor(private db: AngularFirestore) {
		this.docChanged = this.db.collection(Config.CollectionEndpoint).snapshotChanges();
		this.refDoc = this.db.collection(Config.CollectionEndpoint).doc<CallCenter>(`${Config.CollectionEndpoint}/calls`);
	}

	updateCallCenter() {
	}

}
