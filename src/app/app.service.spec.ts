import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

const FirestoreStub = {
	collection: (name: string) => ({
		doc: (_id: string) => ({
			valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
			set: (_d: any) => new Promise((resolve, _reject) => resolve()),
		}),
	}),
};

describe('AppService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		providers: [
			{ provide: AngularFirestore, useValue: FirestoreStub },
		],
	}));

	it('should be created', () => {
		const service: AppService = TestBed.get(AppService);
		expect(service).toBeTruthy();
	});
});
