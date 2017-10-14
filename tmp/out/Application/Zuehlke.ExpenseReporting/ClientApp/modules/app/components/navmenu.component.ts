import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {

    constructor(private authService: AuthService) {
    }

    get isLoggedIn(): Boolean {
        return this.authService.isAuthorized;
    }

    logout(): void {
        this.authService.fakeLogout();
    }
}