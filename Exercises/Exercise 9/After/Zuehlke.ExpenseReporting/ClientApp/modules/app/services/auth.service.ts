import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable()
export class AuthService {

    isAuthorized: Boolean;

    constructor(private router: Router, private notify: NotificationService) {
    }

    fakeLogin(): void {
        this.isAuthorized = true;
        this.notify.success("You are now logged in!");
    }

    fakeLogout(): void {
        this.isAuthorized = false;
        this.notify.info("You have successfully logged out!");
        this.router.navigate(['/home']);
    }
}