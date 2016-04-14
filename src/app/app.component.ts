import {Component, OnInit} from 'angular2/core';
import {AppState} from './app.service';

@Component({
    selector: 'app',
    template: '<h1>Hello</h1>'
})
export class App implements OnInit {
    constructor(public appState: AppState) {

    }
    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}
