import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { functions } from 'firebase';
import { Observable } from 'rxjs';
import { Config } from 'src/environments/environment.dev';

@Injectable()
export class AppService {

    public docChanged: Observable<any>;

    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private db: AngularFirestore,
        protected http: HttpClient) {
        this.docChanged = this.db.collection(Config.CollectionEndpoint).snapshotChanges();
        // this.refDoc = this.db.collection(Config.CollectionEndpoint).doc<CallCenter>(`${Config.CollectionEndpoint}/calls`);
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(req);
    // }

    updateCallCenter() {
        let _functions = functions();

        let getCalls = _functions.httpsCallable('getCalls');
        getCalls().then(response => {
            console.log(response);
            // if (response.code == '400') {
            //     this.errMessage = response.message;
            // } else {
            //     this.counts = response.calls;
            // }
        })
        .catch(err => {
            console.log(err);
            // this.errMessage = err.message;
        });
    };
}
