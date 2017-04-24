import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {

    constructor(private authService: AuthService){
    }

    zuehlkeLogo: string = require('../assets/images/zuehlke_logo.jpg');
    pageTitle: string = 'Welcome to the Expenses Management Tool';

    get isLoggedIn() : Boolean {
        return this.authService.isAuthorized;
    } 

    login(): void {
        this.authService.fakeLogin();
    }

}