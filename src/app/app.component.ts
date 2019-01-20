import { Component } from '@angular/core';
import { CallCenter } from './app.model';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'ConnectionCounter';
    counts: number;
    errMessage = '';

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.appService.docChanged.subscribe(response => {
            console.log(response);
            response.map(actions => {
                console.log(actions);
                const data = actions.payload.doc.data() as CallCenter;
                this.counts = data.calls;
            });
        },
            error => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Please check your connection.');
                }
            });
    }

    connectClicked(event) {
        this.appService.updateCallCenter();
    }
}
